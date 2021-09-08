import Header from './Components/Header'
import HomePage from './Components/HomePage';
import {BrowserRouter as Router , Switch, Link, Route, Redirect } from 'react-router-dom'
import BreadPage from './Components/BreadPage'
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp';
import AboutPage from './Components/AboutPage';
import CustomerPage from './Components/CustomerPage';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    {/* <div><HomePage /></div> */}
    
    <Switch>
           <Route exact path ="/" children ={<LoginPage />} />
            <Route exact path ="/breadpage" children ={<BreadPage />} />
            <Route exact path ="/cakepage" children ={<BreadPage />} />
            <Route exact path ="/chocolatepage" children ={<BreadPage />} />
            <Route exact path ="/login" children ={<LoginPage />} />
            <Route exact path ="/home" children ={<HomePage />} />
            <Route exact path ="/signup" children ={<SignUp />} />
            <Route exact path ="/about" children ={<AboutPage />} />
            <Route exact path ="/customer" children ={<CustomerPage />} />          
            </Switch>
        
    </div>
   </Router>
  );
}

export default App;
