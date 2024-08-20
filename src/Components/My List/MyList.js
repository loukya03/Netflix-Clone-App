import React from 'react'
import Navbar from '../Navbar/Navbar'
import './myList.css'


function MyList() {
    const count2 = 0

    return (
    <div className='gridPage'>

      <div className='myListHeader'> 
        <Navbar />
        <div className='headerList'>
            <p className='tv' style={{paddingLeft: 50}}>My List</p>
        </div>
      </div>

      {/* Movies list */}
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
        <button className='pic2'><img src='/img/myList3.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic2'><img src='/img/myList1.png' alt='' style={{ height: 130 }} /></button>
        <button className='pic2'><img src='/img/myList6.png' alt='' style={{ height: 130 }} /></button>
      </div>
    </div>
  )
}

export default MyList