import React, {useState} from 'react'
import './loginHeader.css'
import { useNavigate } from 'react-router-dom'

// Starting page

function LoginHeader() {

  const [lang, setLanguage] = useState('English')

  const handleChange = e => {
    setLanguage(e.target.value)
  }

  const navigate = useNavigate()

  return (
    <div className='body'>

      {/* The header */}
        <div className='header'>
            <div className='col-30'>
                <img src='/img/netflixLogo2.png' alt='' className='logo'></img>
            </div>

            <div className='col=70'>
              <form className='signIn'>
                <select value={lang} onChange={handleChange} className='options'>
                  <option value={'English'}>English</option>
                  <option value={'Spanish'}>Spanish</option>
                  <option value={'Turkish'}>Turkish</option>
                  <option value={'German'}>German</option>
                  <option value={'French'}>French</option>
                </select>
                <button className='sign' onClick={() => navigate('form')}>Sign In</button>
              </form>
            </div>
        </div>

        {/* The body of the page */}
        <div className='main'>
          <h1 style={{fontSize: 35}}>Unlimited movies, TV shows and more </h1>
          <div style={{fontSize: 20}}>Watch anywhere. Cancel anytime.</div>
          <div style={{fontSize: 15, paddingTop: 25}}>Ready to watch? Enter your email to create or restart your membership. </div>

          <div className='email'>
            <input type='email' placeholder='Email address' className='address'></input>
            <button className='start' onClick={() => navigate('/getstarted')}> Get Started </button>
          </div>
        </div>
    </div>
  )
}

export default LoginHeader 