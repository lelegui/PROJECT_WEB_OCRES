import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Covid from './components/Covid';
import Foot from './components/Foot';
import Formulaire from './components/Formulaire';
import Graph from './components/Graph';
import Images from './components/Images';
import News from './components/News';
import Weather from './container/Weather';

export default () => (
    <Switch>
        <Route path="/Covid" exact component={Covid} />
        <Route path="/Foot" exact component={Foot} />
        <Route path="/Formulaire" exact component={Formulaire} />
        <Route path="/GRaph" exact component={Graph} />
        <Route path="/Images" exact component={Images} />
        <Route path="/News" exact component={News} />
        <Route path="/Weather" exact component={Weather} />
    </Switch>
);
