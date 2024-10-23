import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-context";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `${props.price.toFixed(2)} Birr`;

  const cartCtx = useContext(CartContext);

  const addOnCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>

      <div>
        <MealItemForm onAddToCart={addOnCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
