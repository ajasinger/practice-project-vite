export default function ToRemember() {

     //filter
    //reduce

    //split
    //join
    //substring
    //trim
    //includes

    //obejct.keys, values, entries

    //Conditional Statements: if, else, switch.
    //Loops: for, while, and for...of loops.
    
    
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

    //SELECTABLE PAGES 
    const [currentPage2, setCurrentPage2] = useState(1);
    const [pages, setPages] = useState([]);
    let totalPages = ''
    const rowsPerPg = 10;

    const firstPage = resData.slice(0, rowsPerPg);
                setTodoPage(firstPage);
    
                totalPages = resData.length / rowsPerPg;

                //create array of pages 
                let pageCount = []
                for(let i = 1; i <= totalPages; i++) {
                    pageCount.push(i);
                }
                setPages(pageCount);

                const handlePageClick = (e) => {
                    setCurrentPage(e.target.value);
                    const sliceStart = rowsPerPg * (e.target.value-1);
                    const sliceEnd = sliceStart + rowsPerPg
                    const slicedTodos = todos.slice(sliceStart, sliceEnd);
                    setTodoPage(slicedTodos);
                }

        //ARRAY FOR # BUTTONS 
        const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

                {/* pagination */}
        {pages && pages.map((page, i) => (
            <button value={page} key={i} onClick={handlePageClick} className="page-num">{page}</button>
        ))}

        const Pagination = ({ pages, currentPage, handlePageClick }) => {
            return (
              <div className="pagination">
                {pages.map((page) => (
                  <button
                    key={page} // Use page as a unique key
                    value={page}
                    onClick={handlePageClick}
                    className={`page-num ${currentPage === page ? "active" : ""}`} // Highlight current page
                    disabled={currentPage === page} // Disable current page button
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            );
          };

    //SEARCH BAR 
 const filteredList = users.filter(user => 
            user.name.toLowerCase().startsWith(lowerCaseInput)
        );

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

    //sort numbers ascending 
    numbers.sort((a, b) => a - b);
    //sort strings ascending 
    names.sort((a, b) => a.localeCompare(b));
    //sort boolean ascending
    items.sort((a, b) => Number(a.checked) - Number(b.checked))


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


  //STATE SET FOR UPDATE TO ARRAY 
  setTodos((prevTodos) =>
      prevTodos
        .map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
        .sort((a, b) => Number(a.checked) - Number(b.checked)) // Move checked todos to the bottom
    );

    const handleClick = e => {
        setClickedList([...clickedList, e.target.value]);
    }

    setData((prevData) => [...prevData, ...response.data]);

    //INFINITE SCROLL
    const [visibleItems, setVisibleItems] = useState([]);
    const [scrollTop, setScrollTop] = useState(0);
    const ITEM_HEIGHT = 30; // Fixed height of each item
    const VIEWPORT_HEIGHT = 500; // Height of the scrollable area
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (scrollRef.current) {
          setScrollTop(scrollRef.current.scrollTop);
        }
      };

      useEffect(() => {
        //const totalItems = items.length;
        const filteredItems = items.filter(word => word.includes(searchTerm));
        const totalItems = filteredItems.length
        const startIdx = Math.floor(scrollTop / ITEM_HEIGHT);
        const endIdx = Math.min(startIdx + Math.ceil(VIEWPORT_HEIGHT / ITEM_HEIGHT), totalItems);
    
        //const newVisibleItems = items.slice(startIdx, endIdx);
        const newVisibleItems = filteredItems.slice(startIdx, endIdx);
        setVisibleItems(newVisibleItems);
      //}, [items, scrollTop]);
    }, [items, scrollTop, searchTerm]);

    <ScrollWrapper ref={scrollRef} onScroll={handleScroll}></ScrollWrapper>

    //ANOTHER SCROLL EX
    const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  // Handle scrolling inside the container
  const handleScroll3 = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;

      // Check if the user has scrolled to the bottom of the container
      if (scrollHeight - scrollTop <= clientHeight + 300 && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  <div
      ref={scrollContainerRef}
      style={{ height: '400px', overflowY: 'auto', border: '1px solid black' }}
    ></div>

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading]);
    
    //CAROUSEL SCROLL
    const [imagesArray, setImagesArray] = useState([]);
    const ref = useRef(null);
    const scrollAmount = 300;

    const handleScroll2 = (direction) => {
        const container = ref.current;

        if(direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth'})
        }

        if(direction === 'right') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth'})
        }
    }
            <div>
                <div className={styles.arrowContainer}>
                    <button className={styles.arrow} onClick={() => handleScroll('left')}>&#8592;</button>
                    <button className={styles.arrow} onClick={() => handleScroll('right')}>&#8594;</button>
                </div>
                 <div className={styles.container} ref={ref}>
                 {imagesArray && imagesArray.length > 0 &&
                     imagesArray.map(image => (
                         <div key={image?.id}>
                             <img src={image?.url} alt={image?.title} />
                         </div>
                     ))
                 }
             </div>
             </div>
    
    //ADD TAG
    const addTag = (tag) => {
        const normalizedTag = tag.toLowerCase();
    
        // Prevent duplicate tags (case-insensitive)
        if (!tags.includes(normalizedTag)) {
          setTags([...tags, normalizedTag]);
        }
        setInputValue("");
        setSuggestions([]);
      };
    
      const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
      };

    //handle keyPress
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue) {
          addTag(inputValue);
        }
      };

    //FORM WITH STATE OBJECT 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '', 
        select: '',
        radio: '',
        checkbox: []
      })

      const handleChange2 = (e) => {
        if(e.target.name === 'checkbox') {
          setFormData({
            ...formData,
            [e.target.name]: [...formData.checkbox, e.target.value]
          })
        } else {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
        }
      }

      //FORM VALIDATION
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = (password) => {
        // Simple password validation (at least 6 characters)
        return password.length >= 6;
      };

      //UNCONTROL FORM 
      const usernameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Access the values using the refs
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        
        console.log('Username:', username);
        console.log('Email:', email);
    };

    <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" ref={usernameRef} />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
        </form>

    //FORMDATA()

    const handleSubmit3 = (e) => {
        e.preventDefault();
        // Create a new FormData object
        const formData = new FormData(e.target);
        
        // Access the values using FormData
        const username = formData.get('username');
        const email = formData.get('email');
        
        console.log('Username:', username);
        console.log('Email:', email);
    };

    <form onSubmit={handleSubmit3}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <button type="submit">Submit</button>
        </form>

    return(
        <div>
            {/* INPUT */}
            <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter color name"
        />
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
{/* LIST WITH ONCLICK */}
{suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
       
        </div>
    )
}