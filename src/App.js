import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
// import About from "./components/About/About";
// import Mission from "./components/Mission/Mission";
import Construction from "./components/Construction/Construction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Construction />} />
            <Route path="mission" element={<Construction />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
