import { useState, useEffect, Fragment } from "react";

export default function TableDisplay() {
    //state
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //function
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async() => {
        setLoading(true);
        try {

            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resData = await res.json()

            console.log('resData', resData);
            setTodos(resData);

        } catch(error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = (id) => {
        const deleteTodo = todos.filter(todo => id !== todo.id);
        setTodos(deleteTodo);
    }

    const handleSort = () => {
        const sortTodos = [...todos].sort((a,b) => {
            if(a.title < b.title) {
                return -1
            } 
            if(a.title > b.title) {
                return 1
            }
            return 0;
        })
        setTodos(sortTodos);
    }

    return(
        <>
        <h1>Todos</h1>
        <button type="button" onClick={handleSort}>SORT</button>
        {/* map todos */}
        {todos &&
            todos?.map(todo => (
                <div key={todo.id}>
                    {todo.title}
                    <button type="button" onClick={e => handleDelete(todo.id)}>x</button>
                </div>
            ))
        }
        {loading &&
            <p>loading..</p>
        }
        {error &&
            <p>There was an error loading todos.</p>
        }
        </>
    )
}