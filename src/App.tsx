import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ForgotPassword from './components/authentication/ForgotPassword/ForgotPassword'
import Login from './components/authentication/Login/Login'
import Register from './components/authentication/Registration/Register'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import GlobalStyle from './Global-style'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
