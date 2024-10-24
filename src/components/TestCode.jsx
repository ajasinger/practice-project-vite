import { useState, useEffect } from "react"

export default function TestCode() {
        const [formData, setFormData] = useState([]);
        const [todos, setTodos] = useState([])

    const handleClick = () => {
        const testArray = [1, 5, 3, 2]
        const testString = "a,b,c,d"
        const stringArray = ["apple", "pear", "banana", "grapes"]
        const boolArray = [true, false, false, true]
        const testObj = [{id: 1, title: "one"}, {id: 2, title: "two"}, {id: 3, title: "three"},]

        //reduce
        const reduce = testArray.reduce((acc, curr) => acc + curr, 100);
        //console.log('reduce', reduce)

        //split
        const split = testString.split(',', 2)
        //console.log('split', split)
        //join
        const join = testArray.join(' ');
        //console.log('join', join)
        //substring
        //trim
        //includes
        const includes = testString.includes("b")
        //console.log('includes', includes)

        //ONCLICK WITH ARG 
        const onClick = e => handleClick(e.target.value)

        //setState() to array with new value
        //setTodos([...todos, e.target.value])

        //sort numbers ascending 
        const numAsc = testArray.sort((a, b) => a-b);
        //console.log('numAsc', numAsc)
        //sort strings ascending 
        const stringAsc = stringArray.sort((a, b) => a.localeCompare(b));
        //console.log('stringAsc', stringAsc)
        //sort boolean ascending
        const boolAsc = boolArray.sort((a, b) => Number(a) - Number(b));
        //console.log('boolAsc', boolAsc)
        
        //sort todos array based on title 
        const sortTitle = testObj.sort((a,b) => a.title.localeCompare(b.title))
        //console.log('sortTitle', sortTitle);

        //CREATE TAGS WITH INPUT
    //add tag that is not duplicate on "enter"
    //remove tag
    //add suggestions list 

    //FORM WITH STATE OBJECT 
    //handleChange()
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '', 
    //     select: '',
    //     radio: '',
    //     checkbox: []
    // })

    //FORM VALIDATION
    //validateEmail(), validatePassword()
      

    //FORMDATA()


    }
        

    }




    //UPDATE ARRAY
    //setTodos by unchecking one item and sorting based on checked or not
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        
        if (name === 'checkbox') {
          setFormData((prevFormData) => {
            const newCheckboxValues = checked
              ? [...prevFormData.checkbox, value] // Add value if checked
              : prevFormData.checkbox.filter((item) => item !== value); // Remove value if unchecked
            
            return {
              ...prevFormData,
              [name]: newCheckboxValues,
            };
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };

    const handleChange2 = setTodos((prevTodos) =>
      prevTodos
        .map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
        .sort((a, b) => Number(a.checked) - Number(b.checked)) // Move checked todos to the bottom
    );
   
    //setState() to array with new array
    setTodos([...todos, ...newArray])
    setData((prevData) => [...prevData, ...response.data]);


    //handleClick() for ascending or descending
    const handleDropdownChange = (e) => {
        if(e.target.value === 'ascending') {
            const sortedList = [...displayList].sort((a, b) => a.role.localeCompare(b.role))
            setDisplayList(sortedList);
        }
        if(e.target.value === 'descending') {
            const sortedList = [...displayList].sort((a, b) => b.role.localeCompare(a.role))
            setDisplayList(sortedList);
        }

        const sortedList2 = filteredList.sort((a, b) => 
            sortOrder === 'ascending' 
            ? a.role.localeCompare(b.role) 
            : b.role.localeCompare(a.role)
        );

    }

    //LOCAL STORAGE
    const [todos2, setTodos2] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : initialData;
    });

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    

    //SEARCH BAR 
    //filterList() from input value
    //SEARCH BAR 
    const filteredList = users.filter(user => 
        user.name.toLowerCase().startsWith(lowerCaseInput)
    );


         //PAGINATION WITH 2 BUTTONS
        //states, set original data, handlePrev(), handleNext()
        const [currentPage, setCurrentPage] = useState(1);
        const [currentPageData, setCurrentPageData] = useState('')
        const itemsPerPage = 5
        const pages = Math.ceil(data.length/itemsPerPage)

        const setData = () => {
            setCurrentPageData(data.slice(0, itemsPerPage));
        }

        const handlePrev = (e) => {
            if(currentPage > 1) setCurrentPage(prevData => prevData - 1)
            const startData = (currentPage -1) * itemsPerPage
            const endData = startData + itemsPerPage
            setCurrentPageData(data.slice(startData, endData));
        }

        if (currentPage < pages) {
        setCurrentPage((prevPage) => {
            const newPage = prevPage + 1;
            const startData = (newPage - 1) * itemsPerPage; // Use newPage here
            const endData = startData + itemsPerPage;
            setCurrentPageData(data.slice(startData, endData));
            return newPage; // Update the page after calculation
        });

        // const handlePageChange = (direction) => {
    //     setCurrentPage((prevPage) => {
    //         let newPage = prevPage;
            
    //         if (direction === "prev" && prevPage > 1) {
    //             newPage = prevPage - 1;
    //         } else if (direction === "next" && prevPage < pages) {
    //             newPage = prevPage + 1;
    //         }
    
    //         const startData = (newPage - 1) * itemsPerPage;
    //         const endData = startData + itemsPerPage;
    //         setCurrentPageData(data.slice(startData, endData));
    
    //         return newPage; // Return the updated page
    //     });
    // };


    //PAGINATION WITH # BUTTONS 
        //states, set original data, handlePageClick(), dispaly page #s
        const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

        onPageClick = e => {
            let newPage = e.target.value
            setCurrentPage(newPage)
            const startIndex = (newPage -1) * itemsPerPage
            const endIndex = startIndex = itemsPerPage
            const newPageData = data.slice(startIndex, endIndex)
        }

    
    
        //INFINITE SCROLL
    //scroll vertical container 
    
    //CAROUSEL SCROLL
    //scroll horizontal container 
   


        return(
            <div>
                {/* INPUT */}
                {/* MAPPED LIST WITH ONCLICK */}
                <button onClick={handleClick}>CLICK ME</button>
            </div>
        )

}