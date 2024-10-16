import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import MealsSummary from "../Meals/MealsSummary";

import classes from "./Header.module.css";

import mealsImage from "../Assets/meals.jpg";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="bunch of meals image" />
      </div>

      {/* <MealsSummary /> */}
    </Fragment>
  );
};

export default Header;
