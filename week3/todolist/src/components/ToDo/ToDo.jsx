import React, {useState} from 'react'

const ToDo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo == ''){
            return;
        };

        const todoItem = {
            text: newTodo,
            status: false,
        };

        setTodos([...todos, todoItem]);
        setNewTodo("");

    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
        console.log(newTodo);
    }

    const handleTodoDelete = (delIdx) => {
        const filteredTodos = todos.filter((item, i) => {
            return i !== delIdx 
        })
        setTodos(filteredTodos); 
        console.log(filteredTodos); 
    }

    const toggleCheckedItem = (idx) => {
        const updatedTodos = todos.map((item,i) => {
            if(idx == i){
                item.status = !item.status;
            }
            return item
        });
        setTodos(updatedTodos)
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
                        <input type="checkbox" checked={item.status} onChange={() => {
                            toggleCheckedItem(i);
                        }} />
                        <label htmlFor="text" className=''>{item.text}</label>
                        <button onClick={() => handleTodoDelete(i)}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ToDo