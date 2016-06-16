import { Router, Route, hashHistory } from 'react-router'

default export route = render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))