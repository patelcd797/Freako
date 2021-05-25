import styled from 'styled-components'

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

export const LoginFormContainer = styled.div`
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

export const LoginFormTitle = styled.div`
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
    padding-bottom:5%;
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

export const LoginOtherOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  margin: 2% 0;
  @media only screen and (max-width: 300px)  {
    padding: 15%;
  }
`

export const LoginOtherOptionsSubContainer = styled.div`
  display: block;
  width: 45%;
  text-align: center;
  border: solid 1px #a9a9a9;
  padding: 2%;
  font-weight: 600;
  border-radius: 2px;
  box-sizing: border-box;
`

export const LoginLinkContainer = styled.div`
  display: block;
  margin-top: 14%;
  padding: 4% 0;
  text-align: center;
  color: #A9A9A9;
  font-weight: 500;
  @media only screen and (max-width: 1025px) and (min-width: 767px) {
    margin-top: 10%;
  }
`
