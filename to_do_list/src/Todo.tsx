import React from 'react'
type Todo = {
    status: "completed" | "todo",
    task: String,
    id:number
}
type CallbackFunction = (value:Boolean,id:number) => void;
type TodoProp = {
    todo: Todo,
    id: number,
    onClickCheckbox: CallbackFunction

}
function Todo(props: TodoProp) {
    console.log("rerendered")
    const { todo, onClickCheckbox, id } = props
    return (
        <div className={`todo_item ${todo.status=="completed" ? 'todo_item_complete': 'todo_item_incomplete'}`}>
            <input className='todo_checkbox' type="checkbox" onChange={(e) => { onClickCheckbox(e.target.checked, id) }} value={todo.status} checked={todo.status == "completed" || false} />
            <span className='todo_task'>{todo.task}</span>
        </div>)
}

export default React.memo(Todo)