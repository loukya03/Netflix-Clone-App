import React from 'react'
import { useNavigate } from 'react-router-dom'
import './getstarted.css'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

function GetStarted() {
    const navigate = useNavigate()

    return (
        <div className='startPage'>
            <div className='startHeader'>
                <img src='../img/netflixLogo2.png' alt='' className='logos'></img>
                <button className='sign2' onClick={() => navigate('/form')}>Sign In</button>
            </div>
            <div className='step1'>
                <CheckCircleOutlineOutlinedIcon className='redTick'/>
                <div >Step 1 of 3</div>
                <div style={{fontWeight:'bold', fontSize: 25}}>Choose your plan</div>
                <div className='points'>
                    <div className='point'>
                        <DoneOutlinedIcon className='tick' />
                        <div>You won't be charged until and after you free month.</div>
                    </div>
                    <div className='point'>
                        <DoneOutlinedIcon className='tick' />
                        <div>We will remind you three days before your trial ends.</div>
                    </div>
                    <div className='point'>
                        <DoneOutlinedIcon className='tick' />
                        <div>No commitments, cancel anytime.</div>
                    </div>
                </div>
                <button className='plan'>See the plans</button>
            </div>
        </div>

    )
}

export default GetStarted