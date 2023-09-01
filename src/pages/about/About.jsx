import React from 'react'
import './About.css'
// import Navbar from ''

const About = () => {
  return (
    
    <div>

      <div className="main-heading">
        <h1 align='center'><b>WELCOME <br/>TO<br/> NIKE, INC.</b></h1>
      </div>

      <div className="main-video">
        <video autoPlay loop width="100%" height="50%">
        <source src="./images/nike_video.mp4" type="video/mp4"/>
        </video>
      </div>

      <div className="desc1">
        <div className="text" >NIKE, Inc. is a team comprised of the Nike, Jordan and Converse brands driven by a shared purpose to leave an enduring impact.</div>
      </div>

      <div className="desc2">
        <h3>Who we are</h3>
        <div className="desc2-img">
          <img src="https://media.about.nike.com/images/71fbb222-326e-4bc3-8e4a-f0fbad0fc1fb/nike-inc-swoosh-jordan-converse-logos.jpg?fm=jpg&q=80&fit=max&crop=%2C%2C%2C&w=1920" alt="" />
        </div>
        <h2 align="center">With a global footprint, culture of innovation and team-first mentality, we take action to create a future of continual progress for athletes, sport and our world.</h2>
      </div>

      <div className="glance">
        <h3>At a Glance</h3>
        <div className="boxes">

          <div className="box">
            <h1>43%</h1>
            <p>With a global footprint, culture of innovation and team-first mentality, we take action to create a future of continual progress for athletes, sport and our world.</p>
          </div>

          <div className="box">
            <h1>78%</h1>
            <p>renewable energy in owned or operated facilities, up from 48% in FY20.</p>
          </div>

          <div className="box">
            <h1>$97.7M</h1>
            <p>invested in NIKE, Inc.'s fiscal year 2021 to drive positive impact in communities around the world.</p>
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default About