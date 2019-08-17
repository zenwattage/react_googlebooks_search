import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import NoResults from "./pages/NoResults";
import './App.css';

function App() {
  return (
    //router
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ SearchBooks } />
          <Route exact path="/saved" component={ SavedBooks } />
          <Route exact path="/saved/:id" component={ SavedBooks } />          
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
