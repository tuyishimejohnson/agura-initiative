import './index.css';
import './App.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import FooterForm from './components/FooterForm';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>

      < Layout />
      < HomePage />
      < FooterForm />
      < About />
      < Services />
      < Contacts />
    </div>
  );
}

export default App;
