import logo from "./logo.svg";
import "./App.css";

// Componentes
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I don´t know what i´m doing!!</p>
        <a
          className="App-link"
          href="https://emergentex.000webhostapp.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Site
        </a>
      </div>
    </div>
  );
}

export default App;
