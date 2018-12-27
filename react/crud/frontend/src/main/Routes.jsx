import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import UserCrudV2 from '../components/user/UserCrudV2';

export default props => {
    return <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Route path="/api/users" component={UserCrudV2}/>
        <Redirect from='*' to='/' />
    </Switch>
}