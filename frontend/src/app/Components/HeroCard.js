import styles from "./herocard.module.css";
import React from "react";
import Image from "next/image";

export default function HeroCard({ title, text, img, isLeft }) {
  return (
    <section className={styles.cardSec}>
      <div className="container h-100 d-flex flex-column align-content-center justify-content-center">
        {isLeft ? (
          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start">
              <h3 className={styles.wizText + " " + styles.h3Card}>{title}</h3>
              <p className={styles.pCard}>{text}</p>
            </div>
            <div className="col-12 col-md-6 text-center text-xs-center">
              <Image
                src={img}
                className={styles.cardImage}
                alt="ItemsExample"
                width={350}
              />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-6 order-sm-2 text-center order-last order-md-1">
              <Image
                src={img}
                alt="ItemsExample"
                className={styles.cardImage}
                width={350}
              />
            </div>
            <div className="col-12 col-md-6 text-center text-md-start order-first order-md-2">
              <h3 className={styles.wizText + " " + styles.h3Card}>{title}</h3>
              <p className={styles.pCard}>{text}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
