import React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

export default function Product() {
  const router = useRouter();
  const { name, category, description, price, image } = router.query;
  return (
    <>
      <section className={styles.productFinSec}>
        <div className="container d-flex flex-column h-100 align-items-center justify-content-center">
          <div className="row">
            <div className={"col-12 col-md-6 " + styles.productDesc}>
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
