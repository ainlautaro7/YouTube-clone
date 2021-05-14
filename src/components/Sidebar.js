import React from 'react';
import YoutubeBrand from '../resources/images/youtube-brand.png';
import CanalYoutube from '../resources/images/canal-youtube.jpg';

// Iconos
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import HistoryIcon from '@material-ui/icons/History';
import WatchIcon from '@material-ui/icons/WatchLater';
import SlideShowIcon from '@material-ui/icons/Slideshow';
import MovieIcon from '@material-ui/icons/LocalMovies';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FlagIcon from '@material-ui/icons/Flag';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HelpIcon from '@material-ui/icons/Help';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LightBulbIcon from './icons/LightBulb';
import SensorsIcon from './icons/Sensors';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoGamesIcon from './icons/VideoGames';
import MenuIcon from '@material-ui/icons/Menu';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar-container">
                <div className="Sidebar-brand-container">
                    <MenuIcon className="Sidebar-icon menu" />
                    <div className="Sidebar-brand" style={{ backgroundImage: `url(${YoutubeBrand})` }} alt="YouTube logo"></div>
                </div>
                <div className="Sidebar">
                    <ul className="Sidebar-list">
                        <li className="Sidebar-item active">
                            <HomeIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/">Inicio</a>
                        </li>
                        <li className="Sidebar-item">
                            <ExploreIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/explorar">Explorar</a>
                        </li>
                        <li className="Sidebar-item">
                            <SubscriptionsIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/suscripciones">Suscripciones</a>
                        </li>
                        <hr className="Sidebar-divider" />
                        <li className="Sidebar-item">
                            <VideoLibraryIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/biblioteca">Biblioteca</a>
                        </li>
                        <li className="Sidebar-item">
                            <HistoryIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/historial">Historial</a>
                        </li>
                        <li className="Sidebar-item">
                            <SlideShowIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/mis-videos">Mis videos</a>
                        </li>
                        <li className="Sidebar-item">
                            <MovieIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/mis-peliculas">Mis películas</a>
                        </li>
                        <li className="Sidebar-item">
                            <WatchIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/ver-mas-tarde">Ver más tarde</a>
                        </li>
                        <li className="Sidebar-item">
                            <ExpandMoreIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/mostrar-mas">Mostrar más</a>
                        </li>
                        <hr className="Sidebar-divider" />
                        <h4 className="Sidebar-title">Suscripciones</h4>
                        <li className="Sidebar-item">
                            <img src={CanalYoutube} className="Sidebar-foto-canal-yotube" alt="canal-pic" />
                            <a className="Sidebar-link" href="/channel/joma-tech">Joma Tech</a>
                        </li>
                        <li className="Sidebar-item">
                            <img src={CanalYoutube} className="Sidebar-foto-canal-yotube" alt="canal-pic" />
                            <a className="Sidebar-link" href="/channel/joma-tech">Joma Tech</a>
                        </li>
                        <li className="Sidebar-item">
                            <img src={CanalYoutube} className="Sidebar-foto-canal-yotube" alt="canal-pic" />
                            <a className="Sidebar-link" href="/channel/joma-tech">Joma Tech</a>
                        </li>
                        <li className="Sidebar-item">
                            <img src={CanalYoutube} className="Sidebar-foto-canal-yotube" alt="canal-pic" />
                            <a className="Sidebar-link" href="/channel/joma-tech">Joma Tech</a>
                        </li>
                        {/* Mas de Youtube */}
                        <hr className="Sidebar-divider" />
                        <h4 className="Sidebar-title">Más de YouTube</h4>
                        <li className="Sidebar-item">
                            <YouTubeIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/youtube-premium">YouTube premium</a>
                        </li>
                        <li className="Sidebar-item">
                            <MovieIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/peliculas">Películas</a>
                        </li>
                        <li className="Sidebar-item">
                            <VideoGamesIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/videojuegos">VideoJuegos</a>
                        </li>
                        <li className="Sidebar-item">
                            <SensorsIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/directo">Directo</a>
                        </li>
                        <li className="Sidebar-item">
                            <LightBulbIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/aprendizaje">Aprendizaje</a>
                        </li>
                        <li className="Sidebar-item">
                            <EmojiEventsIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/deportes">Deportes</a>
                        </li>
                        {/* Configuraciones */}
                        <hr className="Sidebar-divider" />
                        <li className="Sidebar-item">
                            <SettingsIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/configuracion">Configuración</a>
                        </li>
                        <li className="Sidebar-item">
                            <FlagIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/historial-de-denuncias">Historial de denuncias</a>
                        </li>
                        <li className="Sidebar-item">
                            <HelpIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/ayuda">Ayuda</a>
                        </li>
                        <li className="Sidebar-item">
                            <FeedbackIcon className="Sidebar-icon" />
                            <a className="Sidebar-link" href="/enviar-sugerencias">Enviar sugerencias</a>
                        </li>
                        <hr className="Sidebar-divider" />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;