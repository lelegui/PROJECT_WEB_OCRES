import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Weather from './container/Weather';
import Caldr from './container/Calendar';
import Data from './container/Data';
import Forms from './container/Forms';

export default () => (
    <Switch>
        <Route path="/" exact component={Data} />
        <Route path="/calendar" exact component={Caldr} />
        <Route path="/weather" exact component={Weather} />
        <Route path="/form" exact component={Forms} />
    </Switch>
);
