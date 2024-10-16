import { useRef } from "react";

//doesn't re-render on changes, only on submit

export default function UncontrolForm() {
    const usernameRef = useRef();
    const emailRef = useRef()

    const handleSubmit = e => {
        //so it doesn't refresh page 
        e.preventDefault();

        console.log('submitted')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    placeholder="username"
                    ref={usernameRef}
                />
                <label>Email</label>
                <input 
                    placeholder="email"
                    ref={emailRef}
                />
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}