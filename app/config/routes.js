const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;
const Main = require('../containers/Main');
const HomeContainer = require('../containers/HomeContainer');
const ForecastContainer = require('../containers/ForecastContainer');
const DetailContainer = require('../containers/DetailContainer');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='/forecast/:location' component={ForecastContainer} />
      <Route path='/detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);

module.exports = routes;


