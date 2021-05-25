import React, { useState } from 'react'
import {
  LoginLinkContainer,
  LoginOtherOptionsContainer,
  LoginOtherOptionsSubContainer
} from './Login-style'
import Button from '../../../common/Button/Button'
import {
  A,
  ErrorStyle,
  Form,
  Div,
  MainContainer,
  FormContainer,
  Container,
  FormTitle,
  TextContainer,
} from '../../../common/styles'
import Input from '../../../common/Input/Input'

const Login = () => {
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

  const handleSubmit = () => {}

  return (
    <MainContainer>
      <FormContainer>
        <FormTitle>Login</FormTitle>
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
              <A style={{ color: '#A9A9A9' }} href="/forgotpassword">
                forgot password
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
          Not a member?
          <A href="/register" style={{ color: '#A9A9A9' }}>
            {' '}
            Sign up now
          </A>
        </LoginLinkContainer>
      </FormContainer>
    </MainContainer>
  )
}

export default Login
