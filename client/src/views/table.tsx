import React from 'react'
import { View } from 'components'
import Cell from '../components/cell'
import { createStock, updateStock, deleteStock } from 'redux/actions'
import { RootState, Stock } from 'interfaces'
import { connect } from 'react-redux'
import { Button } from '../components/buttons'

import CreateIcon from '@material-ui/icons/Receipt';



export interface TableProps {
  store: {
    stocks: Stock[]
  },
  createStock: typeof createStock,
}

export interface TableState {

}

class Table extends React.Component<TableProps, TableState> {

  constructor(props: TableProps) {
    super(props)
    console.log('[Table] construnctor:', { props })
    this.state = {
      data: []
    }
  }

  renderCells = () => {
    return this.props.store?.stocks?.map?.(stock => <Cell stock={stock} key={stock.id} />) || undefined
  }

  createStock = () => {
    this.props.createStock()
  }

  getSum = () => {
    let sum = 0
    for (let stock of this.props.store.stocks) {
      console.log({ stock })
      sum += stock.diff || 0
    }
    return sum
  }

  render() {
    const sum = this.getSum()
    const negative = sum < 0
    const total = negative ? `- $${Math.abs(sum)}` : `${sum}`
    const color = negative ? 'color-red' : 'color-green'

    return (
      <View className='table-container'>
        <View className={'table-header'}>
          <Button text={"CREATE"} onClick={this.createStock} color={"color-blue"} />
          <Button text={total} color={color} />
        </View>
        { this.renderCells()}
      </View >
    )
  }
}

// mapping the global app store to this component

const mapStateToProps = (store: RootState) => {
  return { store: store.stocks }
}

const mapDispatchToProps = { createStock }

export default connect(mapStateToProps, mapDispatchToProps)(Table)