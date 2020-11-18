import { stat } from 'fs'
import { Stock } from '../../interfaces'
import { CREATE_STOCK, UPDATE_STOCK, DELETE_STOCK, StockActionTypes } from '../actions'

export interface State {
  stocks: Stock[]
}

const initialState: State = {
  stocks: []
}

export function stockReducer(state = initialState, action: StockActionTypes) {
  const { payload } = action
  switch (action.type) {
    case CREATE_STOCK: {
      return {
        ...state,
        stocks: state.stocks.push(payload)
      }
    }
    case UPDATE_STOCK: {
      return {
        ...state,
        stocks: state.stocks.map(stock => stock.id === payload.id ? payload : stock)
      }
    }
    case DELETE_STOCK: {
      return {
        ...state,
        stocks: state.stocks.filter(stock => stock.id !== payload.id)
      }
    }
    default:
      return state
  }
}