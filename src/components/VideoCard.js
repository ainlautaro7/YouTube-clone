import React from 'react';
import VideoLandscape from '../resources/images/video-landscape.webp';
import VideoLandscapeHover from '../resources/images/video-landscape-hover.webp';
import CanalProfilePic from '../resources/images/canal-youtube.jpg';

class VideoCard extends React.Component {
    render() {
        return (
            <a href="https://www.youtube.com/watch?v=pKO9UjSeLew" className="VideoCard">
                <img className="VideoCard-Landscape-hover" src={VideoLandscapeHover} alt="video landscape"/>
                <img className="VideoCard-Landscape" src={VideoLandscape} alt="video landscape"/>
                <div className="VideoCard-body">
                    <img className="VideoCard-canal-pic" src={CanalProfilePic} alt="channel pic"/>
                    <div>
                        <h3 className="VideoCard-title">If Programming Was An Anime</h3>
                        <div className="VideoCard-description">
                            <span href="#" className="VideoCard-canal">Joma Tech</span>
                            <br />
                            <span className="VideoCard-visualizaciones">6,2 M de visualizaciones •</span>
                            <br />
                            <span className="VideoCard-tiempo">hace 1 año</span>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default VideoCard;