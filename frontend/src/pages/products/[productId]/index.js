import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useRef, useState } from "react";

export async function getServerSideProps(context) {
  const data = axios.get("http://127.0.0.1:3005/api/v1/comments/", {
    params: { id: context.params.productId },
  });

  const comments = (await data).data;
  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}

export default function Product({ comments }) {
  const router = useRouter();
  const { name, category, description, price, image } = router.query;
  const [nick, setNick] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState();
  const nickRef = useRef(null);
  const commentRef = useRef(null);
  const ratingRef = useRef(null);

  const handleSubmit = async () => {
    let currentDate = new Date().toJSON().slice(0, 10);
    setNick(nickRef.current.value);
    setComment(commentRef.current.value);
    setRating(ratingRef.current.value);
    nickRef.current.value = "";
    commentRef.current.value = "";
    ratingRef.current.value = 1;
    console.log(
      nickRef.current.value,
      commentRef.current.value,
      ratingRef.current.value,
      currentDate
    );
  };

  useEffect(() => {
    if (nick !== "") {
      const res = axios.post("http://127.0.0.1:3005/api/v1/comments/", {
        product_id: router.query.id,
        author: nick,
        comment: comment,
        rating: rating,
        date: new Date().toJSON().slice(0, 10),
      });
    }
  }, [nick, comment, rating]);
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
            <div className={"col-12 " + styles.productDesc}>
              <div className="text-center text-md-start">
                <h6>Leave comment</h6>
                <form>
                  <label for="exampleInputEmail1">Nick</label>
                  <input
                    ref={nickRef}
                    type="text"
                    className="form-control w-50"
                    id="exampleInputEmail1"
                    placeholder="Enter your nick"
                  ></input>
                  <label for="exampleInputEmail1">Comment</label>
                  <input
                    ref={commentRef}
                    type="text"
                    className="form-control w-75"
                    id="exampleInputEmail1"
                    placeholder="Enter your comment"
                  ></input>
                  <label for="exampleFormControlSelect1">
                    Rate this product
                  </label>
                  <select
                    ref={ratingRef}
                    className={"form-control text-center w-25 mb-2"}
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05, cursor: "pointer" }}
                    className={styles.prodBtn}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Submit
                  </motion.a>
                </form>
              </div>
              <h5 className="text-center text-md-start">Comments</h5>
              <div className="row">
                {comments.data.map((item, index) => (
                  <div
                    className={
                      "col-6 col-sm-6 col-md-3 col-lg-2 text-center " +
                      styles.commentDiv
                    }
                  >
                    <p>{item.author}</p>
                    <p>{item.comment}</p>
                    <p>{item.rating}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
