import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PLACES_COUNT = 312;

ReactDOM.render(
    <App
      placesCount = {PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
