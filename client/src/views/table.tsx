import React from 'react'
import { View } from 'components'
import { Cell, CellProps } from '../components/cell'

export interface TableProps {

}

export interface TableState {
  data: CellProps[]
}

export class Table extends React.Component<TableProps, TableState> {

  constructor(props: TableProps) {
    super(props)
    this.state = {
      data: [{}, {}, {}]
    }
  }

  renderCells = () => {
    return this.state.data.map((data) => <Cell {...data} />)
  }

  render() {
    return (
      <View className='table-container'>
        { this.renderCells()}
      </View>
    )
  }

}