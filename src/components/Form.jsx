import {useState} from 'react';

//input to enter color names and display above as tags that you can x out 
/** * InstructionsCreate a tags input component from scratch with React. If there's time, 
 * add an autocomplete feature. For the autocomplete, an array of objects containing a color string will be 
 * provided for suggestions based on the input value. You are encouraged to ask questions and discuss trade-offs/ideas 
 * with your interviewer. The goal is to have a solution that meets all requirements by the end of the interview. You are 
 * allowed to use the internet during this process.
The component should:- Have an input that the user can type into- Add the current value of the input as a tag when the user 
presses the Enter key, and clear the current value- Remove a tag when it's clicked- Prevent duplicate tags from being added- 
all values are case-insensitive (e.g. "abc" = "ABC" = "aBc")- Basic styling
Autocomplete requirements- Use the provided colors.json file for suggestion values- Cannot use the datalist element- 
Given an of array of objects containing a color name, offer suggestions based on the userʼs input- The suggestions should 
only be displayed when the user is typing in the input and if one of the suggestions matches that input- When a 
suggestion is clicked, its value should be added as a tag and the current input value should be cleared- The list of values 
should not contain a value already selected- The list of values should be displayed over any content below the tags input */

export default function Form() {
    const [colorArray, setColorArray] = useState([]);
    const [colorName, setColorName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const autocompleteArray = ["blue", "green", "red", "yellow"];

    const handleChange = e => {
        setIsOpen(true);

        //check if e.target.value matches the array items 
        // const filteredColors = colors.filter(color =>
        //     color.toLowerCase().includes(e.target.value.toLowerCase())
        // );

        setColorName(e.target.value);
    }

    const handleDropdownClick = e => {
        setColorArray([...new Set([...colorArray, e.target.value])]);
        setColorName('');
        setIsOpen(false);
    }

    const handleSubmit = e => {
        e.preventDefault();

        //SET
        setColorArray([...new Set([...colorArray, colorName])]);

        //FIND
        const inArray = colorArray.find(element => element === colorName);

        if(!inArray) setColorArray([...colorArray, colorName])
        setColorName('');
        setIsOpen(false);
    }

//     Use the provided colors.json file for suggestion values- Cannot use the datalist element- 
// Given an of array of objects containing a color name, offer suggestions based on the userʼs input- The suggestions should 
// only be displayed when the user is typing in the input and if one of the suggestions matches that input- When a 
// suggestion is clicked, its value should be added as a tag and the current input value should be cleared- The list of values 
// should not contain a value already selected- The list of values should be displayed over any content below the tags input */

    const handleClick = (color) => {
        const filteredArray = colorArray.filter(element => element !== color)
        setColorArray(filteredArray);
    }
    
    return(
        <div>
            {/* array form */}
            {colorArray && colorArray.map((color, index) => (
                <div key={index}>
                    {color}
                    <button onClick={() => handleClick(color)}>X</button>
                </div> 
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={colorName}
                    aria-label="enter a color name"
                    placeholder= "color name"
                />
            </form>
            {isOpen && autocompleteArray && autocompleteArray.map((element, index) => (
                <button key={index} onClick={handleDropdownClick} value={element} >
                    {element}
                </button>
            ))}
            {/* object form */}

        </div>
    )
}