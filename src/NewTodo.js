import React from 'react'
import {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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
        <div >
           <InputGroup className="mb-3">
            <FormControl ref={todoDescrp} onChange={handleTextChange}
            style={{width:'240px'}}/>
            <Button variant="secondary" size="lg" onClick={() =>{handleAddTodo()}}>Add ToDo</Button>             
           </InputGroup>                   
            
        </div>
    )
}
