import React from 'react'
import Todo from './Todo';

type Todo = {
    status: "completed" | "todo",
    task: String,
    id:number
}
type CallbackFunction = (value:Boolean,id:number) => void;
type TodoListProp = {
    todoList: Array<Todo>,
    onClickCheckbox: CallbackFunction

}
function TodoList(props:TodoListProp) {
    console.log("rerendered1")
    const { todoList, onClickCheckbox } = props

  return (
    <div className="list_container">
        {todoList.map((todo:Todo, id:number)=>{
            return ( 
              <div key={id} className=''>
              <Todo onClickCheckbox={onClickCheckbox} todo={todo} id={id}/>
              </div>
            )
          })
        }
      </div>
  )
}

export default React.memo(TodoList)