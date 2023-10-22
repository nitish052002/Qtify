import styles from "./hero.module.css";
import heroImage from "../../assets/hero.png";
// import
function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousands Songs, ad-free</h1>
        <h1>Over Thousands Post Cast Episodes</h1>
      </div>
      <img src={heroImage} alt="headhones" width={212} />
    </div>
  );
}

export default Hero;
