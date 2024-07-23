import React from 'react'
import { useForm } from '../hooks/useForm'
import PrimaryButton from '../components/PrimaryButton'
import '../files/style.css'

const RegistrationPage = (props) => {
  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    resume: '',
    url: '',
    choice: '',
    about: ''
  }

  const [form, setForm, resetForm] = useForm(initialState)

  const submitForm = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const jsdf = JSON.stringify(Object.fromEntries(formdata))
    console.log(jsdf)
    sessionStorage.setItem("user", jsdf);
    resetForm(e);
  }

  console.log("Component Rerendered")
  return (
    <div className='full-hw center' style={{background: "aliceblue", fontFamily: "Alexandria", alignItems: "start", overflow:"auto"}}>
      <form onSubmit={(e) => {submitForm(e); props.loginStatus()}} id='login_form' className='center column'>
        <h2 style={{margin: "8px", fontSize: "19px", color: "darkgreen"}}>Registration Form</h2>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="firstname">firstname: </label>
          <input type="text" id='firstname' name='firstname' value={form.firstname} onChange={setForm} placeholder='Enter your first name' required/>
        </div>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="lastname">lastname: </label>
          <input type="text" id='lastname' name='lastname' value={form.lastname} onChange={setForm} placeholder='Enter your last name' />
        </div>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="email">email: </label>
          <input type="email" id='email' name='email' value={form.email} onChange={setForm} placeholder='Enter your email' required/>
        </div>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="contact">contact: </label>
          <input type="text" id='contact' name='contact' value={form.contact} onChange={setForm} placeholder='Enter your contact' required/>
        </div>
        <div className='formEl column'>
          <span style={{fontWeight: "bold", margin: "4px 0"}}>Select Gender: </span>
          <div className='center'>
            <input type="radio" id='male' name='gender' value="male" onChange={setForm} required/>
            <label htmlFor="male" className='optionLabel'>Male </label>
            <input type="radio" id='female' name='gender' value="female" onChange={setForm} required/>
            <label htmlFor="female" className='optionLabel'>Female </label>
            <input type="radio" id='other' name='gender' value="other" onChange={setForm} required/>
            <label htmlFor="other" className='optionLabel'>Other </label>
          </div>
        </div>
        <div className='formEl column'>
          <span style={{fontWeight: "bold", margin: "4px 0"}}>Select Subjects:</span>
          <div className='center'>
            <input type="checkbox" id='english' name='english' value="english" onChange={setForm} />
            <label htmlFor="english" className='optionLabel'>English </label>
            <input type="checkbox" id='maths' name='maths' value="maths" onChange={setForm} />
            <label htmlFor="maths" className='optionLabel'>Math </label>
            <input type="checkbox" id='physics' name='physics' value="physics" onChange={setForm} />
            <label htmlFor="physics" className='optionLabel'>Physics </label>
          </div>
        </div>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="resume">resume: </label>
          <input type="file" id='resume' name='resume' value={form.resume} onChange={setForm} placeholder='Upload your resume' />
        </div>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="url">Enter website URL: </label>
          <input type="text" id='url' name='url' value={form.url} onChange={setForm} placeholder='Enter your url' required/>
        </div>
        <div className='formEl column'>
          <label htmlFor="choice">language choice: </label>
          <select name="choice" id="choice">
            <option onChange={setForm} value="HTML">HTML</option>
            <option onChange={setForm} value="CSS">CSS</option>
            <option onChange={setForm} value="JavaScript">JavaScript</option>
          </select>
        </div>
        <div className='formEl column'>
          <label className='formLabel' htmlFor="about">about: </label>
          <textarea id='about' name='about' value={form.about} onChange={setForm} placeholder='Enter your about'></textarea>
        </div>
        <div className='formEl row' style={{justifyContent: "space-between", marginTop: "20px"}}>
          <PrimaryButton type="submit">Submit</PrimaryButton>
          <PrimaryButton type="reset" handleClick={resetForm}>Reset</PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage
