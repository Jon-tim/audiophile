import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Checkout from "./pages/Checkout";
import { Home } from "./pages/Home";
import Speakers from "./pages/Speakers";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/:productId" element={<SingleProduct />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
