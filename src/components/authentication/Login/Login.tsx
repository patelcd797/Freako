import React, { useState } from 'react'
import {
  Container,
  LoginFormContainer,
  LoginFormTitle,
  LoginLinkContainer,
  LoginOtherOptionsContainer,
  LoginOtherOptionsSubContainer,
  MainContainer,
  TextContainer,
} from './Login-style'
import Button from '../../../common/Button/Button'
import { A, ErrorStyle, Form, Div } from '../../../common/styles'
import Input from '../../../common/Input/Input'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [state, setState] = useState({ email: '', password: '' })
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    e.preventDefault()
    setState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleForgotPassword = () => history.push('/forgotpassword')
  const handleSignUp = () => history.push('/register')
  const handleSubmit = () => {}

  return (
    <MainContainer>
      <LoginFormContainer>
        <LoginFormTitle>Login</LoginFormTitle>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Input
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter your username/Email"
              onChange={handleInput}
            />
            {error1 && <ErrorStyle>{error1}</ErrorStyle>}
          </Container>
          <Container>
            <Input
              type="password"
              name="password"
              value={state.password}
              placeholder="Password"
              onChange={handleInput}
            />
            {error2 && <ErrorStyle>{error2}</ErrorStyle>}
          </Container>
          <Container>
            <Div>
              <A style={{ color: '#A9A9A9' }} onClick={handleForgotPassword}>
                Forgot Password
              </A>
            </Div>
            <Button width="100%" type="submit" backgroundColor="green">
              Login
            </Button>
          </Container>
        </Form>
        <TextContainer>Or login with</TextContainer>
        <LoginOtherOptionsContainer>
          <LoginOtherOptionsSubContainer>
            Facebook
          </LoginOtherOptionsSubContainer>
          <LoginOtherOptionsSubContainer>Google</LoginOtherOptionsSubContainer>
        </LoginOtherOptionsContainer>
        <LoginLinkContainer>
          Not a member?{' '}
          <A
            style={{ borderBottom: '1px solid #A9A9A9' }}
            onClick={handleSignUp}
          >
            Sign up now
          </A>
        </LoginLinkContainer>
      </LoginFormContainer>
    </MainContainer>
  )
}

export default Login
