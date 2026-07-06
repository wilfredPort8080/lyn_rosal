import { useEffect, useState } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <main className={darkMode ? "dark-moed" : ""}>
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌚 Dark Mode"}
      </button>
      <Main />
      <About />
      <Specialties />
      <Footer />
    </main>
  );
};

export default App;
