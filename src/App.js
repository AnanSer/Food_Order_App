import { Fragment } from "react";

import Header from "./Components/Layout/Header";

import MealsSummary from "./Components/Meals/MealsSummary";

function App() {
  return (
    <Fragment>
      <Header />

      <MealsSummary />
    </Fragment>
  );
}

export default App;
