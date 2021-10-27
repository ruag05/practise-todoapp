import React from 'react'
import './Todo.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Todo( {todo, index, deleteTodoID, toggledTodo}) {    
    function handleDelete(){        
        deleteTodoID(todo.id);
    }
    function handleToggle(todoCompleted){
        toggledTodo(todo);
    }

    function renderTitle(){
        if(todo.isComplete){
            return <s>{todo.title}</s>
        } else {
            return todo.title
        }
    }
    return (
        <div>
            <Table>               
                <tbody>
                    <tr style={{textAlign:"center"}}>
                        <td style={{width: '50px'}}>{index}</td>
                        <td style={{width: '50px'}}>
                            <input type="checkbox" checked={todo.isComplete}
                            onChange={() => {handleToggle()}}></input>
                        </td>
                        <td>{renderTitle()}</td>
                        <td style={{width: '100px'}}>
                            <Button variant="danger" style={{width: '90px'}} onClick={() => {handleDelete()}}
                            >Delete</Button></td>
                    </tr>                    
                </tbody>    
            </Table>
                                
        </div>
    )
}
