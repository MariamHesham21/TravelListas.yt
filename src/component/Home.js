import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import London from './London';
import Paris from './Paris';

import Footer from './Footer'
import zer from "../Photo/video.mp4"
import mainphoto from "../Photo/header.jpg"
import zermatt from "../Photo/zermatt.jpg"
import ice from"../Photo/ice-cream.jpg"
import skiing from "../Photo/skiing.jpg"
import italy from "../Photo/italy.jpg"

import paris from "../Photo/parise.jpg"
import london from "../Photo/london.jpg"
import it2 from "../Photo/it2.jpeg"
import swiz from "../Photo/swiz.jpeg"
import finland from "../Photo/finland.jpeg"
import middel from "../Photo/head.jpg"
import city from "../Photo/city2.jpg"
import canal from "../Photo/canal.jpg"


const Home = () => {

  return (
    <div className='home-page'>
        <div className='home-1'>
            <div className='home-photo1'>
                <img src={mainphoto} alt="" width="1471" height="600"/>
            </div>
            <div className='home-text'>
                <h2> WELCOME TO TRAVELISTAS</h2>
                <p>we help you to choose best journey</p>
            </div>
        </div>
        <div className='home-3'>
            <div className='home-dist'>
                <h1>The EUROPE Continent</h1>
                <div className='box-container'>
                    <div className='box'>
                    <img src={ice}  width="465" height="400"/> 
                    <h3>Food</h3>
                    <p>Go on the hunt for some of the best food in europe,
                        <br/> With a guide, learn the local secrets of the Eternal City and sample traditional</p>
                        <button type="submit" className="btn">view Tour</button>

                    </div>
                    <div className='box'>
                    <img src={skiing}  width="465" height="400"/> 
                    <h3>Experience</h3>
                    <p>Experience many exciting winter or summer activities full of action in many countries in europe.<br/>
                    The feeling of adventure cannot be forgotten, let's go
                    </p>
                    <button type="submit" className="btn">view Activity</button>

                    </div>
                    <div className='box'>
                    <img src={italy}  width="465" height="400"/> 
                    <h3>Destinations</h3>
                    <p>The continent of Europe contains many beautiful countries that can be visited.
                        now we are ready to give you an unique experience of europe tour</p>
                        <button type="submit" className="btn">view trip</button>

                    </div>
                </div>
            </div>
         

        </div>

        <div className='home-2'>
            <div className='home-contain'>
                <div className='home-video'>
                    <video autoPlay loop muted height="600" width="600">
                        <source src={zer} type="video/mp4" />
                    </video>

                </div>

                <div className='text'>
                    <h1>TOP JOURNEY IN EUROPE</h1>
                    <h2>Zermatt, Switzerland</h2>
                    <h3>Itinerary 5 days for zermatt</h3>
                    <p>
                    Day 1:<br/>  Arrive and explore Zurich.<br/>
                    Day 2: <br/> Explore Interlaken, Lauterbrunnen, Jungfraujoch.<br/>
                    Day 3: <br/> Head to Zermatt, visit Matterhorn.<br/>
                    Day 4:<br/>  Ski and non-skiing activities.<br/>
                    Day 5:<br/>  Return to Zurich in the evening.<br/>
                    </p>
                    <button type="submit" className="btn">BOOK NOW</button>

                </div>

            </div>
        </div>
        <div className='home-5'>
            <div className='middle-photo'>
                <div className='wid-photo'>
                    <h2>Travel To Eroup</h2>
                    <p>Add a brief follow-up statement to your call to action<br/> to offer additional context.</p>

                </div>

            </div>
        </div>
        <div className='home-4'>
            <div className='home-photo'>
                <div className='DesPhoto'>
                <Link to="/Paris" className="pariss">
                    <img src={paris} width="700" height="400" className='pcss'/>
                </Link>
                    <h3>Explore paris</h3>
                </div>
                <div className='DesPhoto'>
                <Link to="/London" className="lon">

                    <img src={london} width="700" height="400" className='pcss'/>
                </Link>
                    <h3>Explore London</h3>
                </div>
            </div>
            <div className="home-photo">
                <div className='DesPhoto'>
                    <img src={it2} width="450" height="380" className='pcss'/>
                    <h3>Explore Italy</h3>
                </div>
                <div className='DesPhoto'>
                    <img src={swiz} width="450" height="380" className='pcss'/>
                    <h3>Explore Switzerland</h3>
                </div>
                <div className='DesPhoto'>
                    <img src={finland} width="450" height="380" className='pcss'/>
                    <h3>Explore Finland</h3>
                </div>

            </div>
        </div>
        <div className='home-6'>
            <div className='width-photo'>
                <div className='ero-photo'>
                <img src={canal} width="1469" height="450" />
                </div>
                <div className='Contact-us'>
                    <h1> CONTACT US</h1>
                    <h2>TRAVELISTAS</h2>
                    <p>+20-01234567</p>
                    <a href=''>TRAVELISTAS@Agency.com</a>
                    <p>
                       Independent agent of TravelIstas.<br/>
                       Agents Travel Ref. No. AB123456
                    </p>
                    <h3>Fill out the below form to connect with us!</h3>
                    <button type="submit" className="btn">CONTACT</button>

                </div>

            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Home
