import React, { useState } from 'react'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import './HOC.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function TVShows({ className, title, rating, name, content }) {

    const count = 0

    const [choice, setChoice] = useState()
    const handleChange = e => {
        setChoice(e.target.value)
    }

    const [additional, setScroll] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const navigate = useNavigate()

    return (

        <div className='fullpage'>

            <div className={className}>

                {/* Both the headers combined together */}
                <div className='both'>

                    <Navbar />

                    <div className={additional ? 'additional active' : 'additional'}>
                        <div className='left2'>
                            <p className='tv' >{title}</p>
                            <select value={choice} onChange={handleChange} className='choices'>
                                <option> <h4>Genres</h4></option>
                                <option>For Bridgerton Fans</option>
                                <option>Sports</option>
                                <option>Crime</option>
                                <option>Indian</option>
                                <option>Dramas</option>
                                <option>Korean</option>
                                <option>Sci-fi</option>
                                <option>Reality & Talk</option>
                            </select>
                        </div>
                        <div className='right2'>
                            <button className='display' onClick={() => navigate('/tvshows')}><ListOutlinedIcon className='displayIcon' /></button>
                            <button className='display' onClick={() => navigate('/showsgrid')}><GridViewOutlinedIcon className='displayIcon' /></button>
                        </div>
                    </div>
                </div>

                {/* The information about the movie and other icons on the big image */}
                <div className='body3'>
                    <div className='title'>
                        <div>{name}</div>
                    </div>
                    <div className='button'>
                        <button className='icon'>Play</button>
                        <button className='icon'>My List</button>
                    </div>
                    <div className='info'>
                        <div className='content'>{content}</div>
                        <div className='sidebtn'>
                            <button className='volume'><VolumeUpOutlinedIcon variant='contained' fontSize='large' /></button>
                            <span className='rating'>{rating}</span>
                        </div>
                    </div>
                    <div className='footer'></div>
                </div>

            </div>
        </div>

    )
}

export default TVShows