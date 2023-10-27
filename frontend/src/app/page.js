import styles from "./page.module.css";
import Image from "next/image";
import entrySeller from "./image.png";
import "bootstrap/dist/css/bootstrap.css";
import Community from "./Components/Community";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Community />
      <Footer />
    </>
  );
}
