import React, { useState } from 'react'
import './loginForm.css'
import { useNavigate } from 'react-router-dom'

function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  function validateForm() {
    if (email.length === 0) {
      alert('Email address cannot be empty')
      return
    }
    for (let i = 0; i < email.length; i++) {
      if (!email.includes('@gmail.com')) {
        alert('Missing @gmail.com')
        return
      }
    }
    if (password.length === 0) {
      alert('Password cannot be empty')
      return
    }
    else {
      navigate('/home')
    }
  }

  return (
    <div className='body2'>

      {/* Header of the page */}
      <div className='header'>
        <img src='../img/netflixLogo2.png' alt='' className='logo'></img>
      </div>

      {/* The form to enter username and password */}
      <div className='formBox'>
        <div className='container'>
          <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 25 }}>Sign In</p>
          <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Email' value={email} onChange={handleEmail} className='field'></input><br />
            <input type='text' placeholder='Password' value={password} onChange={handlePassword} className='field'></input><br />
            <button className='btn' onClick={() => { validateForm() }}>Sign In</button>
          </form>
          <div className='check'>
            <div>
              <input type='checkbox'></input>
              <label>Remember me</label>
            </div>
            <p>Need help?</p>
          </div>

          <div className='bottom'>
            <p>New to Netflix?</p>
            <p style={{ fontWeight: 'bold', paddingLeft: 10 }}>
              <a href='/getstarted' style={{ textDecoration: 'none', color: 'white' }}>Sign up now</a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginForm