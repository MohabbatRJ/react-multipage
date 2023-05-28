import React from 'react'
import './section.css';
import { NavLink } from 'react-router-dom';
function Section(props) {

    console.log(props)
    const { headName, brandName, bannerContent, visit, btnName, imgSrc } = props;

    return (
        <>
            <div className="bannerLeft">
                <h1 className='bannerHeading'>{headName} <strong className='brand'>{brandName}</strong> </h1>
                <p className='bannerPara'>{bannerContent}</p>

                <div className="btnCon">
                    <NavLink className='bannerBtn' to={visit}>{btnName}</NavLink>
                </div>
            </div>

            <div className="bannerRight">
                <div className="image-container">

                    <img className='bannerImage' src={imgSrc} alt="" />
                </div>
            </div>
        </>
    )
}

export default Section
