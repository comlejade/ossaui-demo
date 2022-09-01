import { OsTabbar } from 'ossaui'

export default () => {

  return (
    <OsTabbar
      tabsArr={[
        {
          icon: 'home',
          selectedIcon: 'home-pressed',
          text: '首页'
        },
        {
          icon: 'user',
          selectedIcon: 'user-pressed',
          text: '我的'
        },
      ]}

    />
  )
}
