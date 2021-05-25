import styled from 'styled-components'

export const A = styled.a`
  height: 2%;
  margin: 3% 0;
  box-sizing: border-box;
  &: hover {
    cursor: default;
  }
`
export const H1 = styled.div`
  text-transform: uppercase;
  padding: 1% 0;
  box-sizing: border-box;
`

export const Label = styled.label`
  width: 100%;
  font-size: 1rem;
  display: block;
  padding: 1% 0;
  box-sizing: border-box;
`

export const ErrorStyle = styled.div`
  color: red;
  font-weight: 500;
  margin-top: -0.8em;
  box-sizing: border-box;
`

export const Form = styled.form`
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  box-sizing: border-box;
`

export const Div = styled.div`
  display: block;
  float: right;
  margin: 4% 0;
`
export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #c71585, #0088ff);
  padding: 3% 35%;
  @media only screen and (max-width: 1025px) {
    padding: 0;
    width: 100%;
  }
`
export const FormContainer = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  @media only screen and (max-width: 1025px) {
    width: 100%;
    min-height: 100vh;
  }
  @media only screen and (max-width: 1025px) and (min-width: 767px) {
    font-size: 2rem;
  }
`

export const FormTitle = styled.div`
  text-align: center;
  padding-top: 15%;
  padding-bottom: 7%;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2rem;
  box-sizing: border-box;
  @media only screen and (max-width: 1025px) {
    width: 100%;
  }
  @media only screen and (max-width: 1025px) and (min-width: 767px) {
    padding-top: 10%;
    padding-bottom: 5%;
    font-size: 3rem;
  }
`

export const Container = styled.div`
  display: block;
  padding: 1%;
  margin: 3% 5%;
`
export const TextContainer = styled.p`
  display: block;
  padding: 4%;
  text-align: center;
  color: #a9a9a9;
`
