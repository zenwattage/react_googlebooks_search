import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import Nav from "./components/Nav";
import NoResults from "./pages/NoResults";
import './App.css';

function App() {
  return (
    //router
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ SearchInput } />
          <Route component={ NoResults } />
        </Switch>
      </div>
    </Router>
    //exact paths
    // saved
    // saved/:id 
  );
}

export default App;
