import React, { useState } from 'react'

export default function TodoItem({item,deleteTodo,markComplete}) {
    const [itemText,setItemText] = useState(item.text)
    function onInputChange(e) {
        setItemText(e.target.value)
    }
  return (
    <div className={item.isDone ? "done" : "pending"}>
    <div className={item.isDone ? "second-main-complete" : "second-main"}>
        <input className='input-check' 
        checked={item.isDone}
        type="checkbox"
        onClick={() => markComplete(item.id, !item.isDone)}/>
        <label className='label-text'>{item.text}</label>
        <button className='delete-btn' onClick={() => deleteTodo(item.id)}>X</button>
    </div>
    </div>
  )
}
