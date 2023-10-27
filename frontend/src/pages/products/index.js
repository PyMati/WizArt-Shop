import ProductCard from "./Components/ProductCard";

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
      <div className="container">
        <div className="row d-flex justify-content-center">
          {data.map((item, index) => {
            return (
              <ProductCard
                key={index}
                name={item.product_name}
                price={item.product_price}
                description={item.product_description}
                img_url={item.product_img_url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
