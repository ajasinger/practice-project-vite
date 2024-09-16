import './App.css'
import { useState } from 'react';

function App() {

  //states 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  //functions
  const handleSubmit = async() => {
    e.preventDefault();

    try{
      setSubmitting(true);

      const response = fetch('https://example.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          formData
        }) 
      })

      if (response.ok) {
        setSuccessMessage(true);
        //const resData = await response.json();
      } else {
        setErrorMessage(true);
        console.log('there was an error submitting the form')
      }

    } catch(error) {
      console.log('error in catch', error);
    } finally {
      setSubmitting(false);
    }
    

  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        
        {/* inputs */}
        <div className="half-width"> 
          <label htmlFor="firstName">First name:</label>
          <input 
            type="text" 
            value={formData.firstName} 
            name="firstName" 
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last name</label>
          <input 
            type="text" 
            onChange={handleChange} 
            name="lastName" 
            value={formData.lastName}
          />
        </div> 
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          name="email"
        />
        {/* checkbox */}
        {/* radio */}
        
        <button type="submit" disabled={submitting}>Submit</button>
        
        {errorMessage &&
          <p>There was an error submitting your info. Please try again.</p>
        }
        {successMessage &&
          <p>Your info has been submitted!</p>
        }

      </form>
        
    </>
  )
}

export default App
