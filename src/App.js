import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar/Navbar.js";
import Slider from "./Components/Slider.js";
import { CartProvider } from "./Components/CartContext.js";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <div className="md:flex md:justify-between md:m-24 md:mt-10 md:gap-x-16 md:mb-4">
          <Slider />
          <Main />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
