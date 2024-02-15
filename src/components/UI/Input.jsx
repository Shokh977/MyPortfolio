import React from "react";

export const Input = ({ multiline, id, name, ...props }) => {
  return (
    <div className="contact__form-div">
      <input className="contact__form-input" id={id} name={name} {...props} />
    </div>
  );
};
