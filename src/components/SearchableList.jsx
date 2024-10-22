import styles from './SearchableList.module.css';
import { useState } from 'react'

// Problem: Create a React component that renders a list of user objects. 
// The users have the following properties: id, name, and role. 
// Implement a search input that filters the list by name as the user types. 
// Additionally, add a dropdown to sort the list by role in either ascending or descending order.
// Requirements:
// Ensure the list dynamically updates as the user types or changes.
// Ensure that the original data remains unmutated.

//STATE
//inputName
//users --> not sure if I need this 
//displayList

//FUNCTION
//handleInputChange --> filter by inputName displayList.filter(user => user.name.includes(inputName))
//onSubmit --> same as handleFilterChange??
//handleDropdownChange --> if(ascending) displayList.sort((ab) => a-b ) // if(descending) displayList.sort((ab) => b-a )

//UI
//form input for search
//dropdown
//display names

const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" },
    { id: 4, name: "David", role: "admin" },
  ];

export default function() {
    const [inputName, setInputName] = useState('');
    const [displayList, setDisplayList] = useState(users);
    //could have sortedList state that default to ascending and that's mapped

    const handleInputChange = e => {
        setInputName(e.target.value);
        const lowerCaseInput = e.target.value.toLowerCase();

        const filteredList = users.filter(user => {
            const lowerCaseName = user.name.toLowerCase();
            return lowerCaseName.startsWith(lowerCaseInput)
        })

        // const filteredList = users.filter(user => 
        //     user.name.toLowerCase().startsWith(lowerCaseInput)
        // );

        setDisplayList(filteredList);
    }

    const handleDropdownChange = (e) => {
        if(e.target.value === 'ascending') {
            const sortedList = [...displayList].sort((a, b) => a.role.localeCompare(b.role))
            setDisplayList(sortedList);
        }
        if(e.target.value === 'descending') {
            const sortedList = [...displayList].sort((a, b) => b.role.localeCompare(a.role))
            setDisplayList(sortedList);
        }

        // const sortedList = filteredList.sort((a, b) => 
            // sortOrder === 'ascending' 
            // ? a.role.localeCompare(b.role) 
            // : b.role.localeCompare(a.role)
        // );

        //setDisplayList(sortedList);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">Enter a name to search:</label>
                    <input type="text" onChange={handleInputChange} id="name" value={inputName}/>
                </div>
                <div className={styles.inputContainer}>
                    <label>Sort by role</label>
                    <select onChange={handleDropdownChange} id="orderSelect">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </form>
            <ul className={styles.listContainer}>
                {displayList.length > 0 ? (
                    displayList.map((user) => (
                    <li key={user.id} className={styles.listItem}>
                        <p>Name: {user.name}</p>
                        <p>Role: {user.role}</p>
                    </li>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </ul>
        </div>
    )
}