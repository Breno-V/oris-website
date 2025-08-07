import Link from "next/link"
import "@/components/NavBar/NavBar.scss";

export default function NavBar() {
    return (
        <div className="navBar">
            <ul className="ul">
                <li className="li">
                    <Link href="/about" className="about">Sobre nós</Link>
                </li>
                <li className="li">
                    <Link href="/" className="home">Home</Link>
                </li>
            </ul>
        </div>
    )
}