import React from 'react';

import PerfilIcon from '../resources/images/perfil-icon.jpg';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <ul className="Navbar-list">
                    <li className="Navbar-item">
                        <form className="Search-form">
                            <input className="Search-input" placeholder="  Buscar" />
                            <button className="Search-button"><SearchIcon /></button>
                        </form>
                    </li>
                    <li className="Navbar-item">
                        <MicIcon className="Navbar-icon"/>
                    </li>

                    <div className="Navbar-item Navbar-apps-item">
                        <li className="Navbar-item">
                            <VideoCallIcon className="Navbar-icon"/>
                        </li>
                        <li className="Navbar-item">
                            <AppsIcon className="Navbar-icon"/>
                        </li>
                        <li className="Navbar-item">
                            <NotificationsIcon className="Navbar-icon"/>
                        </li>
                        <li className="Navbar-item">
                            <div className="Perfil-icon-contain">
                                <span className="Perfil-icon" style={{ backgroundImage: `url(${PerfilIcon})` }} alt="icon"></span>
                            </div>
                        </li>
                    </div>

                </ul>
            </div>
        )
    }
}

export default Navbar;