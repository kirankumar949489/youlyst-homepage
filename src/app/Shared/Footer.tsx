import { Fab, IconButton } from '@mui/material'
import React from 'react';
import Grid from '@mui/material/Grid2'
import { ArrowUpwardRounded, Facebook, Instagram, LinkedIn, Twitter, WhatsApp, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-white p-[10px] sm:px-[24px] lg:px-[40px] pt-[60px] pb-[20px] py-8">
     <div className='p-[0px] lg:px-[35px] xl:px-[50px]'>
      <Grid container spacing={4} justifyContent="space-between" className="mb-3">
        <Grid size={{xs:12,lg:2.4 }}className="text-center lg:text-start">
          <a className="text-[#1E1E1E] font-outfit text-4xl font-medium">
            You<span className="text-[#2067FA]">Lyst</span>
          </a>
        </Grid>
        <Grid size={{xs:12, sm:6,md:6,lg:2.4}} className="text-center sm:text-start">
          <h6 className="text-sm font-bold text-[#505F6A] mb-4">
            Quick Links
          </h6>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Home</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>About</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Privacy & Policies</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>FAQs</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Help & Support</a></li>
          </ul>
        </Grid>
        <Grid size={{xs:12, sm:6,md:6,lg:2.4}} className="text-center sm:text-start">
          <h6 className="text-sm font-bold text-[#505F6A] mb-4">
            List of Categories
          </h6>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Computers</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Bikes</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Jobs</a></li>
            <li className="mb-2"><a href="#" className='text-[14px] font-normal text-[#505F6A]'>Gadgets</a></li>
          </ul>
        </Grid>
        <Grid size={{xs:12, sm:6,md:6,lg:2.4}} className="text-center sm:text-start">
          <h6 className="text-sm font-bold text-[#505F6A] mb-4">
            Contact Us
          </h6>
          <div className="text-[14px] font-normal text-[#505F6A] mb-2">Phone: +91 00000 00000</div>
          <div className="text-[14px] font-normal text-[#505F6A]">Email: 123@gmail.com</div>
        </Grid>
        <Grid size={{xs:12, sm:6,md:6,lg:2.4}} className="text-center sm:text-start">
          <h6 className="text-sm font-bold text-[#505F6A] mb-4">
            Follow us
          </h6>
          <div className="flex space-x-4 text-gray-600 justify-center sm:justify-start">
            <IconButton href="#" className='text-[14px] font-normal text-[#505F6A]'><Facebook /></IconButton>
            <IconButton href="#" className='text-[14px] font-normal text-[#505F6A]'><Twitter /></IconButton>
            <IconButton href="#" className='text-[14px] font-normal text-[#505F6A]'><Instagram className="text-blue-600" /></IconButton>
            <IconButton href="#" className='text-[14px] font-normal text-[#505F6A]'><YouTube /></IconButton>
            <IconButton href="#" className='text-[14px] font-normal text-[#505F6A]'><LinkedIn /></IconButton>
            <IconButton href="#" className='text-[14px] font-normal text-[#505F6A]'><WhatsApp /></IconButton>
          </div>
        </Grid>
      </Grid>
      <div className="container mx-auto flex justify-between items-center text-[#505F6A] text-[13px]">
            <span>Non Copyrighted © 2025 Design and upload by YouLyst.com</span>
            <div className="flex space-x-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:underline">Terms & Condition</a>
            </div>
        </div>
        </div>
        <Fab 
        color="primary" 
        aria-label="up" 
        style={{ position: 'fixed', bottom: 16, right: 16 ,width:36,height:36}}
      >
        <ArrowUpwardRounded fontSize='small'/>
      </Fab>
  </footer>
  )
}

export default Footer