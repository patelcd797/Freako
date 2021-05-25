import React, { useState } from 'react'
import Button from '../../../common/Button/Button'
import Input from '../../../common/Input/Input'
import {
  A,
  Container,
  ErrorStyle,
  Form,
  FormContainer,
  FormTitle,
  MainContainer,
  TextContainer,
} from '../../../common/styles'

const ForgotPassword: React.FC = () => {
  const [state, setState] = useState('')
  const [error, setError] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    e.preventDefault()
    setState(value)
  }
  const handleSubmit = () => {}
  return (
    <MainContainer>
      <FormContainer>
        <FormTitle>Forgot Password</FormTitle>
        <TextContainer
          style={{ padding: '0 7%', textAlign: 'left', marginBottom: '20%' }}
        >
          No worries! Just enter your email and we'll send you a reset password
          link
        </TextContainer>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Input
              type="email"
              name="email"
              value={state}
              placeholder="Enter your username/Email"
              onChange={handleInput}
            />
            {error && <ErrorStyle>{error}</ErrorStyle>}
          </Container>
          <Container>
            <Button width="100%" type="submit" backgroundColor="#1FEAF1">
              SEND RECOVERY EMAIL
            </Button>
          </Container>
        </Form>
        <Container>
          <TextContainer>
            Just remembered?
            <A href="/login" style={{ color: '#A9A9A9' }}>
              Login
            </A>
          </TextContainer>
        </Container>
      </FormContainer>
    </MainContainer>
  )
}

export default ForgotPassword
