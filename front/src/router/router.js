import { Router, Route, hashHistory } from 'react-router';


export default render((
  <Router history={hashHistory}>
    <Route path="/" component="{App}" />
  </Router>
), document.getElementById('app'))