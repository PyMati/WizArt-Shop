import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./addproduct.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: "",
    product_img_url: "",
  });

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();
  const priceInputRef = useRef();
  const imgUrlInputRef = useRef();

  const sendNewProduct = async () => {
    await axios.post("http://127.0.0.1:3005/api/v1/products/", formData);
    console.log("New product was sent");
    router.push("/products");
  };

  const handleInputChange = (e) => {
    setFormData({
      product_name: nameInputRef.current.value,
      product_description: descriptionInputRef.current.value,
      product_category: categoryInputRef.current.value,
      product_price: priceInputRef.current.value,
      product_img_url: imgUrlInputRef.current.value,
    });
    console.log(formData);
  };

  return (
    <div className={"container " + styles.addProd}>
      <div className="row">
        <div className="col-12">
          <div className="m-2">
            <label className="m-2">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              ref={nameInputRef}
            />
          </div>
          <div className="m-2">
            <label className="m-2">Description</label>
            <input
              type="text"
              name="description"
              onChange={handleInputChange}
              ref={descriptionInputRef}
            />
          </div>
          <div className="m-2">
            <label className="m-2">Category</label>
            <input
              type="text"
              name="category"
              onChange={handleInputChange}
              ref={categoryInputRef}
            />
          </div>
          <div className="m-2">
            <label className="m-2">Price</label>
            <input
              type="number"
              name="price"
              onChange={handleInputChange}
              ref={priceInputRef}
            />
          </div>
          <div className="m-2">
            <label className="m-2">Img url</label>
            <input
              type="text"
              name="imgUrl"
              onChange={handleInputChange}
              ref={imgUrlInputRef}
            />
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.productButt}
            onClick={sendNewProduct}
          >
            Submit
          </motion.a>
        </div>
      </div>
    </div>
  );
}
