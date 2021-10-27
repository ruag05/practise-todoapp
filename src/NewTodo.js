import React from 'react'
import {useState, useRef} from 'react';

export default function NewTodo({newTodoDescp})     
{ 
  const [text, setText] = useState('');
  const todoDescrp = useRef();

  function handleTextChange(){    
    const refTodoDescrp = todoDescrp.current.value;  
    setText(refTodoDescrp);
  }

  function handleAddTodo(){
    newTodoDescp(text);
    setText("");
    todoDescrp.current.value = "";
  }

    return (
        <div>
            <input ref={todoDescrp} type="text" style={{width:"235px", height:"30px"}}
            onChange={handleTextChange}></input>           
            <button style={{width: '90px', height:"35px"}}
            onClick={() =>
            {
              handleAddTodo()
            }}
            >Add ToDo</button>             
        </div>
    )
}
