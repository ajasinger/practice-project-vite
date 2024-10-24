export default function TestForm() {
    

    //UNCONTROLLED FORM


    //FORMDATA
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" />
        </div>
        <button type="submit">Submit</button>
        </form>
    );
};