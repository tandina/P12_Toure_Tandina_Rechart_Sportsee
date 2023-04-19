import LOGO from "../../assets/logo.svg"
import {  Link } from 'react-router-dom';

function Home() {

  return (<>
    <div className='bg-dark'>
         <div>
          <img src={LOGO} alt="logo" className='home-logo'/>
         </div>
    </div>
    <div>
      
        <div className="users">
        <Link to = {`/user/12`}>
          <p >user 12</p>
        </Link>
        <Link to = {`/user/18`}>
          <p >user 18</p>
        </Link>
        </div>

    </div>
    </>
  );
}
export default Home;

