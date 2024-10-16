
//does not re-render as no state change 

export default function FormDataForm() {

    const handleSubmit = e => {
        e.preventDefault();

        const data = new FormData(e.target);
        const entries = Object.fromEntries(data.entries())
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    name="username"
                    placeholder="username"
                />
                <label>Email</label>
                <input 
                    name="email"
                    placeholder="email"
                />
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}