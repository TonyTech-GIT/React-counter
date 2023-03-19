import React from "react";

const Button = (props) => {
  let { sign, action } = props;
  return (
    <div className="button">
      <button onClick={action}> {sign} </button>
    </div>
  );
};

export default Button;
