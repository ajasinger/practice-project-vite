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


//SILVERSHIELD PASSWORD INPUT

// "use client";

// import { useState } from 'react';
// import { usePathname } from 'next/navigation';

// export default function PasswordInput({password, setPassword}) {
//     const [visible, setVisible] = useState(false);
//     const pathname = usePathname();

//     const fontStyle = (pathname === '/update-password') ? "text-xs font-bold" : "text-base";
//     const inputStyle = (pathname === '/update-password') ?
//         "text-gray-900 text-sm border-silverBlue-2 border block w-full px-2.5 py-2 focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer" :
//         "text-gray-900 text-sm border-silverBlue-dark border block w-full p-3 focus:outline-none focus:ring-0 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"

//     return(
//         <div>
//                 <div className="space-y-2">
//                     <label 
//                         htmlFor="password"
//                         className={fontStyle}
//                     >
//                         Password
//                     </label>
//                     <div className="flex w-full flex-col relative">
//                         <input
//                             type={visible ? "text" : "password"}
//                             name="password"
//                             id="password"
//                             value={password}
//                             autoComplete="new-password"
//                             className={inputStyle}
//                             placeholder="password"
//                             onChange = {(e) => setPassword(e.target.value)}
//                             required
//                             pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"                     
//                         />
//                         <span 
//                             onClick={() => setVisible(!visible)}
//                             className="flex justify-around items-center"
//                         >
//                             {visible ? (
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute right-2 top-3">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                 </svg>
//                             ) : (
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 absolute right-2 top-3">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
//                                 </svg>
//                             )}
//                         </span>
//                         <div className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
//                             Password should include at least 8 characters, 1 lower case letter, 1 upper case letter, 1 number, and 1 special character from @$!%*?&
//                         </div>
//                     </div>
//                 </div>

//         </div>
//     )
// }
