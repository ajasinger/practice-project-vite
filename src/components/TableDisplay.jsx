import { useState, useEffect, Fragment } from "react";
import styles from './TableComponent.module.css'

export default function TableDisplay() {
    //state
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [todoPage, setTodoPage] = useState([]);

    let totalPages = ''
    const rowsPerPg = 10;

    //function
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async() => {
        setLoading(true);
        try {

            const res = await fetch('https://jsonplaceholder.typicode.com/todos')

            if(!res.ok) {
                console.log('error fetching data')
                setError(true);
            } else {
                const resData = await res.json()
                setTodos(resData);
                const firstPage = resData.slice(0, rowsPerPg);
                setTodoPage(firstPage);
    
                totalPages = resData.length / rowsPerPg;

                //create array of pages 
                let pageCount = []
                for(let i = 1; i <= totalPages; i++) {
                    pageCount.push(i);
                }
                setPages(pageCount);
                console.log('pageCount', pageCount);
            }

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

    const handlePageClick = (e) => {
        setCurrentPage(e.target.value);
        const sliceStart = rowsPerPg * (e.target.value-1);
        const sliceEnd = sliceStart + rowsPerPg
        const slicedTodos = todos.slice(sliceStart, sliceEnd);
        setTodoPage(slicedTodos);
    }

    return(
        <div className={styles.tableContainer}>
        <h1>Todos</h1>
        <button type="button" onClick={handleSort}>SORT</button>
        {/* map todos */}
        <div className="tableContainerArea">
            {todoPage &&
                todoPage?.map(todo => (
                    <div className="todo-item" key={todo.id}>
                        {todo.title}
                        <button className="todo-button" type="button" onClick={e => handleDelete(todo.id)}>x</button>
                    </div>
                ))
            }
        </div>
        {/* pagination */}
        {pages && pages.map((page, i) => (
            <button value={page} key={i} onClick={handlePageClick} className="page-num">{page}</button>
        ))}
        {loading &&
            <p>loading..</p>
        }
        {error &&
            <p>There was an error loading todos.</p>
        }
        </div>
    )
}