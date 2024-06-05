import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';

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
     < UseStateObject/>
    </div>
  );
}

export default App;
