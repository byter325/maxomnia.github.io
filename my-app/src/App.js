import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Guides from "./components/guides";

const App = () => {
    return (
      <div style={{fontFamily: "sans-serif"}}>
        <Navbar />
        <Routes>
          <Route path="/guides" element={<Guides/>}></Route>
        </Routes>
      </div>
    );
}

export default App;