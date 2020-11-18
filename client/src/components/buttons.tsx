import React from 'react'
import { View } from './view'

export interface ButtonProps {
  text?: string,
  onClick?: Function
}

export const Button: React.FC<ButtonProps> = (props) => {

  return (
    <View className={'button-container'} onClick={() => props?.onClick?.()}>
      { props.text}
      { props.children}
    </View>
  )
}