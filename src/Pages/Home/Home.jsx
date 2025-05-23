import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero1_banner from '../../assets/hero1_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero1_banner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img' />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
                    <div className="hero-btns">
                        <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                    </div>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards />
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only On The Netflix"} category={"popular"} />
                <TitleCards title={"Upcoming"} category={"upcoming"} />
                <TitleCards title={"Top Pics for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home

