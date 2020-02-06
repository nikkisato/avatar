import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/header/Header';
import CharacterList from '../components/characterList/CharacterList';
import CharacterDetail from '../components/characterDetail/CharacterDetail';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={CharacterList} />
          <Route exact path='/character/:id' component={CharacterDetail} />

        </Switch>
      </Router>
    </>
  );
}
