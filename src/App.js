import './index.css';
import './App.css';
import { Routes, Route }  from 'react-router-dom';
import Login from './components/Login';
import SignUp from './signup';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ServicesProvided from './components/ServicesProvided';
import ContactUs from './components/ContactUs';
import Layout from './components/Layout';



function App() {
  return (
    <div>
      <Layout></Layout>
        <Routes>
          <Route path='/' element={ < Home /> }/>
          <Route path='/AboutUs' element={ < AboutUs /> }/>
          <Route path='/ServicesProvided' element={ < ServicesProvided /> }/>
          <Route path='/ContactUs' element={ < ContactUs /> }/>
          <Route path='/Login' element={< Login />}/>
          <Route path='/signup' element={ < SignUp />}/>
        </Routes> 
    </div> 
  );
}

export default App;
