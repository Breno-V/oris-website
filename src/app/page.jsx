import "@/app/home.scss";
import NavBar from "../components/NavBar/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
