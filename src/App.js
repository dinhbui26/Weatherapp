import './App.css';
import City from './components/City';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import AppWeather from './components/AppWeather';
import Home from './components/Home';
import { MenuItem } from '@mui/material';
// import Weather from './components/Weather';
// import  { Dimmer, Loader } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to ="/" style={{ textDecoration: 'none' }}>
        <MenuItem style={{ paddingBottom: 13 }}>Home</MenuItem>
        </Link>

        <Link to="/city" style={{ textDecoration: 'none' }}>
        <MenuItem style={{ paddingBottom: 13 }}>City</MenuItem>
        </Link>

        <Link to="/Weather" style={{ textDecoration: 'none' }}>
        <MenuItem style={{ paddingRight: 13 }}>Current Location</MenuItem>
        </Link>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/city" component={City}/>
          <Route path="/Weather" component={AppWeather}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
