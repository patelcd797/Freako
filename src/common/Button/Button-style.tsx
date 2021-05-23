import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
`

interface ButtonFieldProps {
  color?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  backgroundColor?: string
}

export const ButtonField = styled.button<ButtonFieldProps>`
  padding: ${({ padding }) => (padding ? padding : '1%')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  color: ${({ color }) => (color ? color : '#000000')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#FFD742'};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  border: none;
  outline: none;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    filter: brightness(105%);
  }
`
