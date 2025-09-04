import "@/components/NavBar/NavBar.scss";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logo">
                <Image src="/logo.png" alt="Logo" width={94} height={25.87} />
            </div>  
            <ul className="ul">
                <li className="li" id={'HowItWorks'}>
                    <a href="#">Como Funciona</a>
                </li>
                <li className="li" id={'Flow'}>
                    <a href="#">Flow</a>
                </li>
                <li className="li">
                    <a href="#" id={'Functions'}>Funcionalidades</a>
                </li>
                <li className="li" id={'Download'}>
                    <button className="Download">Baixe o app
                    
                    </button>
                </li>
            </ul>
        </div>
    )
}