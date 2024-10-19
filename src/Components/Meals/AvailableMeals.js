import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "beyaynet",
    description: "bunch of different wet",
    price: 90,
  },
  {
    id: "m2",
    name: "keywet",
    description: "meat wet with pepper",
    price: 150,
  },
  {
    id: "m3",
    name: "Shiro",
    description: "special food of Ethiopian",
    price: 70,
  },
  {
    id: "m4",
    name: "Pasta",
    description: "Healthy...",
    price: 70,
  },
];

const AvailableMeals = () => {
  const Meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{Meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
