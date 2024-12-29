import "./App.css";
import { AboutMe } from "./components/About";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="main-body bg-dark-primary p-0 m-0 overflow-x-hidden">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
