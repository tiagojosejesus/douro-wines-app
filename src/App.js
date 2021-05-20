import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import MainMenu from "./components/MainMenu/MainMenu";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <MainMenu />
        <MainContainer />
      </Router>
    </div>
  );
}

export default App;
