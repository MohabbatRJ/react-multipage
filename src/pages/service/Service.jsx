import React from 'react'
import './service.css';
import Card from '../../components/cards/Card';
import cardData from '../../data/Data';
function Service() {
  return (
    <div className="serviceCon">
      <div className='service'>
        <div className="serviceHeading">
          <h1>Our Service</h1>
        </div>

        <div className="serviceData">
          {
            cardData.map((val, ind) => {
              return <Card key={ind} cardImg={val.imgSrc} cardHeading={val.title} cardPara={val.para} linkPost={val.postLink } />
            })
          }
        </div>
      </div>
    </div>


  )
}

export default Service
