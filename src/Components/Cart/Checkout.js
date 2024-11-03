import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const isFiveCars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredpostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveCars(enteredpostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      City: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" useRef={nameInputRef} />
        {formInputsValidity.name && <p>please enter a valid name!</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" useRef={streetInputRef} />
        {formInputsValidity.street && <p>please enter a valid Street!</p>}
      </div>

      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" useRef={postalCodeInputRef} />
        {formInputsValidity.postalCode && (
          <p>please enter a valid Postal Code!</p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" useRef={cityInputRef} />
        {formInputsValidity.city && <p>please enter a valid City!</p>}
      </div>

      <div
        className={`${classes.submit} ${
          formInputsValidity.name ? "" : classes.invalid
        }`}
      >
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
