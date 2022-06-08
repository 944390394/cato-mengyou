const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    plugins: [
        //搜索插件
        searchPlugin({
          locales: {
            '/zh': {
                // 中文[搜索框里的东西]
              placeholder: '搜索',
            },
            '/en/': {
              placeholder: 'Search',
            },
          },
        }),
      ],
    title: "Cato 用户手册",
    darkMode: "true",
    logo: "/logo.png",
    head: [
        ["link", {rel: "icon", href: "/logo.png"}]
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN',
          title: 'Cato 用户手册',
        },
        '/en/': {
          lang: 'en-US',
          title: 'Cato Manual',
        },
      },
      //以下是主题配置
    theme: defaultTheme({
        repo: '944390394/cato-mengyou',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinks: 'true',
        lastUpdated: 'true',
        //侧边栏LOGO
        logo: "/logo.png",    
        //语言选择
        locales: {
          '/': {
            navbar: [
                {
                  "text": "Cato",
                  "link": "/"
                },
                {
                  "text": "社区(未编写)",
                  "link": "/mcer/"
                },
                {
                  "text": "启动器专区",
                  "link": "/starter/"
                }
              ],
              sidebar: {
                "/mcer/": [
                  "/mcer/setup"
                ],
                "/starter/": [
                  "/starter/hmcl",
                  "/starter/hmcldeFAQ",
                  "/starter/PCL2",
                  "/starter/Pcl2deFAQ",
                  "/starter/baogaowenti"
                ],
                "/": [
                  "/setup",
                  {
                    text: 'Cato的若干问题的解释及公告',
                    collapsible: true,
                    children: [
                      "/zh/tiwen/preface",
                      "/zh/tiwen/cost",
                      "/zh/tiwen/Postscript",
                      "/zh/tiwen/Classicalproblems",
                    ],
                  },
                  "/shiyong",
                  "/jiaochen",
                  "/Token",
                  "/jiedian",
                  "/tiwen",
                  "/changjian"
                ]
              },
            selectLanguageName: '简体中文',
            selectLanguageText: "选择语言",
            editLinkText: '帮助我们完善这个页面',
            lastUpdated: '最后更新',
            docsDir: 'docs',
            contributorsText: '贡献者',
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
            toggleSidebar: '切换侧边栏',
          },
          '/en/': {
            selectLanguageName: 'English',
            selectLanguageText: "Languages",
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
            navbar: [
                {
                  "text": "Cato",
                  "link": "/en/"
                },
                {
                  "text": "Community (unprepared)",
                  "link": "/en/Community/"
                },
                {
                  "text": "Launcher zone",
                  "link": "/en/Launcher/"
                }
              ],
              sidebar: {
                "/en/": [
                  "/en/setup"
                ],
                "/en/Community/": [
                  "/en/Community/setup"
                ],
                "/en/Launcher/": [
                  "/en/Launcher/setup"
                ]
              }            
          },
        },
    }),
}