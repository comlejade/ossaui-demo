import { createSlice } from '@reduxjs/toolkit'
import Taro from '@tarojs/taro'

const initialState = {
  active: 0
}

const tabSwitchSLice = createSlice({
  name: 'tabSwitch',
  initialState,
  reducers: {
    changeTab(_, { payload }) {
      Taro.switchTab({
        url: payload
      })
    },
    setActive(state, { payload }) {
      state.active = payload
    }
  }
})

export const { changeTab, setActive } = tabSwitchSLice.actions

export default tabSwitchSLice.reducer
