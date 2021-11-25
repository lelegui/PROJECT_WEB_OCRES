import React from 'react';


import { storiesOf } from '@storybook/react';
import App from './App';
import Weather from './components/Weather';
import Covid from './components/Covid';
import News from './components/News';
import Foot from './components/Foot';
 
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
  .add('news' , () => <News/>)
  .add('covid' , () => <Covid/> )
  .add('foot' , () => <Foot/>)

  serviceWorker.unregister();

