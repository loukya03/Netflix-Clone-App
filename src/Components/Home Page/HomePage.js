import React from 'react'
import Navbar from '../Navbar/Navbar'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import MainPage from '../Main page/MainPage';
import './homepage.css'

function HomePage() {
    return (
        <div className='fullPage'>
            <div className='mainPage'>
                <div>
                    <Navbar />
                </div>

                {/* The big image with its details and other icons */}
                <div className='body3'>
                    <div className='title'>
                        <div>Queen Of Tears</div>
                    </div>
                    <div className='button'>
                        <button className='icon'>Play</button>
                        <button className='icon'>My List</button>
                    </div>
                    <div className='info'>
                        <div className='content'>
                            They are both big-time bosses:
                            She reigns over a sea of department stores,
                            and he is the head of legal for a chain of supermarkets.
                            Their high-profile wedding secured them as the couple of the century.
                            But when their marriage hits a rough patch and a near-tragedy strikes,
                            Baek Hyun-woo (Kim Soo-hyun) and Hong Hae-in (Kim Ji-won)
                            must reckon with their love for each other like never before.
                        </div>
                        <div className='sidebtn'>
                            <button className='volume'><VolumeUpOutlinedIcon variant='contained' fontSize='large' /></button>
                            <div className='rating'>U/A 16+</div>
                        </div>
                    </div>
                    <div className='footer'></div>
                </div>
            </div>

            {/* The bottom rows of items */}
            <MainPage
                heading1="My List"
                heading2="Your Next Watch"
            />

        </div>
    )
}

export default HomePage