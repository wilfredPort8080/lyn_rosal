import lyn from "./assets/lyn.png";
import vmuf from "./assets/vmuf.png";
import email from "./assets/email.svg";
import facebook from "./assets/facebook.svg";
import linkedin from "./assets/linkedin.svg";

const App = () => {
  return (
    <main className="portfolio">
      <section className="hero">
        <img src={lyn} alt="Lyn Rosal" className="profile-img" />

        <h1>Rosalyn G. Rosal</h1>
        <h2>Research Director</h2>
        <p>Research, Innovation & Community Extension Office</p>
      </section>

      <section className="about">
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem
          distinctio officiis, laboriosam optio id sequi perspiciatis dolor est?
          Odit cum hic voluptatem alias quae necessitatibus illo, eius numquam
          magnam.
        </p>
      </section>

      <section className="specialties">
        <h3>Specialties</h3>
        <div className="specialties-list">
          <span>🗣️ Sample</span>
          <span>💻 Sample </span>
          <span>🎥 Sample</span>
          <span>📝 Sample</span>
        </div>
      </section>

      <section className="connect">
        <div className="connect-card">
          <div className="connect-left">
            <h3>Let's Connect</h3>
            <p>Scan the QR code to access my resume & contact info.</p>
            <button className="scan-btn">Scan QR Code</button>
            <div className="socials">
              <a href="mailto:lyn@example.com" className="email">
                <img src={email} alt="email" />
              </a>
              <a href="https://facebook.com/lynrosal" className="facebook">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://linkedin.com/in/lynrosal" className="linkedin">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="connect-right">
            <img src={vmuf} alt="vmuf logo" className="qr" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
