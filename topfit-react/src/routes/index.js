import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
// import About from '../pages/About'

export default () => (
  <Switch>
  <Route exact path="/" component={Login} />
   <Route exact path="/home" component={Home} />
  <Route exact path="/signup" component={Signup} />
 {/* <Route exact path="/projects" component={Project} />
  <Route exact path="/posts" component={Post} /> */}
</Switch>
)