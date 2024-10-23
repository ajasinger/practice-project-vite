import { useRef } from "react";

//doesn't re-render on changes, only on submit

export default function UncontrolForm() {
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

    return (
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
    );
};