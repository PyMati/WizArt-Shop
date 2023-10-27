import styles from "./footer.module.css";
import React from "react";
import Image from "next/image";
import wizart from "../LogoWizArt.png";

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
