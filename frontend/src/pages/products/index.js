import ProductCard from "./Components/ProductCard";
import styles from "./products.module.css";

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
  return (
    <>
      <section className={styles.secProducts}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {data.map((item, index) => {
              return <ProductCard key={index} product_data={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
