import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todoList,deleteTodo,markComplete}) {
    return todoList.map((item) => (
        <TodoItem
            deleteTodo={deleteTodo}
            markComplete={markComplete}
            item={item}
        />
    ))
}
