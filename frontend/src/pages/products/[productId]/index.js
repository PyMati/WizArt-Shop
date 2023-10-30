import React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function Product() {
  const router = useRouter();
  const { name, category, description, price, image } = router.query;
  return (
    <>
      <section className={styles.productFinSec}>
        <div className="container d-flex flex-column h-100 align-items-center justify-content-center position-relative">
          <div className="row h-100 align-items-center">
            <div
              className={"col-12 col-md-6 text-center " + styles.productDesc}
            >
              <motion.a
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05, cursor: "pointer" }}
                className={styles.prodBtn + " " + styles.bckBtn}
                onClick={() => {
                  router.push("/products");
                }}
              >
                Go Back
              </motion.a>
              <h3>{name}</h3>
              <h4>{category}</h4>
              <h5>{price}$</h5>
              <p>{description}</p>
            </div>
            <div className="col-12 col-md-6">
              <img
                className={"img-fluid " + styles.prodFinImg}
                src={image}
                alt={name}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
