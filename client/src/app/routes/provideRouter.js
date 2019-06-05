// 私有路由表

export const sildeData = [
  {
    key: 'group0',
    title: {
      icon: 'dashboard',
      text: '数据分析'
    },
    children: [
      {
        key: '1',
        text: '数据监控',
        path: '/dashboard/monitor'
      },{
        key: '2',
        text: '数据分析',
        path: '/dashboard/analyze'
      }
    ]
  }, {
    key: 'group1',
    title: {
      icon: 'play-circle',
      text: '今日天气'
    },
    children: [
      {
        key: '1',
        text: '上海',
        path: '/video/Shanghai'
      },{
        key: '2',
        text: '西安',
        path: '/video/Xian'
      }
    ]
  }
]

export const groupKey = sildeData.map(item => item.key)
