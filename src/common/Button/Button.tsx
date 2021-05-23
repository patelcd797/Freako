import React from 'react'
import { ButtonContainer, ButtonField } from './Button-style'

interface ButtonProps {
  color?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  width?: string
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({
  color,
  padding,
  fontSize,
  fontWeight,
  backgroundColor,
}) => {
  return (
    <ButtonContainer>
      <ButtonField
        color={color}
        padding={padding}
        fontSize={fontSize}
        fontWeight={fontWeight}
        backgroundColor={backgroundColor}
      >
        Button
      </ButtonField>
    </ButtonContainer>
  )
}

export default Button
