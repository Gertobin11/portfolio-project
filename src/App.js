import "./App.css";
import MainNav from "./components/MainNav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <MainNav />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
