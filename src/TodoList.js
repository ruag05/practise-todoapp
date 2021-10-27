import {React, useState, useRef} from 'react';
import Todo from './Todo'
import NewTodo from './NewTodo';
import {v4 as uuid} from 'uuid';

export default function TodoList() {   

    const [todos, setTodos] = useState([
        {id : uuid(), title: "Wake up", isComplete: true}, 
        {id : uuid(), title: "Make healthy breakfast", isComplete: false }
      ]);  
    
    function handleAddTodo(newDescrp){
        console.log("handleAddTodo")
        if(newDescrp){
            const newTodos = [...todos];
            newTodos.push({
                id: uuid(),
                title: newDescrp,
                isComplete: false
            });
            setTodos(newTodos);
        } else{
            console.log("Please add some text");
        }
    }

    function handleDeleteTodo(deleteTodoID){
        console.log("handleDeleteTodo");
        const postDeleteTodos = todos.filter(todo => {
            return todo.id !== deleteTodoID
        })

        setTodos(postDeleteTodos);
    }

    function handleToggle(toDoToggled){
        const postToggleTodos = todos.map(todo => {
            if(todo.id === toDoToggled.id)
                todo.isComplete = !toDoToggled.isComplete;
                return todo;
        }) 
        
        setTodos(postToggleTodos);
    }
    return (
        <div>            
            {todos.map((todo,index) => (                                  
                    <div key={todo.id}>                                                               
                        <Todo index={index + 1} todo={todo} deleteTodoID={handleDeleteTodo} toggledTodo={handleToggle}/> 
                        <hr></hr>                                                            
                    </div>
                )
            )}
            <NewTodo newTodoDescp={handleAddTodo}/> 
        </div>
    )
}
