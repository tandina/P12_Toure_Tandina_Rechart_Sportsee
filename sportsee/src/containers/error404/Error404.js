import React from "react";
import {  Link } from 'react-router-dom';


function Error404(){
    return(<>

<p className="error">la page demandé n'existe pas</p>
    <Link to = {`/`}>
          <p >Retour à l'accueil </p>
    </Link>

    </>)
} 

export default Error404;