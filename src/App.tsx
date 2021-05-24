import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ForgotPassword from './components/authentication/ForgotPassword/ForgotPassword'
import Login from './components/authentication/Login/Login'
import Register from './components/authentication/Registration/Register'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import GlobalStyle from './Global-style'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
