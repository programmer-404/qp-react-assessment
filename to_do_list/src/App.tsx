import React, {useCallback, useState,useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
type Todo={
  status:"completed" | "todo",
  task:String,
  id: number
}
function App() {
  const [todoVal, settodoVal] = useState<String>("")
  const [todoList, settodoList] = useState<Array<Todo>>([{
    status:"todo",
    task:"The moonlight danced across the tranquil surface of the lake, casting ethereal shadows upon the whispering reeds. A gentle breeze stirred the air, carrying with it the scent of pine and earth. In the distance, an owl hooted softly, its call echoing through the night. It was a moment frozen in time, a snapshot of serenity amidst the chaos of the world",
    id:0
  },
  {
    status:"todo",
    task:"n the heart of the ancient forest, where the trees stood tall and proud, their branches reaching for the heavens, there existed a realm of unparalleled beauty. Sunlight filtered through the dense canopy, dappling the forest floor with patches of golden warmth. Birds of all colors flitted through the air, their melodic songs filling the tranquil silence of the woods",
    id:2
  },
  {
    status:"todo",
    task:"lo Amidst this natural symphony, a small stream wound its way through the underbrush, its crystal-clear waters babbling merrily as they meandered over smooth stones and fallen branches. The air was rich with the scent of wildflowers and damp earth, a heady perfume that enveloped all who ventured into the depths of the forest.Amidst this natural symphony, a small stream wound its way through the underbrush, its crystal-clear waters babbling merrily as they meandered over smooth stones and fallen branches. The air was rich with the scent of wildflowers and damp earth, a heady perfume that enveloped all who ventured into the depths of the forest.Amidst this natural symphony, a small stream wound its way through the underbrush, its crystal-clear waters babbling merrily as they meandered over smooth stones and fallen branches. The air was rich with the scent of wildflowers and damp earth, a heady perfume that enveloped all who ventured into the depths of the forest",
    id:3
  },
  {
    status:"todo",
    task:"Amidst this natural symphony, a small stream wound its way through the underbrush, its crystal-clear waters babbling merrily as they meandered over smooth stones and fallen branches. The air was rich with the scent of wildflowers and damp earth, a heady perfume that enveloped all who ventured into the depths of the forest",
    id:4
  },
  {
    status:"todo",
    task:"Amidst ",
    id:5
  }])
  
  const onClickCheckbox=useCallback((value:Boolean,id:number)=>{
    settodoList((prevData)=>{
      return prevData.map((item:Todo) => {
        if (item.id === id) {
          return { ...item, status: value==true ?"completed": "todo" }; // Ensure immutability
        }
        return item;
      });
    })
  },[])

  const onAddBtnClick=(todoValue:String)=>{
    console.log("called",todoValue)
    if(todoVal){
      let listCopy=[...todoList]
      listCopy.push({
      status:"todo",
      task:todoVal,
      id:todoList.length
      })
      settodoList(listCopy)
      settodoVal("")
    }
  }
  const memoizedChangeItem = useMemo(() => onClickCheckbox, [onClickCheckbox]);

  return (
    <div className="App">
      <div className={"input_container"} >
      <input className="input_text" placeholder='ADD TASK HERE...............' value={todoVal as string} type="text" onChange={(e)=>{settodoVal(e.target.value)}} />
      <button className="input_btn" onClick={()=>{onAddBtnClick(todoVal)}}>Add</button>
      </div>
      <TodoList onClickCheckbox={memoizedChangeItem} todoList={todoList}/>

    </div>
  );
}

export default React.memo(App);
