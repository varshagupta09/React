import React, { useCallback, useState } from "react";

const TodoList = () => {
  const biodata = [
    {
      id: 0,
      name: "varsha",
      age: 28,
    },
    {
      id: 1,
      name: "shalini",
      age: 26,
    },
    {
      id: 2,
      name: "rohini",
      age: 22,
    },
  ];
  const [todo, setTodo] = useState(biodata);

  const remove = (id) => {
    const newTodo = todo.filter((curElem) => {
        return curElem.id !== id;
    })

    setTodo(newTodo);
  };
  return (
    <>
      <h1>Todo List</h1>
      <div>
        {todo.map((element) => {
          return (
              <h1>
                Name:{element.name} & Age: {element.age}
                <button className="btn" onClick={() => remove(element.id)}>
                Delete
              </button>
              </h1>
             
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
