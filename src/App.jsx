import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PlaylistDetail from './pages/PlaylistDetail';
import LibraryDetail from './pages/LibraryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlist/:id" component={PlaylistDetail} />
        <Route path="/library" component={LibraryDetail} />
      </Switch>
    </Router>
  );
}

export default App;
