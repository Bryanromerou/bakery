import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './config/routes';
import background from './images/pattern.png';
import Footer from './components/Footer';


function App() {
  return (
    <Router >
      <img className ="site-background" src={background}/>
      <Navbar/>
      {routes}
      <Footer/>
    </Router>
  );
}

export default App;
