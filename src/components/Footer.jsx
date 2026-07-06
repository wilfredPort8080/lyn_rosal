import vmuf from "../assets/vmuf.png";
import email from "../assets/email.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.card}>
        <div className={styles.connectL}>
          <h3>Let's Connect</h3>
          <p>Click the Link contact info.</p>
          <button>Scan QR Code</button>
          <div>
            <a href="#">https://rice-office.vercel.app</a>
          </div>
          <div className={styles.socials}>
            <a href="www.google.com" target="_blank">
              <img src={email} alt="email" />
            </a>
            <a href="https://facebook.com/lynrosal" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://linkedin.com/in/lynrosal" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="connect-right">
          <img src={vmuf} alt="vmuf logo" className={styles.vmuf} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
