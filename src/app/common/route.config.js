// 项目路由配置
export default {
  // 菜单
  menus: [
    { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
    {
      key: '/api/ui',
      title: 'UI',
      icon: 'scan',
      subs: [
        // 子菜单
        { key: '/app/ui/button', title: '按钮', component: 'Buttons' },
        { key: '/app/ui/file', title: 'file', component: 'File' }
      ]
    }
  ],
  // 非菜单项
  others: []
};
