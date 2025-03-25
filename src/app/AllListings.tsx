"use client";
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

const AllListings: React.FC = () => {
    const [showSecondScreen, setShowSecondScreen] = useState(false);
    const [selectedHeading, setSelectedHeading] = useState<string | null>(null);

    const headingStyle = {
        base: "font-bold text-sm text-[#2067FA] mb-1 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#475A78] hover:underline bg-gray-100 px-2 py-1 rounded-md shadow-sm",
        selected: "text-[#475A78] bg-gray-200" // Highlight selected heading
    };

    const handleHeadingClick = (heading: string) => {
        setSelectedHeading(heading === selectedHeading ? null : heading);
    };

    return (
        <div className="card p-3 rounded-sm overflow-hidden">
            <div className="relative w-full h-full">
                <div 
                    className={`w-[200%] flex transition-all duration-500 ease-in-out transform ${
                        showSecondScreen ? '-translate-x-1/2' : 'translate-x-0'
                    }`}
                >
                    {/* First Screen */}
                    <div className="w-1/2 flex items-center gap-1">
                        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                            <div>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Vehicles' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Vehicles')}
                                >
                                    Vehicles
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Cars & Trucks</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Boats</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">RVs & Campers</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Motor Cycles</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Bikes / Bicycles</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Trailers</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Buses & Vans</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Furniture' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Furniture')}
                                >
                                    Furniture
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Living Room Furniture</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Bedroom Furniture</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Kids Furniture</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Dining Room Furniture</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Storage & Organization Furniture</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Office Furniture</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Kids Books, Games & Toys' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Kids Books, Games & Toys')}
                                >
                                    Kids Books, Games & Toys
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Books</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Games</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Toys</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Real Estate' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Real Estate')}
                                >
                                    Real Estate
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">For Rent</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">For Sale</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Sublets</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Roommates</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Short-Term Rentals</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Appliances' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Appliances')}
                                >
                                    Appliances
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Kitchen</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Laundry</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Climate Control</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Small Household</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Home Entertainment</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Personal Care</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Specialty</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Miscellaneous</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Clothing & Apparel' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Clothing & Apparel')}
                                >
                                    Clothing & Apparel
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Men Clothing Apparel</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Women Clothing Apparel</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Kid-Boy Clothing & Apparel</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Kid-Girl Clothing & Apparel</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Baby-Boy Clothing & Apparel</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Baby-Girl Clothing & Apparel</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Jobs' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Jobs')}
                                >
                                    Jobs
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Accounting & Finance</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Administrative & Office</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Child Care & Baby Sitting</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Construction & Engineering</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Creative & Design</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Customer Service</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Education & Training</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Entertainment</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Food & Hospitality</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">General Labor</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Healthcare</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">IT & Technology</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Legal & Paralegal</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Manufacturing & Production</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Operations</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Other Jobs</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Part-Time Jobs</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Pet Care</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Retail & Warehouse</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Sales & Marketing</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Scientific & Research</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Stock Market & Trading</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Tax & Auditing</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Transportation & Logistics</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Electronics' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Electronics')}
                                >
                                    Electronics
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Phones & Accessories</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Computers, Laptops & Tablets</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Computer Accessories</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Smart Watches & Accessories</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">TV & Home Electronics</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Cameras & Accessories</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Printers & Scanners</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Car Electronics</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Video Gaming & Consoles</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Batteries & Power Banks</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Home Security & Security Systems</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Health & Personal Care</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Other Electronics</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Wanted' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Wanted')}
                                >
                                    Wanted
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Team Sports</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Water Sports</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Outdoor Recreation</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Fitness Equipment</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <IconButton
                                color="primary"
                                className="list-arrow-btn hover:scale-110 transition-transform duration-200"
                                onClick={() => setShowSecondScreen(true)}
                            >
                                <ChevronRightRounded fontSize="small" />
                            </IconButton>
                        </div>
                    </div>

                    {/* Second Screen */}
                    <div className="w-1/2 flex items-center gap-2">
                        <div className="flex items-center justify-center">
                            <IconButton
                                color="primary"
                                className="list-arrow-btn hover:scale-110 transition-transform duration-200"
                                onClick={() => setShowSecondScreen(false)}
                            >
                                <ChevronLeftRounded fontSize="small" />
                            </IconButton>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full">
                            <div>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Services' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Services')}
                                >
                                    Services
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Accounting & Tax</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Additional & Installations</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Automotive & Vehicles</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Beauty & Personal Care</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Business & Office</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Childcare</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Cleaning</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Creative & Architect</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Customer Service</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Education & Training</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Emergency</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Entertainment</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Family & Elder Care</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Fitness & Coaching</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Financial</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">General Labor</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Handyman</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Health & Wellness</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Home Services</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Insurances</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">IT & Technology</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Legal</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Maintenance & Repair</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Moving & Storage</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Pet Care</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Photography & Videography</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Real Estate</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Renovations & Construction</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Rental</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Sales & Marketing</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Technology & IT</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Transportation & Logistics</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Entertainments' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Entertainments')}
                                >
                                    Entertainments
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Events & Experiences</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Movies & TV</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Music & Audio</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Books & Magazines</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Art & Crafts</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Games & Puzzles</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Ticket & Passes</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Travel & Leisure</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Other Entertainments</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Items for Sale' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Items for Sale')}
                                >
                                    Items for Sale
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Antiques & Collectibles</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Art & Craft Supplies</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Auto Part & Accessories</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Free Produce</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Fresh Produce</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Garage Sale</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Gourmet & Speciality</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Home & Garden</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Household Items</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Jewelry & Accessories</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Office Supplies</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Beverages</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Books & Hardware</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Vehicles & Gadgets</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Wheels, Tires & Rims</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Home Improvements' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Home Improvements')}
                                >
                                    Home Improvements
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Interior Home Improvements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Exterior Home Improvements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Energy Efficiency Improvements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Structural Improvements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Outdoor Living Improvements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Safety & Security Improvements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Accessibility Improvements</a></li>
                                </ul>
                                <h2 
                                    className={`${headingStyle.base} ${selectedHeading === 'Community' ? headingStyle.selected : ''}`}
                                    onClick={() => handleHeadingClick('Community')}
                                >
                                    Community
                                </h2>
                                <ul className="mb-2">
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Activities</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Announcements</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Carpool</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Classes</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Events</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">General</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Groups</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Local News</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Lost & Found</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Musicians & Bands</a></li>
                                    <li><a href="#" className="text-[13px] text-[#475A78] hover:underline">Volunteering</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllListings;