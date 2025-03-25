"use client";

import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton, List, ListItem, Menu, Slider, TextField, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AddCircleOutlineRounded, CloseRounded, KeyboardArrowDownRounded, PersonOutlineRounded, PlaceOutlined, SearchRounded } from '@mui/icons-material';
import AllListings from '@/app/AllListings';
import Grid from '@mui/material/Grid2';
import GoogleMapComponent from './GoogleMap';
import logo from "../Shared/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import './Header.scss';

interface HeaderProps {
  window?: () => Window;
  isHomeSearchVisible: boolean;
  headerSearchQuery: string;
  setHeaderSearchQuery: (query: string) => void;
  setActiveSearchQuery: (query: string) => void;
}

const drawerWidth = 240;

const Header: React.FC<HeaderProps> = ({
  window: windowProp,
  isHomeSearchVisible,
  headerSearchQuery,
  setHeaderSearchQuery,
  setActiveSearchQuery,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const [userCity, setUserCity] = useState<string>("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const open = Boolean(anchorEl);

  const handleClickMapOpen = () => setMapOpen(true);
  const handleMapClose = () => setMapOpen(false);
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const getWindow = () => (typeof windowProp === 'function' ? windowProp() : window);
  const container = windowProp !== undefined ? () => getWindow().document.body : undefined;

  const handleScroll = useCallback(() => {
    const win = getWindow();
    setScrolling(win.scrollY > 50);
  }, [windowProp]);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data && data.city) {
          setUserCity(data.city);
        } else {
          setUserCity("Unknown Location");
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
        setUserCity("Unknown Location");
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    const win = getWindow();
    win.addEventListener("scroll", handleScroll);
    return () => win.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const SearchBar = (
    <div className="header-search-bar">
      <div
        className="relative"
        onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      >
        <Button
          id="basic-button"
          aria-controls={open ? "grouped-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            height: "100%",
            border: "none",
            fontSize: "0.8125rem",
            color: "#000",
            fontWeight: "bold",
            padding: "0 0.375rem",
            "&:hover": { background: "transparent" },
          }}
        >
          <div className="flex items-center p-0 listing-dropdown">
            <span className="ml-1">All Listings</span>
            <KeyboardArrowDownRounded className="ml-1" fontSize="small" />
          </div>
        </Button>
        <Menu
          id="grouped-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            onMouseEnter: () => setAnchorEl(anchorEl),
            onMouseLeave: () => setAnchorEl(null),
            "aria-labelledby": "basic-button",
          }}
        >
          <AllListings />
        </Menu>
      </div>
      <div className="divider"></div>
      <TextField
        variant="outlined"
        placeholder="Search for Jobs, Services, Selling or Buying..."
        className="search-input flex-grow"
        value={headerSearchQuery}
        onChange={(e) => {
          setHeaderSearchQuery(e.target.value);
          setActiveSearchQuery(e.target.value);
        }}
        slotProps={{
          input: {
            sx: {
              fontSize: "0.8125rem",
              height: "2.75rem",
              padding: "0 0.375rem",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
            },
          },
        }}
      />
      <Button className="search-btn">
        <SearchRounded sx={{ fontSize: "1.25rem" }} />
      </Button>
    </div>
  );

  return (
    <div>
      <AppBar
        component="nav"
        sx={{
          boxShadow: scrolling ? "0rem 0.125rem 0.625rem rgba(0, 0, 0, 0.2)" : "none",
          px: { lg: "3.125rem", xl: "7.5rem" },
          backgroundColor: "#fff",
          color: "#000",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          height: "auto",
        }}
      >
        <Toolbar sx={{ minHeight: "3.5rem !important" }} className="header-toolbar">
          <div className="header-left">
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', lg: 'none' }, padding: "0.375rem" }}
            >
              <MenuIcon sx={{ fontSize: "1.25rem" }} />
            </IconButton>
            <div className="logo-container">
              <Link href="/" passHref>
                <Image
                  src={logo}
                  alt="YouLyst icon"
                  width={32}
                  height={32}
                  className="logo"
                />
              </Link>
              <a className="brand-name">
                You<span className="text-[#2067FA]">Lyst</span>
              </a>
            </div>
            <Button
              color="primary"
              size="small"
              onClick={handleClickMapOpen}
              startIcon={<PlaceOutlined fontSize="small" sx={{ color: "#2067FA", fontSize: "1.125rem" }} />}
              sx={{
                fontSize: "0.875rem",
                color: "#2067fa",
                padding: "0 0.375rem",
                marginLeft: "5.625rem",
                "&:hover": { background: "transparent", fontWeight: "bold" },
              }}
            >
              <span className="location-text">{userCity || "Unknown Location"}</span>
            </Button>
          </div>

          <div className={`header-search-container ${isHomeSearchVisible ? 'hidden' : 'visible'}`}>
            {SearchBar}
          </div>

          <List className="header-right">
            <ListItem disablePadding sx={{ display: { xs: 'block', lg: 'none' } }}>
              <IconButton sx={{ padding: "0.375rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.125rem" height="1.125rem" viewBox="0 0 24 24" fill="none">
                  <path d="M20 20L14 14" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 9.5C15 10.9587 14.4205 12.3576 13.3891 13.3891C12.3576 14.4205 10.9587 15 9.5 15C8.04131 15 6.64236 14.4205 5.61091 13.3891C4.57946 12.3576 4 10.9587 4 9.5C4 8.04131 4.57946 6.64236 5.61091 5.61091C6.64236 4.57946 8.04131 4 9.5 4C10.9587 4 12.3576 4.57946 13.3891 5.61091C14.4205 6.64236 15 8.04131 15 9.5Z" stroke="black" strokeWidth="2" />
                </svg>
              </IconButton>
            </ListItem>
            <ListItem disablePadding>
              {/* Future add icons for chat and bell */}
            </ListItem>
            <ListItem disablePadding sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                variant="contained"
                size="small"
                className="post-list"
                startIcon={<AddCircleOutlineRounded sx={{ fontSize: "1.25rem" }} />}
                sx={{
                  textTransform: "none",
                  backgroundColor: "#2067FA",
                  color: "#FFFFFF",
                  border: "none",
                  transition: "background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
                  "&:active": {
                    backgroundColor: "#1A56DB",
                    transform: "scale(0.95)",
                  },
                  fontSize: "0.8125rem",
                  padding: "0.25rem 0.5rem",
                }}
              >
                Post new listing
              </Button>
            </ListItem>
            <ListItem disablePadding sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton size="small" className="post-list-btn" sx={{ padding: "0.375rem" }}>
                <AddCircleOutlineRounded sx={{ fontSize: "1.125rem" }} />
              </IconButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                variant="outlined"
                size="small"
                className="sign-in-btn"
                sx={{
                  textTransform: "none",
                  backgroundColor: "transparent",
                  color: "#2067FA",
                  borderColor: "#2067FA",
                  transition: "color 0.2s ease-in-out, border-color 0.2s ease-in-out, transform 0.2s ease-in-out",
                  "&:active": {
                    color: "#1A56DB",
                    borderColor: "#1A56DB",
                    transform: "scale(0.95)",
                  },
                  fontSize: "0.8125rem",
                  padding: "0.25rem 0.5rem",
                }}
              >
                Sign in
              </Button>
            </ListItem>
            <ListItem disablePadding sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton size="small" className="sign-in-btn" sx={{ padding: "0.375rem" }}>
                <PersonOutlineRounded fontSize="small" sx={{ fontSize: "1.125rem" }} />
              </IconButton>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth / 16}rem` } }}
        >
          <AllListings />
        </Drawer>
      </nav>
      <Dialog fullScreen={fullScreen} open={mapOpen} onClose={handleMapClose} sx={{ "& .MuiDialog-paper": { width: "90%", maxWidth: "34.375rem" } }}>
        <DialogTitle id="responsive-dialog-title">
          <div className="dialog-title">
            <h6 className="dialog-title-text">Choose Location</h6>
            <Button variant="outlined" color="inherit" size="small" onClick={handleMapClose} sx={{ padding: "0.25rem" }}>
              <CloseRounded sx={{ fontSize: "1.125rem" }} />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <form className="dialog-form">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <label className="dialog-label">Search by City or Zip Code</label>
                <TextField
                  required
                  id="outlined-required"
                  size="small"
                  variant="outlined"
                  className="dialog-text-input"
                  defaultValue={userCity || ""}
                  sx={{ "& .MuiInputBase-root": { fontSize: "0.8125rem" } }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <label className="dialog-label">Location <span className="text-[#2067FA]">[32 Miles]</span></label>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{ height: "0.375rem" }} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <label className="dialog-label">(Or) Drag the Pointer here</label>
                <div className="map-container">
                  <GoogleMapComponent />
                </div>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMapClose} autoFocus className="dialog-apply-btn">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
