import React, {HtmlHTMLAttributes, useState} from 'react';
import logo from './logo.svg';
import './App.css';
type Todo={
  status:"completed" | "todo",
  task:String
}
function App() {
  const [todoVal, settodoVal] = useState<String>("")
  const [todoList, settodoList] = useState<Array<Todo>>([])
  
  const onClickCheckbox=(value:Boolean,id:number)=>{
    let listCopy=[...todoList]
    listCopy[id]["status"]= value==true ?"completed": "todo"
    settodoList(listCopy)
  }

  const onAddBtnClick=()=>{
    if(todoVal){
      let listCopy=[...todoList]
      listCopy.push({
      status:"todo",
      task:todoVal
      })
      settodoList(listCopy)
      settodoVal("")
    }
  }
  return (
    <div className="App">
      <div>
      <input value={todoVal as string} type="text" onChange={(e)=>{settodoVal(e.target.value)}} />
      <button onClick={onAddBtnClick}>Add</button>
      </div>
      <div>
        {todoList.map((todo, id)=>{
            return ( 
            <div>
              <input type="checkbox" onChange={(e)=>{onClickCheckbox(e.target.checked,id)}} value={todo.status} checked={todo.status=="completed" || false}/>
              <span>{todo.task}</span>
            </div>)
          })
        }
      </div>

    </div>
  );
}

export default App;
