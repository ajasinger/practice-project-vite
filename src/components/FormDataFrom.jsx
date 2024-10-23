
//does not re-render as no state change 

export default function FormDataForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new FormData object
        const formData = new FormData(e.target);
        
        // Access the values using FormData
        const username = formData.get('username');
        const email = formData.get('email');
        
        console.log('Username:', username);
        console.log('Email:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      );
}