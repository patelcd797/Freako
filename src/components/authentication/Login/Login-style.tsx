import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #c71585, #0088ff);
  padding: 1.18% 25%;
  @media only screen and (max-width: 1025px) {
    padding: 0;
    width: 100%;
  }
`

export const LoginFormContainer = styled.div`
  border-radius: 1rem;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  @media only screen and (max-width: 1025px) {
    width: 100%;
    height: 85vh;
    border-radius: 0px;
  }
`

export const LoginFormTitle = styled.div`
  text-align: center;
  padding-top: 4vh;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 2rem;
  box-sizing: border-box;
  @media only screen and (max-width: 1025px) {
    width: 100%;
  }
`
export const Container = styled.div`
  display: block;
  padding: 1%;
  margin: 3% 5%;
`

export const TextContainer = styled.p`
  display: block;
  text-align: center;
  color: #a9a9a9;
`

export const LoginOtherOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  margin: 2% 0;
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
  padding-top: 4%;
  padding-bottom: 2%;
  text-align: center;
  color: #a9a9a9;
  font-weight: 500;
`
