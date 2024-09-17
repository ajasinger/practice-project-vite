import { useState, useEffect } from "react";

export function useLocalStorage() {
    //string is desired key to save in localStorage
    const [value, setValue] = useState((str) => {
        //get data from localStorage
        return JSON.parse(localStorage.getItem(str))
    });

    useEffect(() => {
        //set data in localStorage
        localStorage.setValue(str, JSON.stringify(value))
    }, [value])

    //can rename this when you import it into a component
    return [value, setValue];
}