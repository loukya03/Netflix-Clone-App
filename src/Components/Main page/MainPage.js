import React, { useRef } from 'react'
import './mainPage.css'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'

const item_width = 300;

function MainPage({heading1, heading2}) {

    const myListRef = useRef(null)
    const nextWatchRef = useRef(null)

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
        <div className='movies'>

            {/* Row 1 of movies list */}
            <div className='myList'>
                <div className='top'>
                    <p className='headings'> {heading1} </p>
                    <button className='arrow' onClick={() => scrollLeft(myListRef)}> 
                        <NavigateBeforeOutlinedIcon style={{ height: 20 }} />
                    </button>
                    <button className='arrow' onClick={() => scrollRight(myListRef)}> 
                        <NavigateNextOutlinedIcon style={{ height: 20 }} />
                    </button>
                </div>
                <div className='section1' ref={myListRef}>
                    <div className='list1'>
                        <button className='pic'><img src='../img/myList1.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList2.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList3.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList4.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList5.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList6.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList7.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList8.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList9.png' alt='' style={{ height: 130 }} /></button>
                    </div>
                </div>
            </div>

            {/* Row 2 of movies list */}
            <div className='myList'>
                <div className='top'>
                    <p className='headings'> {heading2} </p>
                    <button className='arrow' onClick={() => scrollLeft(nextWatchRef)}> 
                        <NavigateBeforeOutlinedIcon style={{ height: 20 }} />
                    </button>
                    <button className='arrow' onClick={() => scrollRight(nextWatchRef)}> 
                        <NavigateNextOutlinedIcon style={{ height: 20 }} />
                    </button>
                </div>
                <div className='section1' ref={nextWatchRef}>
                    <div className='list1'>
                        <button className='pic'><img src='../img/nextWatch1.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/nextWatch2.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/nextWatch3.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/nextWatch4.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/nextWatch5.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/nextWatch6.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList3.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList1.png' alt='' style={{ height: 130 }} /></button>
                        <button className='pic'><img src='../img/myList6.png' alt='' style={{ height: 130 }} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
