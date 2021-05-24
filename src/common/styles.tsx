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
  margin-bottom: 2%;
`