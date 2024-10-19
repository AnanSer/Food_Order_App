import { Fragment } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Card from "./Components/UI/Card";

function App() {
  return (
    <Fragment>
      <Header />

      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
