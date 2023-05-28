import React from 'react'
import './card.css'
import { NavLink } from 'react-router-dom';
function Card(props) {
    const { cardImg, cardHeading, cardPara, linkPost } = props;

    const excerpt = cardPara.split(' ').slice(0, 4).join(' ');
    const showEllipsis = cardPara.split(' ').length >= 4;

    return (
        <div className="card">
            <img src={cardImg} alt="" />
            <div className="card-content">
                <h2 className="card-heading">{cardHeading}</h2>
                <p className="card-paragraph">{showEllipsis ? `${excerpt}...` : excerpt}</p>
            </div>

            <div className='btnCard'>
                <NavLink target='_blank' className='cardLink' to={linkPost}>Read More</NavLink>
            </div>

        </div>
    )
}

export default Card;
