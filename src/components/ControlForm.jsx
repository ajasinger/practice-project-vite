import { useState } from "react"

//re-remders on every change to input as user is typing 

export default function ControlForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')

    return(
        <div>
            <form>
                <label>Username</label>
                <input 
                    placeholder="username"
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input 
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
            </form>
            
        </div>
    )
}