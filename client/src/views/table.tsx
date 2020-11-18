import React from 'react'
import { View } from 'components'
import { Cell, CellProps } from '../components/cell'
import { createStock, updateStock, deleteStock } from 'redux/actions'
import { RootState } from 'interfaces'
import { connect } from 'react-redux'


export interface TableProps {
  stocks: CellProps[]
}

export interface TableState {

}

class Table extends React.Component<TableProps, TableState> {

  constructor(props: TableProps) {
    super(props)
    this.state = {
      data: []
    }
  }

  renderCells = () => {
    return this.props.stocks.map((stock, idx) => <Cell {...stock} key={idx} />)
  }

  render() {
    return (
      <View className='table-container'>
        { this.renderCells()}
      </View>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = { createStock, updateStock, deleteStock }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)