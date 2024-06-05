import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Card from './components/Card';

  
  

function App() {
  // const [color, setColor] = useState("blue")
  // const click = color => {
  //   setColor(color)
  // }
  // useEffect(() => {
  //   document.body.style.backgroundColor = color
  // }, [color])


  return (
<>
<div className='App'>
<h1 className="bg-green-400 text-black p-4 rounded-xl">
Tailwind Test    </h1>

<Card channel="reaxct"
imgsrc="https://images.pexels.com/photos/6869554/pexels-photo-6869554.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
<Card/>

<Card/>



</div>
</>
  );
}

export default App;
