import axios from "axios";
import React, { useState } from "react";
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import {
  A,
  Container,
  ErrorStyle,
  FormContainer,
  FormTitle,
  MainContainer,
  TextContainer,
  Form,
} from "../../../common/styles";
import { NameContainer } from "./Register-styles";
import { useHistory } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register: React.FC = () => {
  const [state, setState] = useState(initialValues);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const history = useHistory();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(state.password);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var f2 = 1,
      f3 = 1;
    if (state.password.length < 6) {
      setError2("password must contain lower case, upper case and digits");
      f2 = 0;
    } else {
      setError2("");
      f2 = 1;
    }
    if (state.password !== state.confirmPassword) {
      setError3("password and confirm password must be same");
      f2 = 0;
    } else {
      setError3("");
      f3 = 1;
    }
    if (f2 && f3) {
      
      await axios
        .post("http://localhost:1224/api/user/register", state)
        .then((response) => {
          const data = response.data;
          if (data.success) history.push("/login");
          else setError1(data.msg);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

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
                placeholder="First Name"
                value={state.firstName}
                onChange={handleInput}
                required
              />
            </Container>
            <Container>
              <Input
                type="text"
                name="lastName"
                padding="8%"
                placeholder="Last Name"
                value={state.lastName}
                onChange={handleInput}
                required
              />
            </Container>
          </NameContainer>

          <Container>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleInput}
              required
            />
            {error1 && <ErrorStyle>{error1}</ErrorStyle>}
          </Container>
          <Container>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleInput}
            />
            {error2 && <ErrorStyle>{error2}</ErrorStyle>}
          </Container>
          <Container>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={state.confirmPassword}
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
            <A href="/login" style={{ color: "#A9A9A9" }}>
              Sign in
            </A>
          </TextContainer>
        </Form>
      </FormContainer>
    </MainContainer>
  );
};

export default Register;
