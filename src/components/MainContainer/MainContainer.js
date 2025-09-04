import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

export default function MainContainer({ children }) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            {/* <Footer /> */}
        </>
    )
}