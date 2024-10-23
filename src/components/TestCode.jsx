export default function ToRemember() {

    //ONCLICK WITH ARG 

    //UUPDATE ARRAY
    //setTodos by unchecking one item and sorting based on checked or not
    //setState() to array with new value
    //setState() to array with new array

    //SORT
    //sort numbers ascending 
    //sort strings ascending 
    //sort boolean ascending
    //setState() for checked todo
    //handleClick() for ascending or descending
    //sort todos array based on title 

    //LOCALSTORAGE
    //get stored data & save data 
    
    //PAGINATION WITH 2 BUTTONS
    //states, set original data, handlePrev(), handleNext()

    //PAGINATION WITH # BUTTONS 
    //states, set original data, handlePageClick(), dispaly page #s

    //SEARCH BAR 
    //filterList() from input value


    //INFINITE SCROLL
    //scroll vertical container 
    
    //CAROUSEL SCROLL
    //scroll horizontal container 
   
    
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