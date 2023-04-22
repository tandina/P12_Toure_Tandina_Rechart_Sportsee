
import React from 'react'
// import PropTypes from 'prop-types'
import "./Hello.css"
/**
 * 
 * @param {Object} props - The props.
 * @param {string} props.firstname the user firstname
 * @returns display in a div the user name  */

function Hello(props) {

  return (
    <div className='hello-banner' >
      <div className='hello-name'>
        <h2>Bonjour </h2><h2 className='firstname'> {props.firstname}</h2>
      </div>
      <p> Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
// Hello.propTypes = {
//   firstname: PropTypes.string.isRequired,
// }

export default Hello
