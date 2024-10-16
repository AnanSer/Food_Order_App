import { Fragment } from "react";

import classes from "./Header.module.css";

import mealsImage from "../Assets/meals.jpg";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button className="button">your Cart</button>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="bunch of meals image" />
      </div>
    </Fragment>
  );
};

export default Header;
