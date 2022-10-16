import './header.scss';
import {SiHomeassistant }from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import ChatBot from '../ChatBot/ChatBot';
const Header = () => {
    return (
            <>
                <nav className='header'>
                    <ul id='header-task'>
                        <li><Link to={'/'}><SiHomeassistant id='home-icon'></SiHomeassistant></Link></li>
                        <li id='item'><Link to={'/'}>Home</Link></li>
                        <li id='item'><Link to={'/about'}>About</Link></li>
                        <li id='item'><Link to={'/contact'}>Contact</Link></li>
                        <li id='item'><Link to={'/app'}>App</Link></li>
                    </ul>
                </nav>
                <span>
                    <ChatBot></ChatBot>
                </span>
                <Outlet></Outlet>
            </>
    )
}

export default Header;