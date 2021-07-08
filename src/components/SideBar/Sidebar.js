import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1563089145-599997674d42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <Avatar />
                <h2>Benoit Ndiaye</h2>
                <h4>Web developer</h4>
                
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Vues de votre profil</p>
                    <p className="sidebar_viewnumber">36</p>
                </div>
                <div className="sidebar_stat"> 
                    <p>Vues de votre post</p>
                    <p className="sidebar_viewnumber">100</p>

                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Récent</p>
            </div>
        </div>
    )
}

export default Sidebar
