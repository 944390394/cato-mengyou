# HMCL常见问题

# **必读**

- 本文档将定时收集HMCL 多人联机常见问题与回答，若你在这里没有发现你想要的回答，欢迎前往[此视频](https://www.bilibili.com/video/BV1g3411Y7rC)下的评论区进行提问，我会定期前往回答，然后将问题上传至此，也欢迎加入[QQ群：212927890](https://jq.qq.com/?_wv=1027&k=N4mHT9FD)进行问题讨论！
- 你可以使用`Ctrl+f`来方便查找你的答案

::: tip 提示
 **在阅读本文章前，请先确认 HMCL 版本是否为 <img src="https://img.shields.io/maven-central/v/org.glavo.hmcl/hmcl-dev?label=开发版" style="zoom: 130%;" />，若不是，请在 [此处](https://gitee.com/Glavo/HMCL-Update/blob/main/README.md#%E6%B5%8B%E8%AF%95%E7%89%88-)下载他。**
:::

- 如果你想为此文档做贡献，你可以在 [**Github**](https://github.com/944390394/cato-mengyou) 提交 Pull requests 。其中，图片要存放在 Github 仓库中的 `/assets/img/docs/multiplayer-faq` 目录中

- **在[QQ群：212927890](https://jq.qq.com/?_wv=1027&k=N4mHT9FD)提问本文章没有的问题时，为了更快的解决问题，请提供以下必要信息：**

  **你所使用的 cato 渠道是 HMCL吗？**

  **你所使用的 HMCL 版本？**

  **你是在此问题发生前进行了哪些操作？**

  **你认为大概是什么问题，**

  **你是否已经阅读过本文档，并按文档内容尝试解决？（是/否）**

## (腾空用请无视)~~
/

/

/

/

/

/

## 多人联机会话意外退出，退出码 2

### 问题

在使用多人联机时出现下面图片问题↓

![tuicu2.png](./png/tuicu2.png)

### 回答

请自行去HMCL启动器官网下载**最新的测试版本**[HMCL官方下载页](https://hmcl.huangyuhui.net/download/)

::: warning 注意

**请确认 HMCL 版本是否为  <img src="https://img.shields.io/maven-central/v/org.glavo.hmcl/hmcl-dev?label=开发版" style="zoom: 130%;" />，若不是，请在 [此处](https://gitee.com/Glavo/HMCL-Update/blob/main/README.md#%E6%B5%8B%E8%AF%95%E7%89%88-)下载他。**

:::

## 无法连接多人联机服务，你可以在多人联机页面的反馈中反馈问题
### 问题


在使用多人联机时出现下面图片问题↓

![wufalianjie.png](./png/wf-1.png)

### 回答
- 鉴权服务器被人占满，请等待每个半点，鉴权服务器会自动刷新一次。
- **你可以尝试询问[QQ群：212927890](https://jq.qq.com/?_wv=1027&k=N4mHT9FD)中的群主或管理员鉴权服务器是否正常工作**
- **若你没有足够的耐心等待，你可以考虑申请凭证开启桥接服务**（[**获得凭证的方法**](#10-如何获得凭证)）

## 加入房间失败，无法与对方建立链接

### 问题 

进入 HMCL 多人联机页面时出现下方图片问题↓

![chuangfang.jpg](./png/chuangfang.jpg)

- 请检查房主和你的HMCL版本是否一致,版本是否为最新版<img src="https://img.shields.io/maven-central/v/org.glavo.hmcl/hmcl-dev?label=开发版" style="zoom: 130%;" />

- **可尝试使用凭证开启桥接服务，普通的 PTP无法联机，因为 NAT 等级过差** （[**获得凭证的方法**](#10-如何获得凭证)）

::: warning 注意

在 **极差** 环境下您可能**无法进行联机**

在 **差**    环境下您大概率**无法创建房间**，但您能进入类型为 好 的房间

:::
## 安装失败，部分文件无法下载

### 问题

在对方加入房间时出现下面图片问题↓

![pj.png](./png/pj.png)
### 回答
- **请确认 HMCL 版本是否为 <img src="https://img.shields.io/maven-central/v/org.glavo.hmcl/hmcl-dev?label=开发版" style="zoom: 130%;" />，若不是，请在 [此处](https://gitee.com/Glavo/HMCL-Update/blob/main/README.md#%E6%B5%8B%E8%AF%95%E7%89%88-)下载他**
- **请检查你的电脑是否能正常上网、关闭防火墙、关闭杀毒软件或添加 cato （HMCL多人联机核心）程序为白名单后重启hmcl**
- **（一般这种问题应该是下载 cato 的服务器出现了一些问题，这种问题应该不会持续太久）**

## 创建联机房间失败，你的凭证可能无法正常工作，你可以使用空凭证再试

请先检查你的凭证是否填写**错误**或**过期**

请联系**在线管理员**询问鉴权服务器是否正常工作，或者耐心等待十分钟。

