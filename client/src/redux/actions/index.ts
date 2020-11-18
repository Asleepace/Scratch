import { Stock } from '../../interfaces'

// exported action types

export const CREATE_STOCK = 'CREATE_STOCK'
export const DELETE_STOCK = 'DELETE_STOCK'
export const UPDATE_STOCK = 'UPDATE_STOCK'

interface CreateStockAction {
  type: typeof CREATE_STOCK,
  payload: Stock
}

interface UpdateStockAction {
  type: typeof UPDATE_STOCK,
  payload: Stock
}

interface DeleteStockAction {
  type: typeof DELETE_STOCK,
  payload: Stock
}

export type StockActionTypes = CreateStockAction | UpdateStockAction | DeleteStockAction

// internal stock id counter
let currentStockId = 0

// exported redux actions with types
export const createStock = (payload: Stock): CreateStockAction => ({
  type: CREATE_STOCK, payload: { ...payload, id: currentStockId++ }
})

export const updateStock = (payload: Stock): UpdateStockAction => ({
  type: UPDATE_STOCK, payload
})

export const deleteStock = (payload: Stock): DeleteStockAction => ({
  type: DELETE_STOCK, payload
})