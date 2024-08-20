import React, { useState } from 'react'
import './browsebylang.css'
import Navbar from '../Navbar/Navbar'

function BrowseByLang() {

  const count = 0

  const [choice, setChoice] = useState()

  const handleChange = e => {
    setChoice(e.target.value)
  }

  return (
    <div className='browsePage'>

      {/* Combined header of the page */}
      <div className='browseheader'>
        <Navbar />

        {/* Below the navbar header of the page */}
        <div className='additional'>
          <div className='left3'>
            <p className='browseTitle'>Browse By Languages</p>
            <div className='rightHalf'>
              <div>Select Your Preference</div>
              <select value={choice} onChange={handleChange} className='select'>
                <option>Original Language</option>
                <option>Dubbing</option>
                <option>Subtitles</option>
              </select>
              <select value={choice} onChange={handleChange} className='select'>
                <option>English</option>
                <option>Hindi</option>
                <option>Telugu</option>
                <option>Spanish</option>
                <option>Korean</option>
                <option>Indonesian</option>
                <option>French</option>
                <option>Italian</option>
              </select>
              <div className='sort'>Sort by</div>
              <select value={choice} onChange={handleChange} className='select'>
                <option>Suggestions for you</option>
                <option>Year Released</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Movies List */}
      <div className='grid2'>
        <button className='pic3'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList2.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList3.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList4.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList5.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList7.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList8.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList9.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch1.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch2.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch3.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch4.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch5.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch6.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList3.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList5.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList8.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList9.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch1.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch2.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch3.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch4.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch5.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic3'><img src='/img/nextWatch6.png' alt='' style={{ height: 130 }} /></button>
      </div>

    </div>
  )
}

export default BrowseByLang