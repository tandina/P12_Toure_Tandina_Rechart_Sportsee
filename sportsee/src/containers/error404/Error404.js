import React from "react";
import {  Link } from 'react-router-dom';
import LOGO from "../../assets/logo.svg"

function Error404(){
    return(<>
<div className='bg-dark'>
    <div>
           <img src={LOGO} alt="logo" className='home-logo'/>
    </div>
</div>
<div className="error-display">
    <h1 >la page demandé n'existe pas</h1>
            <Link to = {`/`}>
                <p >Retour à l'accueil </p>
            </Link>
</div>
    </>)
} 

export default Error404;