"use client"

import { act, useEffect, useState } from 'react';
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

   useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
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
            <h1>trouvailler</h1>
            <ul className="ul-nav">
                <li>
                    <a id="nav-signup" className={activeLink === 'section-landing' ? 'active' : ''} href="#section-landing">Sign Up</a>
                </li>
                <li>
                    <a id="nav-whatwedo" className={activeLink === 'section-whatwedo' ? 'active' : ''} href="#section-whatwedo">What We Do</a>
                </li>
                <li>
                    <a id="nav-abouttheteam" className={activeLink === 'section-abouttheteam' ? 'active' : ''} href="#section-abouttheteam">About The Team</a>
                </li>
                <li>
                    <a id="nav-contactus" className={activeLink === 'section-contactus' ? 'active' : ''} href="#section-contactus">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}