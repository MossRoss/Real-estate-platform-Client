import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import Nav from "./components/Nav/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
