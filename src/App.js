//import "./styles.css";
import React, { useState } from 'react';

export default function App() {
  const [values, setValues] = useState({
    txtName: '',
    txtAge: '',
  });
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
    console.log(allData);
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
      </div>
    </>
  );
}
