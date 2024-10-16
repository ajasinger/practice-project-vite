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


// import React, { useState } from "react";

// export default function ControlForm() {
//     const [values, setValues] = useState({
//         username: '',
//         email: '',
//         password: '', 
//         confirmPassword: ''
//     });

//     const [errors, setErrors] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [focus, setFocus] = useState({
//         username: false,
//         email: false,
//         password: false,
//         confirmPassword: false
//     });

//     // Validation logic for each field
//     const validate = (name, value) => {
//         switch(name) {
//             case 'username':
//                 if (!/^[a-zA-Z0-9$_@-]{3,16}$/.test(value)) {
//                     return "Username should be 3-16 characters with no special characters.";
//                 }
//                 return '';
//             case 'email':
//                 if (!/\S+@\S+\.\S+/.test(value)) {
//                     return "This must be a valid email address.";
//                 }
//                 return '';
//             case 'password':
//                 if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@_-]).{8,20}$/.test(value)) {
//                     return "Password should be 8-20 characters, with at least 1 letter, 1 number, and 1 special character.";
//                 }
//                 return '';
//             case 'confirmPassword':
//                 if (value !== values.password) {
//                     return "Passwords don't match.";
//                 }
//                 return '';
//             default:
//                 return '';
//         }
//     }

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Check for errors before submitting
//         const validationErrors = {};
//         Object.keys(values).forEach((name) => {
//             const error = validate(name, values[name]);
//             if (error) validationErrors[name] = error;
//         });
//         setErrors(validationErrors);

//         // Submit form if no errors
//         if (Object.keys(validationErrors).length === 0) {
//             // Submit logic here
//         }
//     }

//     // Handle change in input fields
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({ ...values, [name]: value });
//         setErrors({ ...errors, [name]: validate(name, value) });
//     }

//     // Handle focus
//     const handleFocus = (e) => {
//         const { name } = e.target;
//         setFocus({ ...focus, [name]: true });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {[
//                     { id: 1, name: "username", type: "text", placeholder: "Username" },
//                     { id: 2, name: "email", type: "email", placeholder: "Email" },
//                     { id: 3, name: "password", type: "password", placeholder: "Password" },
//                     { id: 4, name: "confirmPassword", type: "password", placeholder: "Confirm Password" },
//                 ].map((input) => (
//                     <div key={input.id}>
//                         <label>{input.placeholder}</label>
//                         <input
//                             name={input.name}
//                             type={input.type}
//                             value={values[input.name]}
//                             placeholder={input.placeholder}
//                             onChange={handleChange}
//                             onFocus={handleFocus}
//                             focused={focus[input.name].toString()}
//                             required
//                         />
//                         {errors[input.name] && <div>{errors[input.name]}</div>}
//                     </div>
//                 ))}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }
