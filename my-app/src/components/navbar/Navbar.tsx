"use client"

import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const sticky = navbar?.offsetTop;

        const handleScroll = () => {
            setIsSticky(window.pageYOffset >= (sticky ? sticky : 0));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav id="navbar" className={isSticky ? "sticky" : ""}>
            <ul className="ul-nav">
                <li>
                    <a>Sign Up</a>
                </li>
                <li>
                    <a>What We Do</a>
                </li>
                <li>
                    <a>About The Team</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}