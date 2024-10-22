import styles from './PaginatedData.module.css';
import {useState, useEffect} from 'react'

// Problem: Create a React component that fetches data from an API (mock the data as a 
//static array if needed) and implements pagination, with the ability to search for 
//specific items in the data. Additionally, allow the user to remove items from the current 
//page without affecting the original data source or pagination structure.
// Requirements:
// Implement item removal while keeping pagination intact.
//search is also dropdown with options that filters 
//Build a React component that renders two dropdowns. The second dropdown’s options should 
//depend on the selection made in the first dropdown. When the form is submitted, 
//log the selected values to the console.

export default function PaginatedData() {
    const [data, setData] = useState(null);
    const [displayData, setDisplayData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchName, setSearchName] = useState('');

    const itemsPerPage = 3

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async(e) => {
        const res = await fetch('https://swapi.dev/api/people')
        const resData = await res.json();
        console.log(resData);
        setData(resData.results);

        //set display data to first page 
        const slicedData = resData.results.slice(0,itemsPerPage)
        setDisplayData(slicedData);
    }

    const handleDelete = id => {
        const updatedData = displayData.filter(person => person.id !== id);
        setDisplayData(updatedData);
    }

    const handlePrevious = () => {
        if(currentPage > 1) setCurrentPage(prevData => prevData -1)
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = data.slice(startIndex, endIndex);
        setDisplayData(slicedData);
    }

    const handleNext = () => {
        const totalPages = Math.ceil(data.length / itemsPerPage)
        if(currentPage < totalPages) setCurrentPage(prevData => prevData +1)
        const startIndex = currentPage + itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = data.slice(startIndex, endIndex);
        setDisplayData(slicedData);
    }

    return(
        <div className={styles.dataContainer}>
            {/* search input with dropdown*/}
            {/* second dropdown based on first */}
            <ul>
                {displayData.length > 0 && displayData.map(person => (
                    <li key={person.name}>
                        <p>{person.name}</p>
                        <button onClick={() => handleDelete(person.name)}>X</button>
                    </li>
                ))}
            </ul>
            {/* page numbers */}
            <div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
