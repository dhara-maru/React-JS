// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/todoitem1";
import Todoitem2 from "./components/todoitem2";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <center className="todocontainer">
        <AppName></AppName>

        <AddTodo></AddTodo>
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
        



          <div className="row">
            <div className="col-6">
              Finish Homework
            </div>
            <div className="col-4">
              13/06/2024
            </div>
            <div className="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>


      
      </center>
    </>
  );
}

export default App;
