"use client";

import styles from "./herocard.module.css";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";

const variants = {
  hstart: { opacity: 0, x: 25 },
  hend: { opacity: 1, x: 0, transition: { duration: 1.25 } },
  pstart: { opacity: 0, x: -25 },
  pend: { opacity: 1, x: 0, transition: { duration: 1.25 } },
  istart: { opacity: 0, scale: 0.1 },
  iend: { opacity: 1, scale: 1, transition: { duration: 2 } },
};

export default function HeroCard({ title, text, img, isLeft }) {
  const cardMount = useRef(null);
  const cardInView = useInView(cardMount);
  const hController = useAnimationControls();
  const pController = useAnimationControls();
  const imgController = useAnimationControls();

  useEffect(() => {
    if (cardInView) {
      hController.start("hend");
      pController.start("pend");
      imgController.start("iend");
    }
  }, [cardInView]);

  return (
    <section className={styles.cardSec}>
      <div className="container h-100 d-flex flex-column align-content-center justify-content-center">
        {isLeft ? (
          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start">
              <motion.h3
                ref={cardMount}
                initial={"hstart"}
                variants={variants}
                animate={hController}
                className={styles.wizText + " " + styles.h3Card}
              >
                {title}
              </motion.h3>
              <motion.p
                initial={"pstart"}
                animate={pController}
                variants={variants}
                className={styles.pCard}
              >
                {text}
              </motion.p>
            </div>
            <div className="col-12 col-md-6 text-center text-xs-center">
              <motion.div
                initial={"istart"}
                animate={imgController}
                variants={variants}
              >
                <Image
                  src={img}
                  className={styles.cardImage}
                  alt="ItemsExample"
                  width={350}
                />
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-6 order-sm-2 text-center order-last order-md-1">
              <motion.div
                initial={"istart"}
                animate={imgController}
                variants={variants}
              >
                <Image
                  src={img}
                  alt="ItemsExample"
                  className={styles.cardImage}
                  width={350}
                />
              </motion.div>
            </div>
            <div className="col-12 col-md-6 text-center text-md-start order-first order-md-2">
              <motion.h3
                ref={cardMount}
                initial={"hstart"}
                animate={hController}
                variants={variants}
                className={styles.wizText + " " + styles.h3Card}
              >
                {title}
              </motion.h3>
              <motion.p
                initial={"pstart"}
                animate={pController}
                variants={variants}
                className={styles.pCard}
              >
                {text}
              </motion.p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
