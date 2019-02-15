import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

import Menu from './Menu/Menu';
import Calendrier from './Calendrier/Calendrier';
import Programme from './Programme/Programme';
import NoMatch from './NoMatch';

ReactDOM.render(
    <Router>
        <div>
            <Main />

            <Switch>
                <Route exact path="/" component={Menu} />
                <Route path="/calendrier" component={Calendrier} />
                <Route path="/programme" component={Programme} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
