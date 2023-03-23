import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
   const [inputValue, SetInputValue]=useState('');
   const handleInputChange=(event)=>{
    SetInputValue(event.target.value);
   };
  return (
    <div className="parent">
      <Child inputValue={inputValue} handleInputChange={handleInputChange} />
        {/* Do not remove the main div */}
    </div>
  );
};

const Child =(props)=>{
  return(
    <div className="child">
      <input type="text" value={props.inputValue}
      onChange={props.handleInputChange}
      />
    </div>
  )
}

export default App;
