import React from 'react'
import './Todo.css'

export default function Todo( {todo, index, deleteTodoID, toggledTodo}) {    
    function handleDelete(){        
        deleteTodoID(todo.id);
    }
    function handleToggle(todoCompleted){
        toggledTodo(todo);
    }
    return (
        <div>
            <React.Fragment>                
                <td style={{width: '10px'}}>
                    {index}
                </td>
                <td style={{width: '10px'}}>
                    <input type="checkbox" checked={todo.isComplete} onChange={() => {handleToggle()}}></input>
                </td>
                <td style={{width: '200px'}}>
                    {todo.title}
                </td>
                
                <td style={{width: '100px'}}>
                    <button style={{width: '90px'}}
                   
                    onClick={() => {handleDelete()}}
                    >Delete</button>
                </td>
            </React.Fragment>                      
        </div>
    )
}
