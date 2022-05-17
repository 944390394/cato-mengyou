#  功能介绍
第一次写文档，如有错误欢迎指正.
::: tip 提示
如果你在使用cato过程中遇到任何问题，请先查阅 [常见问题解答](/changjian.md)，确认你遇到的问题不在此列后，再依照 [报告问题的正确姿势](/tiwen.md) 中的要求联系开发者。
:::
## 检查你的机器是否符合要求
流畅运行 Cato 对你的服务器的配置的要求非常低，你需要检查的是你的运行环境.
## 下载Cato
最新版本的完整安装包可以在这里找到：[这里](https://mcer.cn/104.html?ref=azAtwBwzp)
::: tip 提示
请根据您的系统环境来选择正确的版本。
:::
## 启动参数
``` go
Usage of cato:
  -appid
        全局唯一注册编码
  -auth.token
        入网身份凭证密钥
  -signal.addr
        信令路由服务地址
  -bridge.addr
        链路桥接服务地址
  -deploy.color
        资产管理分组标签
  -deploy.env
        运行环境变量标签
  -deploy.script
        配置脚本文件路径
  -http.addr
        页面服务监听地址
  -http.password
        页面服务访问密钥
  -https.cert
        启用安全访问证书文件路径
  -https.key
        启用安全访问密钥文件路径
  -log.format
        后台控制终端日志输出格式
  -log.verbose
        后台控制终端日志输出等级
  -region
        中心服务部署运行地区标签
  -zone
        中心服务部署运行区域标签    
```
## 简易入网 (simple join)
``` go
./cato

windows环境可通过双击打开 cato.exe
```
## 认证入网 (listen only)
```
./cato -auth.token 你的token或new
例如.
./cato -auth.token zKTJLjCzF5gm
```
## 内置终端 (internal console)
### 根指令
<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pln">net</span><span class="pun">:网络功能</span></code></li><li class="L1"><code><span class="pln">ufw</span><span class="pun">:简易防火墙</span></code></li></ol></pre>

---
### net – 网络功能
<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pln">net add</span><span class="pun">:接入新网络</span></code></li><li class="L1"><code><span class="pln">net list</span><span class="pun">:当前网络列表</span></code></li></ol></pre>


### net add – 接入新网络:
<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pln"> net add </span><span class="pun">本地地址:端口</span><span class="pln"> </span><span class="pun">远程地址:端口</span><span class="pln"> </span><span class="pun">（可选扩展指令：网络模式[</span><span class="pln">p2p</span><span class="pun">/</span><span class="pln">bridge</span><span class="pun">]|网络协议[</span><span class="pln">tcp</span><span class="pun">/</span><span class="pln">udp</span><span class="pun">]|镜像类型[</span><span class="pln">forward</span><span class="pun">|</span><span class="pln">reverse</span><span class="pun">]）</span></code></li></ol></pre>

::: tip  提示
可选扩展指令大多数时候都不用添加（保持默认）但部分情况需要进行网络调整的时候它将会帮上大忙
:::

例如,我们需要将`zKTJLjCzF5gm`网络中的设备地址为`192.168.1.10`端口号为`22`的`TCP`协议服务镜像到本地的`2022`端口我们可以这样做：

```
net add zKTJLjCzF5gm 127.0.0.1:2022 192.168.1.10:22
```
如果服务协议为`UDP`我们可以这样做
```
net add zKTJLjCzF5gm 127.0.0.1:2022 192.168.1.10:22 udp
```
如果我们网络状况不太理想，还需要使用`Bridge`服务，于是指令就变成这样了
```
net add zKTJLjCzF5gm 127.0.0.1:2022 192.168.1.10:22 udp bridge
```
当然如果我要将我所在网络内`192.168.0.10`的`3389`放到`zKTJLjCzF5gm`的`3388`端口上，该怎么做呢？
```
net add zKTJLjCzF5gm 192.168.0.10:3389 127.0.0.1:3388 reverse
```
当然，通过`net list`可以看见当前所创建的所有链接

***

### ufw – 简易防火墙
<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pln">ufw user</span><span class="pun">:用户防火策略</span></code></li><li class="L1"><code><span class="pln">ufw net</span><span class="pun">:网络防火策略</span></code></li></ol></pre>

### ufw user – 用户防火策略
<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pln">ufw user add </span><span class="pun">:添加屏蔽用户</span></code></li><li class="L1"><code><span class="pln">ufw user </span><span class="kwd">del</span><span class="pln"> </span><span class="pun">:移除屏蔽用户</span></code></li><li class="L2"><code><span class="pln">ufw user list </span><span class="pun">:屏蔽用户名单</span></code></li></ol></pre>

### ufw net – 网络防火策略
<pre class="prettyprint linenums prettyprinted" style=""><ol class="linenums"><li class="L0"><code><span class="pln">ufw net open </span><span class="pun">:添加允许访问地址</span></code></li><li class="L1"><code><span class="pln">ufw net close </span><span class="pun">:移除移除允许访问地址</span></code></li><li class="L2"><code><span class="pln">ufw net whilist </span><span class="pun">:允许访问地址列表</span></code></li><li class="L3"><code><span class="pun">-</span></code></li><li class="L4"><code><span class="pln">ufw net add </span><span class="pun">:将</span><span class="pln">IP</span><span class="pun">地址添加进黑名单（阻止来自该</span><span class="pln">ip</span><span class="pun">地址的请求）</span></code></li><li class="L5"><code><span class="pln">ufw net </span><span class="kwd">del</span><span class="pln"> </span><span class="pun">:将</span><span class="pln">IP</span><span class="pun">地址移出黑名单</span></code></li><li class="L6"><code><span class="pln">ufw user blacklist </span><span class="pun">:</span><span class="pln">IP</span><span class="pun">地址黑名单列表</span></code></li></ol></pre>

## 加载脚本 (load script)
``` cmd
./cato -script ./config.ioi
```
