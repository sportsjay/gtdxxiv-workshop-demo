import React from "react";

// declare components must be capitalized
/**
 * 1st way to extract properties
 * const TodoHeader = (props) => {
 *  const title = props.title;
 *  const addition = props.additionFunc;
 * }
 */

// second method -> deconstruct object -> props object
const TodoHeader = ({ title, additionFunc }) => {
  return (
    <h1>
      {title}: {additionFunc(1, 2)}
    </h1>
  );
};

export default TodoHeader;
