import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: solid 1px black;
`

interface InputFieldProps {
  padding?: string
  fontSize?: string
}
export const InputField = styled.input<InputFieldProps>`
  padding: ${({ padding }) => padding ? padding : '1%'};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '0.5rem'};
  outline: none;
  border: none;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`
