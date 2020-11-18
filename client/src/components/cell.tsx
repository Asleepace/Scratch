import React from 'react'
import { View, Input } from 'components'

interface RawValues {

}

export interface CellProps {

}

export interface CellState {
  isEditing: boolean,
  tickerName: string,
  boughtPrice: string,
  soldPrice: string,
  diffPrice: string,
}

export class Cell extends React.Component<CellProps, CellState> {

  constructor(props: CellProps) {
    super(props)
    this.state = {
      isEditing: false,
      tickerName: "",
      boughtPrice: "",
      soldPrice: "",
      diffPrice: ""
    }
  }

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ tickerName: event.target.value.toUpperCase(), isEditing: true })
  }

  onChangeBuys = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ boughtPrice: event.target.value, isEditing: true })
  }

  onChnageSell = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ soldPrice: event.target.value, isEditing: true })
  }

  getDifference = (): string => {
    const { boughtPrice, soldPrice } = this.state

    const bought = parseFloat(boughtPrice.trim().replace("$", ""))
    const sold = parseFloat(soldPrice.trim().replace("$", ""))
    const diff = (bought - sold).toFixed(2)

    return `$${diff}`
  }

  onBlur = () => {
    this.setState({ isEditing: false })
  }

  format = (value: string) => {
    if (this.state.isEditing || !value) return ''
    return this.state.isEditing && value ? '' : `$${parseFloat(value.replace("$", "")).toFixed(2)}`
  }

  render() {
    return (
      <View className={'cell-container'}>
        <Input onChange={this.onChangeName} onBlur={this.onBlur} />
        <Input onChange={this.onChangeBuys} onBlur={this.onBlur} className={'red-text'} />
        <Input onChange={this.onChnageSell} onBlur={this.onBlur} className={'green-text'} />
        <Input value={this.getDifference()} />
      </View>
    )
  }
}