"use client"

import "@/components/NavBar/NavBar.scss";
import { useLenis } from "@/components/Scroll/useLenis";
import Image from "next/image";
import ButtonDownload from "@/components/ButtonDownload/Download.js";
export default function NavBar() {

    const lenis = useLenis();

    const handleClick = (e) => {
        const href = e.currentTarget.getAttribute("href");
        if (!href.startsWith("#") || !lenis) return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.scrollY;

        const navHeight = 104;
        lenis.scrollTo(targetPosition - navHeight, {
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        history.replaceState(null, "", href);
    };

    return (
        <div className="navBar">
            <div className="logo" onClick={() => lenis && lenis.scrollTo(0)} style={{ cursor: 'pointer' }}>
                <Image src="/logo.png"
                    alt="Logo"
                    width={94}
                    height={25.87}
                />
            </div>
            <ul className="ul">
                <li className="li">
                    <a href="#HowItWorks" className="HowItWorks" onClick={handleClick}>Como Funciona</a>
                </li>
                <li className="li">
                    <a href="#Flow" className="Flow" onClick={handleClick}>Flow</a>
                </li>
                <li className="li">
                    <a href="#Functions" onClick={handleClick}>Funcionalidades</a>
                </li>
                <li className="li">
                    <ButtonDownload />
                </li>
            </ul>
        </div>
    )
}