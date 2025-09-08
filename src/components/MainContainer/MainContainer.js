import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

export default function MainContainer({ children }) {
    return (
        <>
        <div className="MainContainer">
            <NavBar />
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
        </>
    )
}