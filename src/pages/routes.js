import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return(
    <Switch>
      <Route
      path='/'
      render={() => <div>You're Logged In!</div>}
      >
      </Route>
    </Switch>
  )
}

export default Routes
