import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import LiveChat from '../components/liveChat';

function Routes() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={LiveChat} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default Routes;
