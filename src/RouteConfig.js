import React,{Component} from 'react';
import {Router,Route,IndexRoute,hashHistory,browserHistory,Redirect} from 'react-router';



import App from './components/App'
import Home from './components/Home'
import Detailed from './components/Detailed'
import Login from './components/Login'
import Reg from './components/Reg'
import Error from './components/Error'
const RouterConfig=()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="reg" component={Reg}/>
      <Route path="detailed" component={Detailed}>
        <IndexRoute component={Detailed}/>
        <Route path=":aid" component={Detailed}/>
      </Route>

      <Route path="*" component={Error}/>
    </Route>
  </Router>
);

export default RouterConfig;