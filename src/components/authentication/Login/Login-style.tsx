import styled from 'styled-components'

export const LoginOtherOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  margin: 2% 0;
  @media only screen and (max-width: 300px) {
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
  color: #a9a9a9;
  font-weight: 500;
  @media only screen and (max-width: 1025px) and (min-width: 767px) {
    margin-top: 10%;
  }
`
