import React from 'react'
import homeImg from '../../images/home.png'
import './home.css';
import Section from '../../components/section/Section';
function Home() {
  return (
    <div className="bannerCon">
      <div className='banner'>
        <Section headName='Grow Your Business With' brandName='React Developer' bannerContent='We are the team of talented developer making React Website' visit='/service' btnName='Get Started' imgSrc={homeImg} />
      </div>
    </div>
  )
}

export default Home
