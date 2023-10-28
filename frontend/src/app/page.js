import styles from "./page.module.css";
import stuff1 from "./img/items1.png";
import stuff2 from "./img/items2.png";
import stuff3 from "./img/items3.png";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./Components/Hero";
import Community from "./Components/Community";
import Footer from "./Components/Footer";
import HeroCard from "./Components/HeroCard";

export default function Home() {
  return (
    <>
      <div className={styles.mnDiv}>
        <Hero />
        <Community />
        <HeroCard
          title={"Buy the best potions"}
          text={"Use WizArt to get the best potions available on the market"}
          isLeft={true}
          img={stuff1}
        />
        <HeroCard
          title={"Buy the best magic books"}
          text={
            "Use WizArt to buy the best magic books in the world and increase your knowledge"
          }
          isLeft={false}
          img={stuff3}
        />
        <HeroCard
          title={"Get the best magic items on the market"}
          text={
            "Use WizArt to purchase amazing artifacts that will impact your mage career"
          }
          isLeft={true}
          img={stuff2}
        />
        <Footer />
      </div>
    </>
  );
}
