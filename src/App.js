import React from "react";
import "./App.css";
// Import components
import { TodoComponent } from "./component/TodoComponent";
import TodoHeader from "./component/TodoHeader";

var todoListContainerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: 10,
};

var formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "40%",
  padding: 10,
  borderRadius: 10,
  backgroundColor: "lightblue",
  margin: "auto",
};

function addition(a, b) {
  return a + b;
}

function App() {
  const [todoList, setTodoList] = React.useState([
    {
      title: "Todo title 1",
      description: "todo description 1",
    },
    {
      title: "Todo title 2",
      description: "todo description 2",
    },
    {
      title: "Todo title 3",
      description: "todo description 3",
    },
    {
      title: "Todo title 4",
      description: "todo description 4",
    },
  ]);
  // Form states
  // title state
  const [title, setTitle] = React.useState("");
  // description state
  const [description, setDescription] = React.useState("");

  function addNewTodo(title, description) {
    const newTodo = {
      title: title,
      description: description,
    };
    // todoList.push(newTodo);

    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className="App">
      <TodoHeader title="Todo List 1" additionFunc={addition} />

      {/* 
      Method 1: without destructuring
      {todoList.map((todo) => {
              return (
                <div>
                  {todo.title} {todo.description}
                </div>
              );
            })}

      */}

      {/* Method 2: with destructuring */}
      <div style={todoListContainerStyle}>
        {todoList.map(({ title, description }) => {
          return <TodoComponent title={title} description={description} />;
        })}
      </div>

      <form style={formStyle}>
        <h1>Todo Form</h1>
        <label>Todo Title - input title {title}</label>
        <input
          type="text"
          onChange={(e) => {
            // Listen to changes while user is typing
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label>Todo Description - input description {description}</label>
        <input
          type="text"
          onChange={(e) => {
            // Listen to changes while user is typing
            setDescription(e.target.value);
          }}
          value={description}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addNewTodo(title, description);
            setTitle("");
            setDescription("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
