import logo from "./logo.svg";
import "./App.css";

// // LIBRERIAS
// import "semantic-ui-css/semantic.min.css";

// Componentes
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        hello="Welcome to the Store"
        description="This site will have our catalog soon"
      />
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
