import { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShow(true);
  };

  const HideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={HideCartHandler} />}

      <Header onShowCart={ShowCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
