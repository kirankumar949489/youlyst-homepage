"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "../Shared/Carousel";
import {
  CloseRounded,
  SearchRounded,
  AddRounded,
  RemoveRounded,
  PlaceOutlined,
} from "@mui/icons-material";
import "./HomePage.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Slider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GoogleMapComponent from "../Shared/GoogleMap";
import Grid from "@mui/material/Grid2";
import { StaticImageData } from "next/image";
import Header from "../Shared/Header";
import Electrician1 from "../../../public/images/Electrician/1.png";
import Electrician2 from "../../../public/images/Electrician/2.png";
import Electrician3 from "../../../public/images/Electrician/3.png";
import Electrician4 from "../../../public/images/Electrician/4.png";
import Bed1 from "../../../public/images/Bed_Bath/bed1.png";
import Bed2 from "../../../public/images/Bed_Bath/bed2.png";
import Bath1 from "../../../public/images/Bed_Bath/bath1.png";
import Bath2 from "../../../public/images/Bed_Bath/bath2.png";
import Tool1 from "../../../public/images/Tools/tool1.png";
import Tool2 from "../../../public/images/Tools/tool2.png";
import Tool3 from "../../../public/images/Tools/tool3.png";
import Tool4 from "../../../public/images/Tools/tool4.png";
import Cream1 from "../../../public/images/Creams/cream1.png";
import Cream2 from "../../../public/images/Creams/cream2.png";
import Cream3 from "../../../public/images/Creams/cream3.png";
import Cream4 from "../../../public/images/Creams/cream4.png";
import Bulb1 from "../../../public/images/Bulbs/bulb1.png";
import Bulb2 from "../../../public/images/Bulbs/bulb2.png";
import Bulb3 from "../../../public/images/Bulbs/bulb3.png";
import Bulb4 from "../../../public/images/Bulbs/bulb4.png";
import VehicleBike1 from "../../../public/images/Vehicle/1.png";
import VehicleBike2 from "../../../public/images/Vehicle/2.png";
import VehicleCar1 from "../../../public/images/Vehicle/3.png";
import VehicleCar2 from "../../../public/images/Vehicle/4.png";
import { useRouter } from "next/navigation";

interface Image {
  src: StaticImageData;
  name: string;
}

interface Item {
  images: Image[];
  title: string;
  price: string;
  location: string;
  status: string;
}

interface SectionProps {
  title: string;
  items: Item[];
}

