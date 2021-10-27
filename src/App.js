import TodoList from './TodoList';

function App() {
  
  return (
    <div>
      <table style={{margin:'5% 30% 5% 30%', display:'block', padding:'25px', border:'1px solid rgba(209, 213, 219)'}}>
        <h2 style={{textAlign:'center'}}>ToDo List</h2>
        <hr></hr>        
        <TodoList/>       
      </table>      
    </div>
  );
}

export default App;
