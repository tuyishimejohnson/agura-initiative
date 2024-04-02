import './index.css';
import './App.css';
import Services from './components/Services';
import Contacts from './components/Contacts';
import { Routes, Route }  from 'react-router-dom';
import Login from './components/Login';
import SignUp from './signup';
import Home from './components/Home';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={ < Home /> }/>
          <Route path='/AboutUs' element={ < AboutUs /> }/>
          <Route path='/Services' element={ < Services /> }/>
          <Route path='/Contacts' element={ < Contacts /> }/>
          <Route path='/Login' element={< Login />}/>
          <Route path='/signup' element={ < SignUp />}/>
        </Routes> 
    </div> 
  );
}

export default App;
