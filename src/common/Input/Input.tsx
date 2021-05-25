import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { InputContainer, InputField } from './Input-style'

interface InputProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'ref'> {
  fontSize?: string
  padding?: string
}

const Input: React.FC<InputProps> = ({
  fontSize,
  padding,
  ...restProps
}) => {
  return (
    <InputContainer>
      <InputField fontSize={fontSize} padding={padding} {...restProps} />
    </InputContainer>
  )
}

export default Input
