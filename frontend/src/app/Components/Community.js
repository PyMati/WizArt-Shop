import React from "react";
import styles from "./community.module.css";

export default function Community() {
  return (
    <>
      <section className={styles.communitySec}>
        <div className="container h-100 d-flex flex-column align-content-center justify-content-center text-center">
          <h2 className={styles.headersStyling + " " + styles.h2Community}>
            <span className={styles.wizText }>WizArt</span> is a community of all magicians in the world.
          </h2>
          <p className={styles.headersStyling + " " + styles.pCommunity}>
            The purpose of our community is to provide all kinds of alchemical
            drinks, spell books and flying brooms to the market.
          </p>
        </div>
      </section>
    </>
  );
}
