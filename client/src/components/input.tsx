import React from 'react'
import { InputProps } from '../interfaces'

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (<input {...props} />)
} 