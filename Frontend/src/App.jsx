import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import Update from "./components/Update";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Create />}></Route>
        <Route path="/posts" element={<Show />}></Route>
        <Route path="/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
