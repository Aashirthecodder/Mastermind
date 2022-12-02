import "./App.css";
import Rules from "./Components/Rules.js";
import Game from "./Components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h2 style={{ color: "white" }}>
                <span style={{ backgroundColor: "#ffb400", padding: "4px" }}>
                  M
                </span>
                <span style={{ backgroundColor: "#ff5a5f", padding: "4px" }}>
                  A
                </span>
                <span style={{ backgroundColor: "#8ce071", padding: "4px" }}>
                  S
                </span>
                <span style={{ backgroundColor: "#00d1c1", padding: "4px" }}>
                  T
                </span>
                <span style={{ backgroundColor: "#007a87", padding: "4px" }}>
                  E
                </span>
                <span style={{ backgroundColor: "#7b0051", padding: "4px" }}>
                  R
                </span>
                <span style={{ color: "black" }}>M</span>
                <span style={{ color: "black" }}>I</span>
                <span style={{ color: "black" }}>N</span>
                <span style={{ color: "black" }}>D</span>
              </h2>
              <Rules />
              {/* <Game2 /> */}
              <Game />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
