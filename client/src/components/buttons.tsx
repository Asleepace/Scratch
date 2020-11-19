import React from 'react'
import { View } from './view'

export interface ButtonProps {
  text?: string,
  onClick?: Function,
  color?: string
}

export const Button: React.FC<ButtonProps> = (props) => {

  return (
    <View className={`button-container ${props.color || ""}`} onClick={() => props?.onClick?.()}>
      { props.text}
      { props.children}
    </View>
  )
}