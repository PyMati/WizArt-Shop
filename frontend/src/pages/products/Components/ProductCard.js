import "bootstrap/dist/css/bootstrap.css";
import styles from "./productcard.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ProductCard({ product_data }) {
  const router = useRouter();
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "rgba(194, 136, 136, 0.35) 0px 5px 15px",
          transition: { duration: 0.3 },
        }}
        className={"col-6 col-sm-5 col-md-4 col-lg-3 m-3 " + styles.productDiv}
      >
        <div>
          <img
            className={"card-img-top " + styles.productImage}
            src={product_data.product_img_url}
            alt={product_data.product_name}
          />
          <div className={"card-body p-2 text-center" + " " + styles.cdText}>
            <h6 className="card-title p-2">{product_data.product_name}</h6>
            <p className="card-title p-2">{product_data.product_price}$</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className={styles.productButt}
              onClick={() => {
                router.push({
                  pathname: `/products/${product_data.id}`,
                  query: {
                    name: product_data.product_name,
                    category: product_data.product_category,
                    description: product_data.product_description,
                    price: product_data.product_price,
                    image: product_data.product_img_url,
                  },
                });
              }}
            >
              Read More
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
