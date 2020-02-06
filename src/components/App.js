import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/header/Header';
import CharacterList from '../components/characterList/CharacterList';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={CharacterList} />
        </Switch>
      </Router>
    </>
  );
}
