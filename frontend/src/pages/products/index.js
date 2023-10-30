import ProductCard from "./Components/ProductCard";
import styles from "./products.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import WizAssisant from "@/GlogalComponents/WizAssistant";

export async function getServerSideProps() {
  const data = await fetch("http://127.0.0.1:3005/api/v1/products").then(
    (res) => {
      return res.json();
    }
  );

  return {
    props: data,
  };
}

export default function Products({ data }) {
  console.log(data);
  const router = useRouter();
  return (
    <>
      <section className={styles.secProducts}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className={"col-12 m-3 text-center p-2 " + styles.navProductBar}
            >
              <WizAssisant/>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={" " + styles.productButt}
                onClick={() => {
                  router.push("/");
                }}
              >
                Home Page
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.productButt}
              >
                Add Product
              </motion.a>
            </div>
            {data.map((item, index) => {
              return <ProductCard key={index} product_data={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
