import lyn from "../assets/lyn.png";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <section className={styles.portfolio}>
      <img src={lyn} alt="Lyn Rosal" className="profile-img" />
      <div className={styles.custom}>
        <h1>Rosalyn G. Rosal</h1>
        <h2>Research Director</h2>
        <p>Research, Innovation & Community Extension Office</p>
      </div>
    </section>
  );
};

export default Main;
