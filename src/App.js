import "./App.css";
import MainNav from "./components/MainNav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <ToastContainer />
      <MainNav />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
