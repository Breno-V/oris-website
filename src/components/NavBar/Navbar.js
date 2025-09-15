import "@/components/NavBar/NavBar.scss";
import Image from "next/image";
import ButtonDownload from "@/components/ButtonDownload/Download.js";
export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logo">
                <Image src="/logo.png" alt="Logo" width={94} height={25.87} />
            </div>  
            <ul className="ul">
                <li className="li">
                    <a href="#HowItWorks">Como Funciona</a>
                </li>
                <li className="li">
                    <a href="#Flow">Flow</a>
                </li>
                <li className="li">
                    <a href="#Functions">Funcionalidades</a>
                </li>
                <li className="li">
                    <ButtonDownload />
                </li>
            </ul>
        </div>
    )
}