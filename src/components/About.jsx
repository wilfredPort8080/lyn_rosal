import { useState } from "react";
import styles from "./About.module.css";

const content = [
  {
    summary: "Research Director Profile",
    details: "Empty 01",
  },
  {
    summary: "Academic Excellence",
    details: "Empty 02",
  },
  {
    summary: "Doctoral Achievements",
    details: "Empty 03",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.about}>
      <div className={styles.btnAbout}>
        {content.map((data, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`${activeTab === i ? styles.active : ""}`}
          >
            {data.summary}
          </button>
        ))}
      </div>

      <h3>{content[activeTab].summary}</h3>
      <p>{content[activeTab].details}</p>
    </section>
  );
};

export default About;
