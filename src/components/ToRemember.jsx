export default function ToRemember() {

    //PAGINATION 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3

    const fetchData = async(e) => {
    //set display data to first page 
        const slicedData = resData.results.slice(0,itemsPerPage)
        setDisplayData(slicedData);
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


    //SEARCH BAR 


    //SORT
    const handleChange = useCallback((id) => {
        setTodos((prevTodos) =>
          prevTodos
            .map((todo) =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
            .sort((a, b) => Number(a.checked) - Number(b.checked)) // Move checked todos to the bottom
        );
      }, []);

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


    //FUNCTION WHEN PASSING ARG TO ONCLIK
    //onClick={() => handleSelectName(person.name)}


//LOCAL STORAGE
const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialData;
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


    return(
        <div>
            {/* INPUT */}
    <input type="text" onChange={handleInputChange} id="name" value={inputName}/>
    <input 
                            name={input.name}
                            type={input.type}
                            value={values[input.name]}
                            placeholder={input.placeholder}
                            onChange={e => setValues({...values, [e.target.name]:e.target.value})}
                            required={input.required}
                            pattern-={input.pattern}
                            onBlur={e => setFocus(true)}
                            focused={focus.toString()}
                            onFocus={() =>
                                inputProps.name === "confirmPassword" && setFocus(true)
                            }
                        />

        </div>
    )
}