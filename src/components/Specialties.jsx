import styles from "./Specialties.module.css";

const Specialties = () => {
  return (
    <section className={styles.specialties}>
      <h3>Specialties</h3>
      <div>
        <span>🗣️ Sample</span>
        <span>💻 Sample </span>
        <span>🎥 Sample</span>
        <span>📝 Sample</span>
      </div>
    </section>
  );
};

export default Specialties;
