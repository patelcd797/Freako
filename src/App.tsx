import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './components/authentication/Login/Login'
import GlobalStyle from './Global-style'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  )
}

export default App
