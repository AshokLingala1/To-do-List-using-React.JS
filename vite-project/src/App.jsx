import React, { useState } from "react";
import InputContainer from "./components/InputContainer.jsx"
import ToDoContainer from "./components/ToDoContainer.jsx";


function App() {

  const[inputVal,setInputValue] = useState('')
  const[todos,setTodos] = useState([])

  function writeTodo(e){
    setInputValue(e.target.value)
  }

  function addTodo(){
    if(inputVal!=''){
      setTodos((prevTodos)=>[...prevTodos,inputVal])
      setInputValue('')
    }
  }
  setTodos(todos)

/*   const[inputVal,setInputValue] = useState(''); */


  return (
    <main>
      <h1>ToDoList</h1>

      {/* <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/> */}

     {/*  <ToDoContainer/> */}
    </main>
  );
}

export default App
