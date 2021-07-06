import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import NetworkIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './headeroptions/HeaderOption'
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" name="" id="" />
                </div>

            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Accueil"/>
                <HeaderOption Icon={NetworkIcon} title="Réseau"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Emploi"/>
                <HeaderOption Icon={ChatIcon} title="Messagerie"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://media-exp3.licdn.com/dms/image/D4E35AQH4UyL1RkW2CQ/profile-framedphoto-shrink_100_100/0/1625245515674?e=1625698800&v=beta&t=1sdcBlaq6sjE09zu1rSmiHi7v7hOJcMG4ry-00bJ2mY" title="Vous"/>
            </div>
            
            
        </div>
    )
}

export default Header
