import './controlForm.css'
import { useState } from "react"

//re-renders on every change to input as user is typing 
//https://www.youtube.com/watch?v=tIdNeoHniEY&t=45s
//https://github.com/safak/youtube/blob/react-form/src/components/FormInput.jsx

export default function ControlForm() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '', 
        confirmPassword: ''
    });
    const [focus, setFocus] = useState(false);

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "username",
            label: "username",
            errorMessage: "username should be 3-16 characters with no special characters",
            pattern: "^[a-zA-Z0-9$_@-]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "email",
            label: "email",
            errorMessage: "this must ba a valid email address",
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "password",
            label: "password",
            errorMessage: "password should be 8-20 characters and should include at least 1 letter, 1 number, and 1 special character",
            pattern: "^[a-zA-Z0-9$_@-]{8,20}$",
            required: true
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "password",
            label: "confirmPassword",
            errorMessage: "passwords don't match",
            pattern: values.password,
            required: true
        },

    ]

    const handleSubmit = e => {
        e.preventDefault();

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                {inputs.map (input => (
                    <div key={input.id}>
                        <label>{input.label}</label>
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
                        <div>{errorMessage}</div>
                    </div>
                ))}
                <button>Submit</button>
            </form>
            
        </div>
    )
}