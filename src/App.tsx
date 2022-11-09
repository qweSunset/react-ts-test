import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navigation";
import DragDrop from "./pages/DragDrop";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/drag" element={<DragDrop />} />
      </Routes>
    </>
  )
}

export default App; 
