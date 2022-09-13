
import { useCallback } from 'react';
import { View } from '@tarojs/components'
import { OsIcon, OsTabBar } from 'ossaui'
import 'ossaui/dist/style/components/tabbar.scss';
import 'ossaui/dist/style/components/icon.scss';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeTab, setActive } from '../store/tabSwitchSlice';
import styles from './custom.module.scss'

const TAB_BAR_DATA = [
  {
    index: 0,
    icon: 'home',
    selectedIcon: 'home-pressed',
    text: '首页',
    pagePath: '/pages/index/index'
  },
  {
    index: 1,
    icon: 'subject',
    selectedIcon: 'subject-pressed',
    text: '分类',
    pagePath: '/pages/classify/index'
  },
  {
    index: 2,
    icon: 'cart',
    selectedIcon: 'cart-pressed',
    text: '购物车',
    pagePath: '/pages/cart/index'
  },
  {
    index: 3,
    icon: 'user',
    selectedIcon: 'user-pressed',
    text: '我的',
    pagePath: '/pages/user/index'
  }
]

export default () => {

  const { tabSwitch } = useAppSelector(state => state)
  const { active } = tabSwitch
  const dispatch = useAppDispatch()

  const onChange = useCallback((item) => {
    if (active == item.index) return;
    dispatch(changeTab(item.pagePath))
    dispatch(setActive(item.index))
  }, [dispatch, active])

  return <View className={styles.container}>
    <OsTabBar
      tabsArr={TAB_BAR_DATA}
      value={active}
      onClick={onChange}
    />
    {/* <View className='ossa-tabbar'>
      {
        TAB_BAR_DATA.map(tab => (
          <View className='ossa-tabbar__item' style={{color: tab.index === active ? '#DD1A21' : '#7f7f7f'}} key={tab.index} onClick={() => onChange(tab)}>
            {
              tab.index === active
              ? <OsIcon type={tab.selectedIcon} />
              : <OsIcon type={tab.icon} />
            }
            <View className='ossa-tabbar__txt'>{tab.text}</View>
          </View>
        ))
      }
    </View> */}
  </View>
}
