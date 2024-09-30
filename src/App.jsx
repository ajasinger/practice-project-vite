import './App.css'
import { useState } from 'react';
import TableDisplay from './components/tableDisplay';
import Dropdown from './components/dropdown';
import Accordion from './components/Accordion';
import ImageCarousel from './components/ImageCarousel';
import Form from './components/Form';
import Methods from './components/Methods';

function App() {

  //states 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    select: '',
    radio: '',
    checkbox: []
  })
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  //functions
  const handleSubmit = async(e) => {
    console.log()
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
    if(e.target.name === 'checkbox') {
      setFormData({
        ...formData,
        [e.target.name]: [...formData.checkbox, e.target.value]
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <>
    <h1>Methods</h1>
    < Methods />
    <h1>FORM</h1>
    < Form />

    <div className="form-container">
      
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>

        {/* inputs */}
        <div className="half-width"> 
          <div className="form-section">
            <label htmlFor="firstName">First name</label>
            <input 
              type="text" 
              value={formData.firstName} 
              name="firstName" 
              onChange={handleChange}
              id="firstName"
              autoComplete="first name"
            />
          </div>
          <div className="form-section">
            <label htmlFor="lastName">Last name</label>
            <input 
              type="text" 
              onChange={handleChange} 
              name="lastName" 
              value={formData.lastName}
              id="lastName"
              autoComplete="last name"
            />
          </div>
        </div> 
        <div className="form-section">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            name="email"
            id="email"
            autoComplete="email@email.com"
          />
        </div>
      {/* checkbox */}
      <div>
          <input type="checkbox" name="checkbox" value="checkbox1" onChange={handleChange} checked={formData.checkbox.includes('checkbox2')} />
          <label htmlFor="checkbox1">checkbox1</label>
        </div>
        <div>
          <input type="checkbox" name="checkbox" value="checkbox2" onChange={handleChange} checked={formData.checkbox.includes('checkbox2')} />
          <label htmlFor="checkbox2">checkbox2</label>
        </div>
        <div>
          <input type="checkbox" name="checkbox" value="checkbox3" onChange={handleChange} checked={formData.checkbox.includes('checkbox2')}/>
          <label htmlFor="checkbox3">checkbox3</label>
        </div>
      {/* select */}
        <select onChange={handleChange} value={formData.select} name="select">
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
        </select>
      {/* radio */}
        <div>
          <input type="radio" name="radio" value="radio1" onChange={handleChange} checked={formData.radio === 'radio1'} />
          <label htmlFor="radio1">Radio1</label>
        </div>
        <div>
          <input type="radio" name="radio" value="radio2" onChange={handleChange} checked={formData.radio === 'radio2'} />
          <label htmlFor="radio2">Radio2</label>
        </div>
        <div>
          <input type="radio" name="radio" value="radio3" onChange={handleChange} checked={formData.radio === 'radio3'} />
          <label htmlFor="radio3">Radio3</label>
        </div>

        <button type="submit" disabled={submitting}>Submit</button>
        
        {errorMessage &&
          <p>There was an error submitting your info. Please try again.</p>
        }
        {successMessage &&
          <p>Your info has been submitted!</p>
        }

      </form>
      </div>
      < Dropdown />
      < Accordion />
      < TableDisplay />
      < ImageCarousel />
    </>
  )
}

export default App
