export default function TestForm() {
    

    //UNCONTROLLED FORM

    //FORMDATA

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        const email = formData.target.value
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" name="name"/>
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email"/>
        </div>
        <button type="submit">Submit</button>
        </form>
    );
};