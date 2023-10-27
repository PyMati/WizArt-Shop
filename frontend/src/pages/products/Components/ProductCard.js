import "bootstrap/dist/css/bootstrap.css";
import styles from "./productcard.module.css";

export default function ProductCard({ name, description, price, img_url }) {
  return (
    <>
      <div className={"col-12 col-sm-6 col-md-4 col-lg-3 text-center m-3 " + styles.productDiv}>
        <img className="card-img-top" src={img_url} alt={name} />
        <div className="card-body p-2">
          <h5 className="card-title p-2">{name}</h5>
          <h6 className="card-title p-2">{price}$</h6>
          <a href="#" class="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}
