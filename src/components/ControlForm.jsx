import { useState } from "react"

//re-renders on every change to input as user is typing 

export default function ControlForm() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '', 
        confirmPassword: ''
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "username",
            label: "username"
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "email",
            label: "email"
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "password",
            label: "password"
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "password",
            label: "confirmPassword"
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
                        />
                    </div>
                ))}
                <button>Submit</button>
            </form>
            
        </div>
    )
}