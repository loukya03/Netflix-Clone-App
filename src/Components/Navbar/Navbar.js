import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './navbar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const count = 0;

    const [scroll, setScroll] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='fullNavbar'>
            {/* The navbar */}
            <div className={scroll ? 'scroll active' : 'scroll'}>
                <img src='/img/netflixLogo2.png' alt='' className='logo2'></img>
                <div className='navbar'>
                    <div className='left'>
                        <a className='link' href='/home'>Home</a>
                        <a className='link' href='/tvshows' >TVShows</a>
                        <a className='link' href='/movies'>Movies</a>
                        <a className='link' href='/newandpopular'>New & Popular</a>
                        <a className='link' href='/mylist'>My List</a>
                        <a className='link' href='/browsebylanguage'>Browse by Languages</a>
                    </div>
                    <div className='right'>
                        <button className='buttons'><SearchOutlinedIcon /></button>
                        <a className='link'>Children</a>
                        <button className='buttons'><NotificationsNoneOutlinedIcon /><sup>{count}</sup></button>
                        <button className='buttons' onClick={() => setOpen(!open)}><PortraitOutlinedIcon /></button>
                    </div>
                </div>
            </div>

            {
                open && <div className='dropdownList'>
                    <ul className='ul'>
                        <li className='li'>
                            <PortraitOutlinedIcon />
                            <div>Person2</div>
                        </li>
                        <li className='li'>
                            <PortraitOutlinedIcon />
                            <div>Children</div>
                        </li>
                        <li className='li'>
                            <CreateOutlinedIcon />
                            <div>Manage Profile </div>
                        </li>
                        <li className='li'>
                            <MoveUpOutlinedIcon />
                            <div>Transfer Profile</div>
                        </li>
                        <li className='li'>
                            <PermIdentityOutlinedIcon />
                            <div>Account</div>
                        </li>
                        <li className='li'
                            style={{ paddingLeft: 8, borderTop: "1px solid grey", paddingTop: 10 }}
                            onClick={() => navigate('/form')}
                        >Sign Out Of Netflix</li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Navbar