const SearchBar: React.FC<{
  searchQuery: string;
  onSearchChange: (value: string) => void;
  isInHeader?: boolean;
  setActiveSearchQuery: (query: string) => void;
  onClickMapOpen: () => void;
  userCity: string;
}> = ({
  searchQuery,
  onSearchChange,
  isInHeader = false,
  setActiveSearchQuery,
  onClickMapOpen,
  userCity,
}) => {
  return (
    <div
      className={`flex items-center rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white fade-in-delay-2 ${
        isInHeader ? "w-[600px] h-[48px]" : "w-[98%] md:w-[720px] h-[48px]"
      }`}
    >
      <Button
        color="primary"
        size="small"
        onClick={onClickMapOpen}
        startIcon={<PlaceOutlined fontSize="small" sx={{ color: "#2067FA" }} />}
        sx={{
          height: "100%",
          border: "none",
          fontSize: "14px",
          color: "#2067fa",
          padding: "0 8px",
          "&:hover": { background: "transparent", fontWeight: "bold" },
        }}
      >
        <span className="text-sm capitalize">{userCity || "Unknown Location"}</span>
      </Button>
      <div className="h-[30px] w-[1px] bg-gray-300 mx-2"></div>
      <TextField
        variant="outlined"
        placeholder="Search for Jobs, Services, Selling or Buying..."
        className="search-input flex-grow"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSearchChange(e.target.value);
          setActiveSearchQuery(e.target.value);
        }}
        slotProps={{
          input: {
            sx: {
              fontSize: "14px",
              height: "48px",
              padding: "0 8px",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
            },
          },
        }}
      />
      <Button className="search-btn p-2 border border-gray-300 rounded">
        <SearchRounded sx={{ color: "#5D727D" }} />
      </Button>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ title, items }) => {
  const router = useRouter();
  const [visibleCount] = useState(7);

  const totalItems = items.length;
  const hasMoreItems = totalItems > visibleCount;

  const handleShowAll = () => {
    router.push(`/category/${encodeURIComponent(title)}`);
  };

  const handleCardClick = (item: Item) => {
    console.log(`Clicked on ${item.title}`);
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="section-container fade-in-delay-3">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-lg font-semibold text-black hover:underline hover:cursor-pointer">
          {title}
        </h6>
        {hasMoreItems && (
          <button
            onClick={handleShowAll}
            className="text-[#2067FA] font-semibold text-sm hover:underline hover:cursor-pointer"
          >
            Show all
          </button>
        )}
      </div>
      <div className="grid">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="image-card cursor-pointer transition-transform duration-150 hover:shadow-md active:scale-95"
            onClick={() => handleCardClick(item)}
          >
            <div className="carousel-container">
              <Carousel images={item.images} />
            </div>
            <div className="content">
              <h6 className="font-semibold text-[13px] text-[#00171F] truncate">
                {item.title}
              </h6>
              <p className="font-bold text-[12px] text-[#00171F]">{item.price}</p>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-[#788D98] font-semibold text-[10px] truncate">
                  {item.location}
                </p>
                <p className="text-[#788D98] font-semibold text-[10px] truncate">
                  {title === "Vehicles" ? `Miles: ${item.status}` : item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [mapOpen, setMapOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [homeSearchQuery, setHomeSearchQuery] = useState("");
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSearchBarInViewport, setIsSearchBarInViewport] = useState(true);
  const [playMoreAnimation, setPlayMoreAnimation] = useState(false);
  const [playLessAnimation, setPlayLessAnimation] = useState(false);
  const [radiusIndex, setRadiusIndex] = useState<number>(5);
  const [userCity, setUserCity] = useState<string>("");
  const searchBarRef = useRef<HTMLDivElement>(null);

  const radiusOptions = [1, 5, 10, 20, 30, 50, 70, 100, 250, 500];
  const radius = radiusOptions[radiusIndex];

  const marks = radiusOptions.map((value, index) => ({
    value: index,
    label: index === 0 || index === radiusOptions.length - 1
      ? (index === radiusOptions.length - 1 ? `${value} mi` : value)
      : undefined,
  }));

  const words = ["Jobs", "Services", "Selling", "Buying"];

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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!searchBarRef.current) return;
      const rect = searchBarRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const threshold = 20;
      const isNearlyOut = rect.bottom <= threshold;
      const isFullyIn = rect.top >= 0 && rect.bottom <= windowHeight;

      if (isNearlyOut) {
        setIsSearchBarInViewport(false);
      } else if (isFullyIn) {
        setIsSearchBarInViewport(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickMapOpen = () => setMapOpen(true);
  const handleMapClose = () => setMapOpen(false);

  const handleShowLessClick = () => {
    setPlayLessAnimation(true);
    setShowAll(false);
  };

  const handleShowMoreClick = () => {
    setPlayMoreAnimation(true);
    setShowAll(true);
  };

  const handleRadiusChange = (event: Event, newValue: number | number[]) => {
    setRadiusIndex(newValue as number);
  };

  const items: Item[] = [
    {
      images: [
        { src: Electrician1, name: "Electrician1" },
        { src: Electrician2, name: "Electrician2" },
        { src: Electrician3, name: "Electrician3" },
        { src: Electrician4, name: "Electrician4" },
      ],
      title: "Electrician",
      price: "Rs.2,000",
      location: "Saddar, Karachi",
      status: "Available",
    },
    {
      images: [
        { src: Bed1, name: "Bed1" },
        { src: Bed2, name: "Bed2" },
        { src: Bath1, name: "Bath1" },
        { src: Bath2, name: "Bath2" },
      ],
      title: "Bed & Bath",
      price: "Rs.2,000",
      location: userCity || "Chicago, IL",
      status: "Sale",
    },
    {
      images: [
        { src: Tool1, name: "Tool1" },
        { src: Tool2, name: "Tool2" },
        { src: Tool3, name: "Tool3" },
        { src: Tool4, name: "Tool4" },
      ],
      title: "Tools",
      price: "Rs.2,000",
      location: userCity || "Chicago, IL",
      status: "Available",
    },
    {
      images: [
        { src: Cream1, name: "Cream1" },
        { src: Cream2, name: "Cream2" },
        { src: Cream3, name: "Cream3" },
        { src: Cream4, name: "Cream4" },
      ],
      title: "Creams",
      price: "Rs.2,000",
      location: userCity || "Chicago, IL",
      status: "Sale",
    },
    {
      images: [
        { src: Bulb1, name: "Bulb1" },
        { src: Bulb2, name: "Bulb2" },
        { src: Bulb3, name: "Bulb3" },
        { src: Bulb4, name: "Bulb4" },
      ],
      title: "Bulbs",
      price: "Rs.2,000",
      location: userCity || "Chicago, IL",
      status: "Available",
    },
    {
      images: [
        { src: Electrician1, name: "Electrician1" },
        { src: Electrician2, name: "Electrician2" },
        { src: Electrician3, name: "Electrician3" },
        { src: Electrician4, name: "Electrician4" },
      ],
      title: "Electrician 2",
      price: "Rs.2,500",
      location: "Saddar, Karachi",
      status: "Available",
    },
    {
      images: [
        { src: Bed1, name: "Bed1" },
        { src: Bed2, name: "Bed2" },
        { src: Bath1, name: "Bath1" },
        { src: Bath2, name: "Bath2" },
      ],
      title: "Bed & Bath 2",
      price: "Rs.2,200",
      location: userCity || "Chicago, IL",
      status: "Sale",
    },
    {
      images: [
        { src: Tool1, name: "Tool1" },
        { src: Tool2, name: "Tool2" },
        { src: Tool3, name: "Tool3" },
        { src: Tool4, name: "Tool4" },
      ],
      title: "Tools 2",
      price: "Rs.2,300",
      location: userCity || "Chicago, IL",
      status: "Available",
    },
    {
      images: [
        { src: Cream1, name: "Cream1" },
        { src: Cream2, name: "Cream2" },
        { src: Cream3, name: "Cream3" },
        { src: Cream4, name: "Cream4" },
      ],
      title: "Creams 2",
      price: "Rs.2,100",
      location: userCity || "Chicago, IL",
      status: "Sale",
    },
    {
      images: [
        { src: Bulb1, name: "Bulb1" },
        { src: Bulb2, name: "Bulb2" },
        { src: Bulb3, name: "Bulb3" },
        { src: Bulb4, name: "Bulb4" },
      ],
      title: "Bulbs 2",
      price: "Rs.2,400",
      location: userCity || "Chicago, IL",
      status: "Available",
    },
    {
      images: [
        { src: Tool1, name: "Tool1" },
        { src: Tool2, name: "Tool2" },
        { src: Tool3, name: "Tool3" },
        { src: Tool4, name: "Tool4" },
      ],
      title: "Tools 2",
      price: "Rs.2,300",
      location: userCity || "Chicago, IL",
      status: "Available",
    },
    {
      images: [
        { src: Cream1, name: "Cream1" },
        { src: Cream2, name: "Cream2" },
        { src: Cream3, name: "Cream3" },
        { src: Cream4, name: "Cream4" },
      ],
      title: "Creams 2",
      price: "Rs.2,100",
      location: userCity || "Chicago, IL",
      status: "Sale",
    },
    {
      images: [
        { src: Bulb1, name: "Bulb1" },
        { src: Bulb2, name: "Bulb2" },
        { src: Bulb3, name: "Bulb3" },
        { src: Bulb4, name: "Bulb4" },
      ],
      title: "Bulbs 2",
      price: "Rs.2,400",
      location: userCity || "Chicago, IL",
      status: "Available",
    },
  ];

  const vehicleItems: Item[] = [
    {
      images: [
        { src: VehicleBike1, name: "Bike" },
        { src: VehicleBike2, name: "Bike" },
      ],
      title: "Thar Rox",
      price: "$25,000",
      location: userCity || "Chicago, IL",
      status: "40k",
    },
    {
      images: [
        { src: VehicleCar1, name: "Car" },
        { src: VehicleCar2, name: "Car" },
      ],
      title: "Range Rover",
      price: "$75,000",
      location: userCity || "Chicago, IL",
      status: "34.5k",
    },
    {
      images: [
        { src: VehicleBike1, name: "Bike" },
        { src: VehicleBike2, name: "Bike" },
      ],
      title: "Thar Rox 2",
      price: "$26,000",
      location: userCity || "Chicago, IL",
      status: "42k",
    },
    {
      images: [
        { src: VehicleCar1, name: "Car" },
        { src: VehicleCar2, name: "Car" },
      ],
      title: "Range Rover 2",
      price: "$78,000",
      location: userCity || "Chicago, IL",
      status: "36k",
    },
    {
      images: [
        { src: VehicleBike1, name: "Bike" },
        { src: VehicleBike2, name: "Bike" },
      ],
      title: "Thar Rox 3",
      price: "$27,000",
      location: userCity || "Chicago, IL",
      status: "45k",
    },
    {
      images: [
        { src: VehicleCar1, name: "Car" },
        { src: VehicleCar2, name: "Car" },
      ],
      title: "Range Rover 3",
      price: "$80,000",
      location: userCity || "Chicago, IL",
      status: "38k",
    },
    {
      images: [
        { src: VehicleBike1, name: "Bike" },
        { src: VehicleBike2, name: "Bike" },
      ],
      title: "Thar Rox 2",
      price: "$26,000",
      location: userCity || "Chicago, IL",
      status: "42k",
    },
    {
      images: [
        { src: VehicleCar1, name: "Car" },
        { src: VehicleCar2, name: "Car" },
      ],
      title: "Range Rover 2",
      price: "$78,000",
      location: userCity || "Chicago, IL",
      status: "66k",
    },
    {
      images: [
        { src: VehicleBike1, name: "Bike" },
        { src: VehicleBike2, name: "Bike" },
      ],
      title: "Thar Rox 3",
      price: "$27,000",
      location: userCity || "Chicago, IL",
      status: "45k",
    },
    {
      images: [
        { src: VehicleCar1, name: "Car" },
        { src: VehicleCar2, name: "Car" },
      ],
      title: "Range Rover 3",
      price: "$80,000",
      location: userCity || "Chicago, IL",
      status: "38k",
    },
  ];

  const originalSections: SectionProps[] = [
    { title: "Vehicles", items: vehicleItems },
    { title: "Real Estate", items: items },
    { title: "Electronics", items: items },
    { title: "Jobs", items: items },
    { title: "Home Goods", items: items },
    { title: "Furniture", items: items },
    { title: "Appliances", items: items },
    { title: "Home Improvements", items: items },
    { title: "Clothing & Apparel", items: items },
    { title: "Health & Beauty", items: items },
    { title: "Services", items: items },
    { title: "Pets & Supplies", items: items },
    { title: "Items for Sale", items: items },
    { title: "Musical Instruments", items: items },
    { title: "Books, Hobbies & Sports", items: items },
    { title: "Kids Books, Games & Toys", items: items },
    { title: "Entertainment", items: items },
  ];

  const filteredSections = originalSections
    .filter((section) => {
      const matchesSearch = activeSearchQuery
        ? section.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
          section.items.some((item: Item) =>
            item.title.toLowerCase().includes(activeSearchQuery.toLowerCase())
          )
        : true;
      const matchesCategory = selectedCategory
        ? section.title === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    })
    .map((section) => {
      const filteredItems = activeSearchQuery
        ? section.items.filter((item: Item) =>
            item.title.toLowerCase().includes(activeSearchQuery.toLowerCase())
          )
        : section.items;
      return { ...section, items: filteredItems };
    })
    .filter(
      (section) =>
        section.items.length > 0 ||
        section.title.toLowerCase().includes(activeSearchQuery.toLowerCase())
    );

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const initialButtonCount = 12;
  const visibleSections = showAll
    ? originalSections
    : originalSections.slice(0, initialButtonCount);

  return (
    <>
      <Header
        isHomeSearchVisible={isSearchBarInViewport}
        headerSearchQuery={headerSearchQuery}
        setHeaderSearchQuery={setHeaderSearchQuery}
        setActiveSearchQuery={setActiveSearchQuery}
      />
      <div className="homepage-container fade-in" style={{ paddingTop: "80px" }}>
        <div className="text-xl text-[#475a78] font-semibold flex flex-col items-center justify-center">
          <h1 className="text-xl text-[#475a78] font-semibold leading-[normal] md:text-[24px] lg:text-[28px] py-[30px] md:py-[60px] w-auto md:w-[25rem] lg:w-[32rem] text-center fade-in-delay-1">
            <span>Explore Our Marketplace: </span>
            <span
              className={`${
                activeIndex === 0 ? "text-[var(--primary)]" : "text-[#475a78]"
              }`}
            >
              Jobs{" "}
            </span>
            <br className="hidden md:block" />
            {words.slice(1).map((word, index) => (
              <span
                key={index}
                className={`${
                  activeIndex === index + 1
                    ? "text-[var(--primary)]"
                    : "text-[#475a78]"
                }`}
              >
                {word}
                {index < words.length - 2 && ", "}
              </span>
            ))}
            <span> and More</span>
          </h1>

          <div ref={searchBarRef}>
            <SearchBar
              searchQuery={homeSearchQuery}
              onSearchChange={setHomeSearchQuery}
              isInHeader={false}
              setActiveSearchQuery={setActiveSearchQuery}
              onClickMapOpen={handleClickMapOpen}
              userCity={userCity}
            />
          </div>

          <div className="py-[30px] w-[auto] md:w-[800px] lg:w-[900px] fade-in-delay-3">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-4 py-1 text-[#5D727D] text-[13px] border border-gray-300 rounded-full transition-all h-8 active:scale-95 hover:cursor-pointer ${
                  selectedCategory === null
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-blue-500 hover:text-white"
                }`}
              >
                All
              </button>
              {visibleSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(section.title)}
                  className={`px-4 py-1 text-[#5D727D] text-[13px] border border-gray-300 rounded-full transition-all h-8 active:scale-95 hover:cursor-pointer ${
                    selectedCategory === section.title
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              ))}
              {showAll ? (
                <button
                  onClick={handleShowLessClick}
                  onAnimationEnd={() => setPlayLessAnimation(false)}
                  className={`px-4 py-1 text-[#5D727D] text-[13px] border border-gray-300 rounded-full transition-all h-8 active:scale-95 hover:cursor-pointer bg-white hover:bg-blue-500 hover:text-white flex items-center justify-center gap-1 ${
                    playLessAnimation ? "bounce" : ""
                  }`}
                >
                  <RemoveRounded fontSize="small" />
                  Less
                </button>
              ) : (
                originalSections.length > initialButtonCount && (
                  <button
                    onClick={handleShowMoreClick}
                    onAnimationEnd={() => setPlayMoreAnimation(false)}
                    className={`px-4 py-1 text-[#5D727D] text-[13px] border border-gray-300 rounded-full transition-all h-8 active:scale-95 hover:cursor-pointer bg-white hover:bg-blue-500 hover:text-white flex items-center justify-center gap-1 ${
                      playMoreAnimation ? "bounce" : ""
                    }`}
                  >
                    <AddRounded fontSize="small" />
                    More
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-[16px] sections-wrapper fade-in-delay-3"
          style={{ minHeight: "300px" }}
        >
          {filteredSections.length > 0 ? (
            filteredSections.map((section, index) => (
              <Section key={index} title={section.title} items={section.items} />
            ))
          ) : (
            <div
              className="flex justify-center items-center py-4"
              style={{ minHeight: "250px" }}
            >
              <p className="text-[#475a78] font-semibold">
                {selectedCategory
                  ? `No results found for "${selectedCategory}"${
                      activeSearchQuery ? ` and "${activeSearchQuery}"` : ""
                    }`
                  : `No results found for "${activeSearchQuery}"`}
              </p>
            </div>
          )}
        </div>

        <Dialog
          fullScreen={fullScreen}
          open={mapOpen}
          onClose={handleMapClose}
          sx={{ "& .MuiDialog-paper": { width: "600px", maxWidth: "90%" } }}
        >
          <DialogTitle id="responsive-dialog-title">
            <div className="flex justify-between items-center">
              <h6 className="text-black">Choose Location</h6>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={handleMapClose}
              >
                <CloseRounded />
              </Button>
            </div>
          </DialogTitle>
          <DialogContent>
            <form className="w-[100%]">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <label className="text-sm text-[#5D727D] w-[100%] mb-2">
                    Search by City or Zip Code
                  </label>
                  <TextField
                    required
                    id="outlined-required"
                    size="small"
                    variant="outlined"
                    className="w-[100%] text-input"
                    defaultValue={userCity || ""}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <label className="text-sm text-[#5D727D] w-[100%] mb-2">
                    Location{" "}
                    <span className="text-[var(--primary)]">[{radius} Miles]</span>
                  </label>
                  <Slider
                    value={radiusIndex}
                    onChange={handleRadiusChange}
                    min={0}
                    max={radiusOptions.length - 1}
                    step={null}
                    marks={marks}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => `${radiusOptions[value]} Miles`}
                    sx={{
                      color: "#2067FA",
                      "& .MuiSlider-track": {
                        backgroundColor: "#2067FA",
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "#D8D8FF",
                      },
                      "& .MuiSlider-mark": {
                        backgroundColor: "#2067FA",
                        height: 8,
                        width: 2,
                      },
                      "& .MuiSlider-markLabel": {
                        fontSize: "12px",
                        color: "#5D727D",
                      },
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#2067FA",
                        "&:hover, &.Mui-focusVisible": {
                          boxShadow: "0px 0px 0px 8px rgba(32, 103, 250, 0.16)",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <label className="text-sm text-[#5D727D] w-[100%] mb-2">
                    (Or) Drag the Pointer here
                  </label>
                  <div className="card h-[300px]">
                    <GoogleMapComponent />
                  </div>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleMapClose}
              autoFocus
              className="bg-[var(--primary)] text-white"
            >
              Apply
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default HomePage;
