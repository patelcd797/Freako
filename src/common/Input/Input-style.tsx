import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`

interface InputFieldProps {
  padding?: string
  fontSize?: string
}

export const InputField = styled.input<InputFieldProps>`
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : '4%')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  background-color: #d3d3d3;
  border: none;
  outline: none;
  box-sizing: border-box;
  @media only screen and (max-width: 1025px) and (min-width: 767px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '2rem')};
  }
`
