import { combineReducers } from '@reduxjs/toolkit'
import { stockReducer } from './stocks'

export const rootReducer = combineReducers({
  stocks: stockReducer
})

