import MealsItem from "../Meals/MealsItem";

import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.card}>
      <span>
        <h2>Sushi</h2>
      </span>
      <span>finest and veggeis</span>
      <br />
      <span>$22</span>
      <MealsItem />
    </div>
  );
};

export default Card;
