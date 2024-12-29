import "./App.css";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="main-body bg-dark-primary p-0 m-0 overflow-hidden">
      <NavBar />
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
