import React from "react";

/**
 * Styles
 */
var todoContainerStyle = {
  // key : value === python dictionary
  backgroundColor: "green",
  // padding 10px top&bottom 0px right&left
  padding: 10,
  boxSizing: "border-box",
  // font-color = white
  color: "white",
  margin: "10px 0px",
  borderRadius: 10,
  minWidth: 120,
};

/**
 *
 * @param {title: string} {title}
 * @param {description: string} {description}
 * @returns TodoComponent
 */

const TodoComponent = ({ title, description }) => {
  return (
    <div style={todoContainerStyle}>
      <header>
        <strong>{title}</strong>
      </header>
      <p>{description}</p>
    </div>
  );
};

export { TodoComponent, todoContainerStyle };
