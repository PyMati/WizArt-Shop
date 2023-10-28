import styles from "./hero.module.css";
import Image from "next/image";
import entryseller from "../image.png";
import logo from "../LogoWizArt.png";

export default function Hero() {
  return (
    <>
      <section className={styles.heroSec}>
        <Image
          src={logo}
          alt="Logo"
          className={"position-absolute d-lg-block d-none " + styles.logo}
          width={150}
        />
        <div className="container h-100 d-flex flex-column align-content-center justify-content-center">
          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start">
              <div>
                <h1 className={styles.h1Hero}>Welcome To Magic Shop</h1>
                <h3 className={styles.h3Hero}>Are you ready for witchcraft?</h3>
              </div>
              <div className={styles.hMargin}>
                <div className={styles.heroBtn}>Products</div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <Image
                src={entryseller}
                alt="EntrySeller"
                className={styles.heroPhoto}
                width={350}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
