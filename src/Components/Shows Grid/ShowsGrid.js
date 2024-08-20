import React, { useState } from 'react'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import './showsgrid.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

function ShowsGrid() {

    const count2 = 0

    const navigate = useNavigate()

    const [choice, setChoice] = useState()

    const handleChange = e => {
        setChoice(e.target.value)
    }

    return (
        <div className='gridPage'>

            <div className='bigHeader'>
                <Navbar />
                <div className='additional'>
                    <div className='left2'>
                        <p className='tv'>TV Shows</p>
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

            <div className='grid'>
                <button className='pic2'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList2.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList3.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList4.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList5.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList7.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList8.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList9.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/nextWatch1.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/nextWatch2.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/nextWatch3.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/nextWatch4.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/nextWatch5.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/nextWatch6.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList3.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
                <button className='pic2'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
            </div>
        </div>
    )
}

export default ShowsGrid