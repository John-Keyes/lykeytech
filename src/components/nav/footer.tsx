import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Footer = () => {
    const {pathname, replace} = useRouter();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    //const IsActiveRoute = (optionName: string) => pathname.includes(optionName) ? "bg-white text-darker-bg" : "";

    if(pathname == "/resume") {
        return <></>;
    }
    return (
        <>
            <div id="bottom-nav-root">
                <p className="p flex content-container">
                    Contact Me:  
                    <Link href="mailto:john.keyes@lykey.com">
                        <span className="fa-solid fa-envelope text-hover-color1"/>
                    </Link>
                    <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                        <span className="fa-brands fa-linkedin text-hover-color2"/>
                    </Link>
                    <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                        <span className="fa-brands fa-github text-hover-color3"/>
                    </Link>
                    <span className="space-infront">
                        &copy; 2025 LyKey Tech
                    </span>
                </p>
            </div>
            <div id="bottom-nav-root-mobile">
                <ul id="mobile-footer" className="flex">
                    <li>
                        <Link href="#" className="flex flex-column flex-center text-hover-color1">
                            <span className="fa-regular fa-compass"/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="flex flex-column flex-center text-hover-color2">
                            <span className="fa-solid fa-circle-info"/>
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex flex-column flex-center text-hover-color3">
                            <span className="fa-solid fa-address-book"/>
                            <span>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <span onClick={() => setMenuOpen(!menuOpen)} className="flex flex-column flex-center a text-hover-color1" id="footer-menu-button">
                            <span className="fa-solid fa-bars"/>
                            <span>Menu</span>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Footer;