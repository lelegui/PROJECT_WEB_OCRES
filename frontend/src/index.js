import React from 'react';


import { storiesOf } from '@storybook/react';
import App from './App';
import Weather from './components/Weather';
 
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

  storiesOf('App', module).add('La Base', () => 
  <App />
  ) ;

  storiesOf('Music', module)
  .add('weather', () => <Weather/> )

  serviceWorker.unregister();

