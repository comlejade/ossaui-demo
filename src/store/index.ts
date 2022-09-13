import { configureStore } from '@reduxjs/toolkit'
import tabSwitchSlice from './tabSwitchSlice'

const store = configureStore({
  reducer: {
    tabSwitch: tabSwitchSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
