import './App.css';
import {Home, Dashboard, Error404} from './containers/index'
import {Routes,Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';

/** @function UserIdCheck */

//  check if the id is correct, for incorrect id the user is redirected to error page

function UserIdCheck() {
  const { id } = useParams();
  let userIdSet = [12, 18]; // utilise un tableau pour stocker les IDs autorisés
  console.log(userIdSet);
  if (!userIdSet.includes(Number(id))) { // vérifie si l'id n'est pas dans le tableau
    return <Error404 />;
  }
  return <Dashboard element={<Dashboard />} />;
}

/** @function UserIdCheck */

//  manage all routes


function App(){
  return (
    <div className='App'>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/user/:id" element={<UserIdCheck/>}/>
              <Route path="*" element={<Error404 />} />
            </Routes>
    </div> 
);
}
export default App;