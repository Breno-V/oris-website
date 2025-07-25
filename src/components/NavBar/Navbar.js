import Link from "next/link"

export default function NavBar() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/about">Sobre nós</Link>
                </li>
                <li>
                    <Link href="/">Home</Link>
                </li>
            </ul>
        </>
    )
}