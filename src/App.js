import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes';

function App() {
  return (
    <div className="App">
      <h3>Welcome</h3>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;