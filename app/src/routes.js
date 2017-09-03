import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UserProfile from './pages/UserProfile/UserProfile'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/user-profile' component={UserProfile}/>
    <Route path='/' component={NotFound}/>
  </Switch>
)
export default Routes