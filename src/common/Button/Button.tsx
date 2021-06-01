import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { ButtonContainer, ButtonField } from './Button-style'
interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  color?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  width?: string
  backgroundColor?: string
  float?: string
}

const Button: React.FC<ButtonProps> = ({
  color,
  padding,
  fontSize,
  fontWeight,
  backgroundColor,
  float,
  width,
  children,
  ...restProps
}) => {
  return (
    <ButtonContainer>
      <ButtonField
        color={color}
        padding={padding}
        fontSize={fontSize}
        fontWeight={fontWeight}
        backgroundColor={backgroundColor}
        float={float}
        width={width}
        {...restProps}
      >
        {children}
      </ButtonField>
    </ButtonContainer>
  )
}

export default Button
