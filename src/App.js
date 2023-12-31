import React, { useState, useEffect } from 'react';
export default function App() {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [todoList, AddTodoList] = useState([]);
  const addTodoList = (e) => {
    e.preventDefault();
    AddTodoList;
    const id = todoList.length + 1;
    AddTodoList((prev) => [
      ...prev,
      {
        id: id,
        Name: inputName,
        Age: inputAge,
      },
    ]);
    console.log(todoList);
  };
  return (
    <>
      <div className="App">
        <p>
          Name{' '}
          <input
            type="text"
            name="txtName"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </p>
        <p>
          Age
          <input
            type="text"
            name="txtAge"
            value={inputAge}
            onChange={(e) => setInputAge(e.target.value)}
          />
        </p>
        <p>
          <button onClick={addTodoList}>Add Item</button>
        </p>
        <p>
          <ul>
            {todoList.map((item) => (
              <li id={item.id}>
                {item.Name} and {item.Age}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </>
  );
}
