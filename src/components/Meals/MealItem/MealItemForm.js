import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [isInputValid, setValidation] = useState(true);
  const formRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let inputValue = +formRef.current.value.trim();
    console.log(inputValue);
    if (inputValue.length === 0 || inputValue > 5 || inputValue < 1) {
      setValidation(false);
    }
    setValidation(true);

    props.onAddToCart(inputValue);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={formRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isInputValid && <p>Please use values from 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
