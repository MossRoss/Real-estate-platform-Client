import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import Property from "./components/Property/Property";
import EditProperty from "./components/EditProperty/EditProperty";
import NewProperty from "./components/NewProperty/NewProperty";
import Footer from "./components/Footer/Footer";

import Nav from "./components/Nav/Nav";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Property />} />
          <Route path="/properties/:id/edit" element={<EditProperty />} />
          <Route path="/create-property" element={<NewProperty />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
