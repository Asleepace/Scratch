import { combineReducers } from '@reduxjs/toolkit'
import { stockReducer } from './stocks'

export const rootReducer = combineReducers({
  stocks: stockReducer
})

export type RootState = ReturnType<typeof rootReducer>