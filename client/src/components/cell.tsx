import React from 'react'
import { updateStock, deleteStock } from 'redux/actions'
import { View, Input, Text } from 'components'
import { Stock } from '../interfaces'
import { connect } from 'react-redux'

export interface CellProps {
  stock: Stock,
  updateStock: typeof updateStock,
  deleteStock: typeof deleteStock,
}

export interface CellState {
  isEditing: boolean,
  tickerName?: string,
  boughtPrice?: number,
  soldPrice?: number,
  diffPrice?: number,
}

class Cell extends React.Component<CellProps, CellState> {

  constructor(props: CellProps) {
    super(props)
    this.state = {
      isEditing: false,
    }
  }

  numeric = (text: string): number => {
    return parseFloat(text.trim().replace("$", ""))
  }

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tickerName: event.target.value.toUpperCase(), isEditing: true })
  }

  onChangeBuys = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ boughtPrice: this.numeric(event.target.value), isEditing: true })
  }

  onChnageSell = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ soldPrice: this.numeric(event.target.value), isEditing: true }, this.getDifference)
  }

  getDifference = () => {
    const { boughtPrice, soldPrice } = this.state
    if (boughtPrice && soldPrice) {
      const diffPrice = +(Math.abs(soldPrice - boughtPrice)).toFixed(2)
      this.setState({ diffPrice }, this.update)
    }
  }

  update = () => {
    const { tickerName, boughtPrice, soldPrice, diffPrice } = this.state
    this.props.updateStock({
      name: tickerName,
      paid: boughtPrice,
      sold: soldPrice,
      diff: diffPrice,
      id: this.props.stock.id
    })
  }

  onBlur = () => {
    this.setState({ isEditing: false })
  }

  value = (value: any) => {
    return (this.state.isEditing || !value) ? undefined : value
  }

  format = (data?: number, prepend: string = ""): string | undefined => {
    const value = this.value(data)
    if (value) {
      return `${prepend}$${value.toFixed(2)}`
    }
    return undefined
  }

  render() {
    const { tickerName, boughtPrice, soldPrice, diffPrice } = this.state
    const color = diffPrice && diffPrice < 0 ? 'red-text' : 'green-text'
    const signs = diffPrice && diffPrice < 0 ? '- ' : '+ '
    return (
      <View className={'cell-container'}>
        <Input value={this.value(tickerName?.toUpperCase())} onChange={this.onChangeName} onBlur={this.onBlur} />
        <Input value={this.format(boughtPrice)} onChange={this.onChangeBuys} onBlur={this.onBlur} className={'blue-text'} />
        <Input value={this.format(soldPrice)} onChange={this.onChnageSell} onBlur={this.onBlur} className={'green-text'} />
        <Input value={this.format(diffPrice, signs)} className={color} />
      </View>
    )
  }
}

export default connect(null, { updateStock, deleteStock })(Cell)