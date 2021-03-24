import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Offer from '../offer/offer';

const App = ({placesCount}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen
            placesCount={placesCount}
          />
        </Route>
        <Route path="/login" exact component={Login}/>
        <Route path="/favorites" exact component={Favorites}/>
        <Route path="/offer/:id" exact component={Offer}/>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
