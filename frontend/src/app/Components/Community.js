"use client";

import React from "react";
import styles from "./community.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView, useAnimationControls } from "framer-motion";

const variants = {
  hstart: { opacity: 0, y: -25 },
  hend: { opacity: 1, y: 0, transition: { duration: 1 } },
  pstart: { opacity: 0, y: 25 },
  pend: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Community() {
  const headingMount = useRef(null);
  const isHeadingInView = useInView(headingMount);
  const headerAnimController = useAnimationControls();

  const paragraphMount = useRef(null);
  const isParagraphInView = useInView(paragraphMount);
  const paragraphAnimController = useAnimationControls();

  useEffect(() => {
    if (isHeadingInView) {
      headerAnimController.start("hend");
    }
    if (isParagraphInView) {
      paragraphAnimController.start("pend");
    }
  }, [isHeadingInView, isParagraphInView]);

  return (
    <>
      <section className={styles.communitySec}>
        <div className="container h-100 d-flex flex-column align-content-center justify-content-center text-center">
          <motion.h2
            ref={headingMount}
            variants={variants}
            initial={"hstart"}
            animate={headerAnimController}
            className={styles.headersStyling + " " + styles.h2Community}
          >
            <span className={styles.wizText}>WizArt</span> is a community of all
            magicians in the world.
          </motion.h2>
          <motion.p
            ref={paragraphMount}
            variants={variants}
            initial={"pstart"}
            animate={paragraphAnimController}
            className={styles.headersStyling + " " + styles.pCommunity}
          >
            The purpose of our community is to provide all kinds of alchemical
            drinks, spell books and flying brooms to the market.
          </motion.p>
        </div>
      </section>
    </>
  );
}
