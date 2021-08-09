const { path } = require('@vuepress/utils')
module.exports = {
  base: '/andyDoc/',
  lang: 'zh-CN',
  title: '晨龙 BSERP 操作文档',
  description: '晨龙 BSERP 操作文档',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/logo.png',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    next: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prev: false,
    // navbar: [
    //   // NavbarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //   },
    //   // NavbarGroup
    //   {
    //     text: 'Group',
    //     children: ['/group/foo.md', '/group/bar.md'],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar:{
      '/': [
        {
          text: '晨龙BSERP-操作说明',
          children: [
            '/zh/tools.md', // 使用工具
            '/zh/functionList.md', // 功能列表
            '/zh/basicOperation/README.md', // 基本操作
            '/zh/systemSetting/README.md',// 系统设置
            //'/zh/Bas/README.md', // 基础资料
            {
              text: '基础资料',
              children: [
                '/zh/Bas/modules/dept.md', // 部门
                '/zh/Bas/modules/postition.md', // 职位
                '/zh/Bas/modules/basicTeam.md', // 班别
                '/zh/Bas/modules/worker.md', // 人员资料
              ],
            },
            '/zh/salesManage/README.md',// 销售管理
            '/zh/purchaseManage/README.md',// 采购管理
            '/zh/paperManage/README.md',// 原纸管理
            '/zh/prodManage/README.md',// 辅料管理
            '/zh/repertoryManage/README.md',// 储运管理
            '/zh/financeManage/README.md',// 财务管理
            '/zh/productionManage/README.md',// 生产管理 
            '/zh/statisticalReports/README.md',// 报表管理
            '/zh/platformSettings/README.md',// 平台设置
            '/zh/other/README.md',// 其它
        ],
        },
      ],
      // '/reference/': [
      //   {
      //     text: 'Reference',
      //     children: ['/reference/cli.md', '/reference/config.md'],
      //   },
      // ],
    },
     // custom containers
     tip: '提示',
     warning: '注意',
     danger: '警告',

     // 404 page
     notFound: [
       '这里什么都没有',
       '我们怎么到这来了？',
       '这是一个 404 页面',
       '看起来我们进入了错误的链接',
     ],
     backToHome: '返回首页',

     // a11y
     openInNewWindow: '在新窗口打开',
     toggleDarkMode: '切换夜间模式',
  },
 
  plugins: [
    // ['@vuepress/plugin-search', {
    //   searchMaxSuggestions: 10
    // }]
  ],

}