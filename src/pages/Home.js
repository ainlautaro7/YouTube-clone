import React from 'react';

// components
import Navbar from '../components/Navbar';
import NavTag from '../components/NavTag';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-nav">
                    <Navbar />
                    <NavTag />
                </div>
                <div>
                    <Sidebar />
                    <section className="Home-content">
                        <div className="row">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                        <br />
                        <div className="row">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                        <div className="row">
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                            <VideoCard />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;