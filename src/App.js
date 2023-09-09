//import "./styles.css";
import React, { useState, useEffect } from 'react';
export default function App() {
  const [values, setValues] = useState({
    txtName: '',
    txtAge: '',
  });
  //let myDB = [];
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    setDisplay();
  }, []);
  const EnterName = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const EnterAge = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const saveData = (e) => {
    e.preventDefault();
    const allData = { ...values };
    let myDB = [];
    myDB.push(allData);
    setDisplay({ myDB });
    console.log(allData);
    console.log(myDB);
    setDisplay;
    const id = display.length + 1;
    setDisplay((prev) => [
      ...prev,
      {
        id: id,
        task: input,
      },
    ]);
    console.log(display);
  };
  return (
    <>
      <div className="App">
        <p>
          Name{' '}
          <input
            type="text"
            name="txtName"
            value={values.txtName}
            onChange={EnterName}
          />
        </p>
        <p>
          Age
          <input
            type="text"
            name="txtAge"
            value={values.txtAge}
            onChange={EnterAge}
          />
        </p>
        <p>
          <input type="submit" onClick={saveData} />
        </p>
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
