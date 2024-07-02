import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
import ShortCircuitEva from './component/ShortCircuitEva'
import Basicform from './component/forms/basicform'
 
function App() {

 const [Name, setName] = useState("varsha gupta");

//  const changeName = ()=>{

//   (Name === "varsha gupta" )  ? setName("Varsha") : setName("varsha gupta");
//   if(Name==="varsha gupta"){
//     setName("Varsha")
//   }
//   else{
//     setName("varsha gupta")
//   }
//  }
  return (
    <div className="App">
     {/* <h1>{Name}</h1> */}
      {/* <button onClick={changeName}>Click Me</button>  */}
      <UseStateArray/>
     {/* < Basicform/> */}

    </div>
  );
}

export default App;
