import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home/Home";
import Archived from "./Pages/Archived/Archived";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<Archived />} />
      </Routes>
    </>
  );
}

export default App;
