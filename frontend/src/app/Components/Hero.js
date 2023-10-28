"use client";

import styles from "./hero.module.css";
import Image from "next/image";
import entryseller from "../image.png";
import logo from "../LogoWizArt.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

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
                <motion.h1
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                  className={styles.h1Hero}
                >
                  Welcome To Magic Shop
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                  className={styles.h3Hero}
                >
                  Are you ready for witchcraft?
                </motion.h3>
              </div>
              <div className={styles.hMargin}>
                <motion.div
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                  whileHover={{ scale: 1.05, cursor: "pointer" }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.heroBtn}
                  onClick={() => {
                    router.push("/products");
                  }}
                >
                  Products
                </motion.div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <motion.div
                initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                animate={{
                  rotate: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 1 },
                }}
              >
                <Image
                  src={entryseller}
                  alt="EntrySeller"
                  className={styles.heroPhoto}
                  width={350}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
