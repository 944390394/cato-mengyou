# Cato – 基于P2SP服务构架的分布式镜像传输系统

![catologo.png](./pngc/logo.png)
![FOSSA](https://app.fossa.com/api/projects/git%2Bbitbucket.org%2Fpwq%2Fcato.svg)![Liscens](https://img.shields.io/badge/License-EULA-v?logo=cachet&labelColor=ffffff) ![Build](https://github.com/oxxz/build/actions/workflows/build.yml/badge.svg)
![Version](https://img.shields.io/badge/dynamic/json?color=green&label=Version&query=%24.0.commit.message&url=https%3A%2F%2Fapi.github.com%2Frepos%2Foxxz%2Fcato%2Fcommits&logo=adafruit&style=social)

#### 整个`ioi`系列作品的目标是以便捷的, 去中心化的形式发布服务.以方便从`任意地点`通过`任意网络`与`任意网络设备`建立`安全连接`。
::: tip
<font color=#EC7063>①：为了项目健康发展，这里不主张白嫖，因此象征性收费 ຕ 0.11（折合￥ 0.11）【[登陆社区后后](https://noin.cn?ref=gClkrjnjp)】</font>

<font color=#1ABC9C>②：一对密钥只能同时维持一个客户端在线</font>

<font color=#EB984E>③：临时身份(mix)认证的生命周期为3小时，需要更长的存活请申请静态密钥。</font>
:::
## 特性
### 自组网 (Selfmesh)
自组网是**Cato**的特性, 允许**Cato服务**成为**Signaling Server**(**WebRTC**建立连接需要交换信令, **Signaling Server**提供交换的服务).

举个简单的例子:

比如现在有三个节点, 分别为**alice**, **bob**和**eve**.

**alice**与**bob**建立了**Pipes**.

**eve**与**bob**建立了**Pipes**.

当自组网特性未启用时, 如果需要为**alice**和**eve**的创建**Pipes**时, 使用的是默认的**Signaling Server**.

未启用自组网时, 交换**Signaling**示意图:


alice — Default Signaling Server — eve
但是, 当自组网特性启用后, 会采用**bob**做为**Signaling Server**, 而不需要使用默认的**Signaling Server**.

启用自组网后, 交换Signaling示意图:


alice — bob(Signaling Server) — eve
默认参数下, 已经启动自组网功能.
