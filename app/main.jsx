import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import Countdown from 'Countdown'
import Timer from 'Timer'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

require('style!css!foundation-sites/dist/foundation.min.css')
//$(document).foundation();

require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='countdown' component={Countdown}></Route>
      <Route path='timer' component={Timer}></Route>
    </Route>
  </Router>,
    document.getElementById('app')
);
