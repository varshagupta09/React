// import logo from './logo.svg';
import './App.css';
import SignUp from "./components/signup";
import SignUpPractice from "./components/SignUpPractice"
import UseStateObject from "./components/UseStateObject";
import TodoList from "./components/TodoList"


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* <UseStateObject/> */}

     <TodoList/>
    </div>
  );
}

export default App;
