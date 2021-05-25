import React, { useEffect, useState } from 'react'
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
import { NameContainer } from './Register-styles'

const InitialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Style = {
  padding: '8%',
  '@media (max-width: 783px)': { padding: '4%' }
}

const Register: React.FC = () => {
  const [state, setState] = useState(InitialFormValues)
  const [error1, seterror1] = useState('')
  const [error2, seterror2] = useState('')
  const [error3, seterror3] = useState('')
  

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
        <FormTitle>Register</FormTitle>
        <Form onSubmit={handleSubmit}>
            
          <NameContainer>
            <Container>
              <Input
                type="text"
                name="firstName"
                padding="8%"
                value={state.firstName}
                placeholder="First Name"
                onChange={handleInput}
              />
              </Container>
            <Container>
              <Input
                type="text"
                name="lastName"
                padding= "8%"
                value={state.lastName}
                placeholder="Last Name"
                onChange={handleInput}
              />
        </Container>
          </NameContainer>
          
          <Container>
            <Input
              type="email"
              name="email"
              value={state.email}
              placeholder="Email"
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
            <Input
              type="password"
              name="confirmPassword"
              value={state.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleInput}
            />
            {error3 && <ErrorStyle>{error3}</ErrorStyle>}
          </Container>
          <Container>
            <Button width="100%" type="submit" backgroundColor="green">
              Register Now
            </Button>
          </Container>
          <TextContainer>
            Already have an account?
            <A href="/login" style={{ color: '#A9A9A9' }}>
              Sign in
            </A>
          </TextContainer>
        </Form>
      </FormContainer>
    </MainContainer>
  )
}

export default Register
