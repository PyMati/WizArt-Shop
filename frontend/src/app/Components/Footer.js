import styles from "./footer.module.css";
import React from "react";
import Image from "next/image";
import wizart from "../LogoWizArt.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export default function Footer() {
  return (
    <>
      <section className={styles.footerSec}>
        <div className="container d-flex flex-column h-100 justify-content-center text-center">
          <div className="row">
            <div className="col-lg-6 d-lg-block d-none">
              <Image src={wizart} width={250} className={styles.connectPhoto} />
            </div>
            <div className="col-12 col-lg-6">
              <h4 className={styles.h4Connect + " " + styles.headersStyling}>
                Creator: Mateusz Cieśliński
              </h4>
              <p className={styles.pConnect}>Social media</p>
              <a href="https://github.com/PyMati" className={styles.bgA}>
                <Image src={github} alt="Github" width={50} />
              </a>
              <a
                href="https://www.linkedin.com/in/mateusz-cie%C5%9Bli%C5%84ski-b92775213/"
                className={styles.bgA}
              >
                <Image src={linkedin} alt="Github" width={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
