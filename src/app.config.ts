export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的'
      },
    ]
  },
  usingComponents: {
    'custom-wrapper': '/custom-wrapper'
  }
})
