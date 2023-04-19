import { Bike,Lift, Pool, Zen} from "../../assets/icons"
import "./Sidebar.css"

function SideBar() {
    return (<>
    <div className="sidebar-content">
    <span className="relative"></span>
        <ul className="aside-icones-list">
                <li className="aside-icon">
                <Zen alt="relax"/>
                </li>
                <li className="aside-icon">
                    <Pool alt="natation"/>
                </li>
                <li className="aside-icon">
                <Bike alt="vélo" />
                </li>
                <li className="aside-icon">
                <Lift alt="fitness" />
                </li>
                <li><p className="copyright">Copiryght, SportSee 2020</p></li>
        </ul>
    </div>
        
    </>
    );
  }
  
  export default SideBar;
  