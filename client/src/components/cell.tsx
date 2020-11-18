import React from 'react'
import { View, Input } from 'components'

export class Cell extends React.Component {

  render() {
    return (
      <View className={'cell-container'}>
        <Input />
        <Input />
        <Input />
        <Input />
      </View>
    )
  }
}