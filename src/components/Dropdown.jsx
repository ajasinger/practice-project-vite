import { useState } from "react";

export default function Dropdown() {
    //states
    const [isOpen, setIsOpen] = useState(false);
    const [clickedList, setClickedList] = useState([]);
    const [error, setError] = useState(false);

    const dropdownButtons = [
        {id: 1, fruit: "banana"},
        {id: 2, fruit: "apple"},
        {id: 3, fruit: "pear"},
        {id: 4, fruit: "starfruit"}
    ]

    //functions
    const handleClick = e => {
        console.log('clicked', e.target.value);
        setClickedList([...clickedList, e.target.value]);
        console.log('clickedList', clickedList);
    }

    return(
        <>
        <button onClick={e => setIsOpen(!isOpen)}>{isOpen ? <p>X</p> : <p>Dropdown</p>}</button>
        {isOpen &&
            <div>
                {dropdownButtons.map(button => (
                    <button value={button.fruit} key={button.id} onClick={handleClick}>
                        {button.fruit}
                    </button>
                ))}

            </div>
        }
        {clickedList && clickedList.length > 0 &&
            clickedList.map((fruit, i) => (
                <div key={i}>
                    {fruit}
                </div>
            ))
        }
        {error &&
            <p>There was an error adding the item to your list.</p>
        }
        </>
    )
}