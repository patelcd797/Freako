import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import {
  A,
  Container,
  ErrorStyle,
  Form,
  FormContainer,
  FormTitle,
  MainContainer,
  TextContainer,
} from "../../../common/styles";

const ForgotPassword: React.FC = () => {
  const [state, setState] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const history = useHistory();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    e.preventDefault();
    setState(value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:1224/api/user/forgotPassword", {state})
      .then((res) => {
        if (res.data.success) {
          setError1('')
          setError2('')
          history.push("/login");
        }
        else {
          setError1(res.data.msg);
          setError2("");
        }
      })
      .catch((err) => {
        setError1("");
        setError2("something went wrong. Please try after sometime");
      });
  };
  return (
    <MainContainer>
      <FormContainer>
        <FormTitle>Forgot Password</FormTitle>
        <TextContainer
          style={{ padding: "0 7%", textAlign: "left", marginBottom: "20%" }}
        >
          No worries! Just enter your email and we'll send you a reset password
          link
        </TextContainer>
        <Form onSubmit={handleSubmit}>
          {error2 && (
            <Container>
              <ErrorStyle>{error2}</ErrorStyle>
            </Container>
          )}
          <Container>
            <Input
              type="email"
              name="email"
              value={state}
              placeholder="Enter your username/Email"
              onChange={handleInput}
              required
            />
            {error1 && <ErrorStyle>{error1}</ErrorStyle>}
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
            <A href="/login" style={{ color: "#A9A9A9" }}>
              Login
            </A>
          </TextContainer>
        </Container>
      </FormContainer>
    </MainContainer>
  );
};

export default ForgotPassword;
