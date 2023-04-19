import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.svg"
import "./header.css"

function Header() {
    return (
        <div className="header">
            <ul className="header__list">
                <li><Link to="/">
                    <img src={LOGO} alt="logo" className='header-logo'/>
            </Link></li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    )
}
export default Header;