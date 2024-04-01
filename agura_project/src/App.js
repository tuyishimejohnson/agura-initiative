import './index.css';
import './App.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import { Routes, Route }  from 'react-router-dom';
import Login from './components/Login';
import SignUp from './signup';


function App() {
  return (
    <div>
      <Layout />   

        <Routes>
          <Route path='/' element={ < Layout /> }/>
          <Route index element={ < HomePage /> }/>
          <Route path='/About' element={ < About /> }/>
          <Route path='/Services' element={ < Services /> }/>
          <Route path='/Contacts' element={ < Contacts /> }/>
          <Route path='/Login' element={< Login />}/>
          <Route path='/signup' element={ < SignUp />}/>
        </Routes> 
    </div> 
  );
}

export default App;
