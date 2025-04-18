import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FaAngleDown } from 'react-icons/fa6';
import { HiBars2 } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

import Logo from "@/assets/images/logo.webp";
import LogoFab from "@/assets/images/logo-fav.webp";

const linksList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Our Approach",
    link: "/our-approach",
  },
  {
    name: "Services",
    link: "/services",
    childs: [
      { name: 'Web Development', link: '/web-dev' },
      { name: 'E-Commerce Development', link: '/e-comerce' },
      { name: 'Shopify Development', link: '/shophify' },
      { name: 'Mobile App Development', link: '/app-dev' },
      { name: 'Website Maintenance', link: '#' },
      { name: 'SEO Services', link: '/seo' },
      { name: 'Google Ads Management', link: '/google-ads' },
      { name: 'Social Media Management', link: '/social-media' },
      { name: 'Email Marketing', link: '/email-marketing' },
      { name: 'Newsletters', link: '/newsletters' },
      { name: 'Branding Services', link: '/branding' },
    ]
  },
  {
    name: "Portfolio",
    link: "#",
    childs: [
      { name: 'Website Gallery', link: '/portfolios' },
      { name: 'Apps Gallery', link: '/portfolios' },
    ]
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "FAQs",
    link: "/faq",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },


]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const [openSection, setOpenSection] = useState(null); // State to track open sections

  const handleMenuClick = (index) => {
    setOpenSection(null);
    setDrawerOpen(false);
  };

  const router = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 start-0 w-full py-6 z-40 transition-all duration-300 ${isScrolled ? "bg-primary_dark shadow-md" : "bg-transparent"} ${router.pathname == '/blog-detail' ? '!bg-primary_dark' : ''}`}>
        <div className="container flex flex-row items-center justify-between">
          {/* Logo */}
          <Link to={"/"} className='inline-block'>
            <img
              src={Logo}
              alt="Logo" width={155} height={38}
              className='w-auto h-8 md:h-9'
            />
          </Link>

          <button
            onClick={() => setDrawerOpen(true)} // Open drawer when clicked
            className="btn border border-primary md:w-12 w-10 md:h-12 h-10 flex items-center justify-center rounded-full md:text-4xl text-3xl text-primary"
          >
            <HiBars2 />
          </button>
        </div>
      </header>

      <aside className={`fixed top-0 right-0 bg-primary-forground w-full h-full min-h-screen bg-dark/50 z-50 transition-all duration-500 ${drawerOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <div className="w-full h-1.5 bg-primary-foreground absolute top-0 left-0"></div>
        <div className="w-full sm:max-w-[400px] max-w-[80%] min-h-screen bg-primary-foreground ml-auto px-5 lg:pt-10 pt-6 relative">
          <button className="absolute text-4xl w-12 h-12 -left-12 text-white z-40"
            htmltype="button" onClick={() => setDrawerOpen(false)}
          >
            <IoClose />
          </button>
          <img src={LogoFab} alt="logo" className='w-20 lg:w-24 h-auto mb-5' />
          <div className="space-y-4 p-4 lg:h-[calc(100vh-160px)] h-[calc(100vh-110px)] overflow-auto text-left">
            {linksList.map((item, index) => (
              <div key={index}>
                {item.childs ? (
                  <div>
                    {/* Accordion Trigger */}
                    <p
                      className="text-lg font-normal cursor-pointer hover:text-primary flex items-center justify-between gap-1 relative before:w-1.5 before:h-1.5 before:bg-dark before:absolute before:-left-3.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
                    >
                      {
                        item.link != "#" ? (
                          <>
                            <Link to={item.link} className={`text-lg lg:text-xl font-normal  hover:text-primary ${router.pathname === item.link ? "text-primary" : "text-dark"}`}
                              onClick={handleMenuClick}
                            >
                              {item.name}
                            </Link>
                            <span onClick={() => setOpenSection(openSection === index ? null : index)}
                              className='w-8 h-8 flex items-center justify-center cursor-pointer'
                            >
                              {
                                openSection === index ? <AiOutlineMinus className='text-xl' /> : <AiOutlinePlus className='text-xl' />
                              }
                            </span>
                          </>
                        ) : (
                          <span className={`text-lg lg:text-xl font-normal hover:text-primary w-full flex items-center gap-1 justify-between ${router.pathname === item.link ? "text-primary" : "text-dark"}`}
                            onClick={() => setOpenSection(openSection === index ? null : index)}
                          >
                            {item.name}
                            <span className='w-8 h-8 flex items-center justify-center cursor-pointer'>
                            {
                              openSection === index ? <AiOutlineMinus className='text-xl' /> : <AiOutlinePlus className='text-xl' />
                            } 
                            </span>
                          </span> 
                        )
                      }

                      {/* <AiOutlinePlus
                        className={`transition-transform duration-300 ${openSection === index ? "rotate-180 text-primary" : "rotate-0 text-dark"}`}
                      /> */}
                      {/* AiOutlineMinus */}
                    </p>
                    {/* Accordion Content */}
                    {openSection === index && (
                      <ul className="space-y-2 mt-3 pl-1">
                        {item.childs.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link to={child.link} className="block text-gray-700 hover:text-primary"
                              onClick={handleMenuClick}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link to={item.link} className={`block text-lg lg:text-xl font-normal cursor-pointer hover:text-primary relative before:w-1.5 before:h-1.5 before:bg-current before:absolute before:-left-3.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full ${router.pathname === item.link ? "text-primary" : "text-dark"}`}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
