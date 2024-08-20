import React, { useRef } from 'react'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import MainPage from '../Main page/MainPage'
import './newandpopular.css'
import Navbar from '../Navbar/Navbar'

const item_width = 300;

function NewAndPopular() {

  const count = 0

  const comingRef = useRef(null)

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -item_width, behavior: 'smooth' });
    }
  }

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: item_width, behavior: 'smooth' });
    }
  }

  return (
    <div className='newPage'>
      
      <Navbar />

      {/* First two rows of movies list */}
      <div className='row1'>
        <MainPage
          heading1="New on Netflix"
          heading2="Worth the Wait"
        />
      </div>

      {/* Third row of movies list */}
      <div className='myList'>
        <div className='top'>
          <p className='headings'> Coming Next Week </p>
          <button className='arrow' onClick={() => scrollLeft(comingRef)}>
            <NavigateBeforeOutlinedIcon style={{ height: 20 }} />
          </button>
          <button className='arrow' onClick={() => scrollRight(comingRef)}>
            <NavigateNextOutlinedIcon style={{ height: 20 }} />
          </button>
        </div>
        <div className='section1' ref={comingRef}>
          <div className='list1' style={{ paddingBottom: 50 }}>
            <button className='pic'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList9.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList7.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList5.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList3.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList4.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList2.png' alt='' style={{ height: 130 }} /></button>
            <button className='pic'><img src='/img/myList8.png' alt='' style={{ height: 130 }} /></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewAndPopular