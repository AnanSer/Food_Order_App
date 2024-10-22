import { Fragment, useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShow(true);
  };

  const HideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <Fragment>
      {cartIsShow && <Cart onClose={HideCartHandler} />}

      <Header onShowCart={ShowCartHandler} />

      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
