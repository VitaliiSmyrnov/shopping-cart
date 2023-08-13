import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Products } from "src/components/Products";
import { Cart } from "src/components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
