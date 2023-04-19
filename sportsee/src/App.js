import './App.css';
import {Home, Dashboard, Error404} from './containers/index'
import {Routes,Route} from 'react-router-dom';

function App(){
  return (
    <div className='App'>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/user/:id" element={<Dashboard/>}/>
              <Route path="*" element={<Error404 />} />
            </Routes>
    </div> 
);
}
export default App;