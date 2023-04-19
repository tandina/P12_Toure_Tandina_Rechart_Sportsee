import React from 'react'
import PropTypes from 'prop-types'
import "./card.css"


function Card(props) {
    return (
       <div className='card'>
          <div className={props.css}>
            <img 
               
               src={props.picture} 
               alt="icone" 
               height={80} width={80} 
            />
          </div>
          <div>
            <p className='card-cat'>{props.cardData}{props.unit}</p> 
            <p className='card-type'>{props.cardName}</p> 
          </div>
       </div>
    )
 }
 Card.propTypes = {
    cardName: PropTypes.string,
    cardData: PropTypes.number,
 }
 
 export default Card

// const Thumbs = props => {
//   return (
//     <div><img src={props.icone} alt={props.iconeAlt}  /></div>
//   )
// }

// Thumbs.propTypes = {}

// export default Thumbs