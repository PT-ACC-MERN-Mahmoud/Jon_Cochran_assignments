import React, {useState} from 'react'

const ToDo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        if(newTodo == ''){
            return;
        }
        e.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo("");

    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
        console.log(newTodo);
    }

    const handleTodoDelete = (delIdx) => {
        const filteredTodos = todos.filter((todo, i) => {
            return i !== delIdx 
        })
        setTodos(filteredTodos);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">To Do List</label>
            <input type="text" placeholder="To Do goes here" onChange={handleChange}/>
            <button>Add</button>
        </form>
        <div>
            {todos.map((item, i) => (
                <div key={i}>
                    <form>
                        <label htmlFor="">{item}</label>
                        <input type="checkbox" name="" id="" />
                        <button onClick={() => handleTodoDelete(i)}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ToDo