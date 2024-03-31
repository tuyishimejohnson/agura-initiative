import './index.css';
import './App.css';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import FooterForm from './components/FooterForm';
import About from './components/About';

function App() {
  return (
    <div>

      < Layout />
      < HomePage />
      < FooterForm />
      < About />
    </div>
  );
}

export default App;
