import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavigationBarre from "./Components/NavigationBarre/NavigationBarre";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import HomePage from "./Pages/HomePage/HomePage";
import GuessColor from "./Projects/GuessColor/GuessColor";
import ToDoListApp from "./Projects/ToDoListApp/ToDoListApp";
import WordsCounter from "./Projects/WordsCounter/WordsCounter";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" className="app-container">
        <NavigationBarre />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/projects/2" element={<ToDoListApp />} />
          <Route path="/projects/3" element={<GuessColor />} />
          <Route path="/projects/1" element={<WordsCounter />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
