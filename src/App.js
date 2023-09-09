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
            onInput={(e) => setInputName(e.target.value)}
          />
        </p>
        <p>
          Age
          <input
            type="text"
            name="txtAge"
            value={inputAge}
            onInput={(e) => setInputAge(e.target.value)}
          />
        </p>
        <p>
          <button onClick={addTodoList}>Add Item</button>
        </p>
        {/* <p>{todoList}</p> */}
        {/* <p>
          {display.map((item) =>
           <span>{item.txtName}</span> <span>{item.txtAge}</span>
          )
          
          }
        </p> */}
      </div>
    </>
  );
}
