"use client"

import { act, useEffect, useState } from 'react';
import Image from 'next/image';
import menuIcon from '../../../public/assets/icons/menu.svg';
import crossIcon from '../../../public/assets/icons/cross.svg';
import './Navbar.css';

export default function Navbar() {
    // const [isSticky, setIsSticky] = useState(false);

    // useEffect(() => {
    //     const navbar = document.getElementById('navbar');
    //     const sticky = navbar?.offsetTop;

    //     const handleScroll = () => {
    //         setIsSticky(window.pageYOffset >= (sticky ? sticky : 0));
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);

   const [activeLink, setActiveLink] = useState('');
   const [toggleMenu, setToggleMenu] = useState(true);

   useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const currSection = section as HTMLElement;
        const sectionTop = currSection.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight * 0.25 && window.scrollY < sectionTop + sectionHeight - sectionHeight * 0.25) {
            setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }

  }, []);

  function handleMenuClick() {
    const navList = document.getElementsByClassName('ul-nav')[0]
    if (toggleMenu) {
        setToggleMenu(false);
        navList.classList.remove('hidden');
    } else {
        setToggleMenu(true);
        navList.classList.add('hidden');
    }
  }

    // const currentUrl = window.location.href;
    // const navLinks = document.querySelectorAll('.nav-link');

    // Array.from(navLinks).forEach(function(navLink) {
    //     if (navLink.getAttribute('href') === currentUrl) {
    //         navLink.classList.add('active');
    //     }
    // });

    return (
        // <nav id="navbar" className={isSticky ? "sticky" : ""}>
        <nav id="navbar">
            <h1><a href="#section-landing">trouvailler</a></h1>
            <Image
            src={toggleMenu ? menuIcon : crossIcon}
            alt="menu icon"
            className="menu-icon"
            onClick={handleMenuClick}
            />
            <ul className="ul-nav hidden">
                <li>
                    <a id="nav-signup" className={activeLink === 'section-landing' ? 'active' : ''} href="#section-landing">Get Started</a>
                </li>
                <li>
                    <a id="nav-whatwedo" className={activeLink === 'section-whatwedo' ? 'active' : ''} href="#section-whatwedo">What We Do</a>
                </li>
                <li>
                    <a id="nav-howitworks" className={activeLink === 'section-howitworks' ? 'active' : ''} href="#section-howitworks">How It Works</a>
                </li>
                <li>
                    <a id="nav-abouttheteam" className={activeLink === 'section-abouttheteam' ? 'active' : ''} href="#section-abouttheteam">Our Team</a>
                </li>
                <li>
                    <a id="nav-contactus" className={activeLink === 'section-contactus' ? 'active' : ''} href="#section-contactus">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}