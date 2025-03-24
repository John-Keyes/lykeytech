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
                        <span className="fa-solid fa-envelope text-white text-hover-color1"/>
                    </Link>
                    <Link className="space-infront" href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noopener noreferrer">
                        <span className="fa-brands fa-linkedin text-white text-hover-color2"/>
                    </Link>
                    <Link className="space-infront" href="https://github.com/John-Keyes" target="_blank" rel="noopener noreferrer">
                        <span className="fa-brands fa-github text-white text-hover-color1"/>
                    </Link>
                    <span className="text-white space-infront">
                        &copy; 2025 LyKeyTech LLC
                    </span>
                </p>
            </div>
            <div id="bottom-nav-root-mobile">
                <ul id="mobile-footer" className="flex">
                    <li>
                        <Link href="#" className="flex flex-column flex-center text-hover-color1">
                            <span className="fa-regular fa-compass text-white"/>
                            <span className="text-white">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="flex flex-column flex-center text-hover-color2">
                            <span className="fa-solid fa-circle-info text-white"/>
                            <span className="text-white">Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="flex flex-column flex-center text-hover-color3">
                            <span className="fa-solid fa-address-book text-white"/>
                            <span className="text-white">Contact</span>
                        </Link>
                    </li>
                    <li>
                        <span onClick={() => setMenuOpen(!menuOpen)} className="flex flex-column flex-center a text-hover-color1" id="footer-menu-button">
                            <span className="fa-solid fa-bars text-white"/>
                            <span className="text-white">Menu</span>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Footer;