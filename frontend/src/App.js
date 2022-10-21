import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import SearchandIcons from './components/SearchandIcons';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SearchandIcons/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Navbar/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
