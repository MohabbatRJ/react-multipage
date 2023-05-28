import React from 'react'
import './about.css'
import Section from '../../components/section/Section'
import aboutImg from '../../images/about.png'

function About() {
  return (
    <div className="aboutCon">
      <div className='about'>
      <Section headName='Welcome to ' brandName='About' bannerContent='Know more about our brand' visit='/contact' btnName='Contact Now' imgSrc={aboutImg} bgColor='#025368'/>
    </div>
    </div>
  )
}

export default About
