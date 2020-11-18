import React from 'react'
import { View, Input } from 'components'

export interface CellProps {

}

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