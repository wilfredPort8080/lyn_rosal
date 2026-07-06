import { useState } from "react";
import styles from "./About.module.css";

const content = [
  {
    summary: "About Me",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "Profile",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "Degree",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
