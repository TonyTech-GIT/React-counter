import Button from "./Button";
import { useState } from "react";

const Parent = () => {
  const [number, setNumber] = useState(0);

  const reset = () => {
    setNumber(0);
  };

  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setNumber(number - 1);
  };
  return (
    <div className="parent">
      <h1>Number Counter</h1>

      <div className="count-ops">
        <Button action={handleDecrement} sign="-" />
        <p>{number}</p>
        <Button action={handleIncrement} sign="+" />
      </div>
      <div className="reset-btn">
        <Button action={reset} sign="Reset" />
      </div>

      <footer className="footer">
        {" "}
        Created by <strong>Mr.T</strong> &copy; <strong>2023</strong>
      </footer>
    </div>
  );
};

export default Parent;
