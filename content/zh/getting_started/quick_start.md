---
title: "快速开始：启动并运行MemOS"
---

## 你将学到什么
欢迎！本指南将帮助你在几分钟内完成 **安装**、**初始化**，并 **运行你的第一个带有记忆增强的大语言模型（LLM）应用**。

只需几分钟，你将学会如何搭建一个 **最小可用的 MemOS Pipeline **，将你的 LLM 与持久化且可搜索的记忆相连接。  
完成后，你将能够 **存储、检索和更新简单的记忆**，为构建带记忆增强的聊天机器人和智能代理奠定基础。


::steps{}

### 安装 MemOS

::note
**平台兼容性警告**<br>MemOS 兼容 Linux、Windows 和 macOS。但是，如果您使用的是 macOS，请注意可能存在难以解决的依赖问题。例如，与 macOS 13 Ventura 的兼容性目前具有挑战性。
::

#### 通过 pip 安装

```bash
pip install MemoryOS
```

#### 开发安装

要为 MemOS 做出贡献，请克隆仓库并以可编辑模式安装：

```bash
git clone https://github.com/MemTensor/MemOS.git
cd MemOS
make install
```

#### 可选依赖

::note
**Ollama 支持**<br>要将 MemOS 与 [Ollama](https://ollama.com/) 一起使用，请先安装 Ollama CLI：<br>`curl -fsSL https://ollama.com/install.sh | sh`
::

::note
**Transformers 支持**<br>要使用基于 `transformers` 库的功能，请确保已安装 [PyTorch](https://pytorch.org/get-started/locally/)（建议使用 CUDA 版本以实现 GPU 加速）。
::

::note
**下载示例**<br>要下载示例代码、数据和配置，请运行以下命令：<br>`memos download_examples`
::

::note
**Neo4j Desktop 要求**<br>如果你计划使用 Neo4j 作为图记忆，安装 Neo4j Desktop（社区版支持即将推出！）
::

### 创建最简配置

本快速开始将使用内置的 GeneralTextMemory — 无需外部向量数据库或图数据库。

```python
from memos.configs.mem_os import MOSConfig

# 初始化 MOSConfig
mos_config = MOSConfig.from_json_file("examples/data/config/simple_memos_config.json")
```

### 创建用户并注册 MemCube

```python
import uuid
from memos.mem_os.main import MOS

mos = MOS(mos_config)

# 生成唯一用户ID
user_id = str(uuid.uuid4())

# 创建用户
mos.create_user(user_id=user_id)

# 为该用户注册一个简单的记忆立方体
mos.register_mem_cube("examples/data/mem_cube_2", user_id=user_id)
```

### 添加你的第一个记忆

```python
# 添加一些对话历史
mos.add(
    messages=[
        {"role": "user", "content": "我喜欢踢足球。"},
        {"role": "assistant", "content": "那真棒！"}
    ],
    user_id=user_id
)
```

### 检索与搜索记忆

```python
# 搜索与查询相关的记忆
result = mos.search(
  query="用户喜欢什么？",
  user_id=user_id
)

print("找到的记忆：", result["text_mem"])
```

### 保存与加载记忆

```python
# 保存你的记忆立方体
mos.dump("tmp/my_mem_cube")

# 之后，可以重新加载
mos.load("tmp/my_mem_cube")
```

::

## 后续步骤

恭喜！你刚刚运行了一个最简的带记忆增强的 MemOS Pipeline 。

准备升级了吗？

* 结构化记忆：尝试基于图的分层知识 TreeTextMemory。
* 激活记忆：使用 KVCacheMemory 加速多轮对话。
* 参数化记忆：用适配器/LoRA 实现动态技能注入。
* 图与向量后端：连接 Neo4j 或 Qdrant 实现生产级向量/图搜索。

## 需要帮助？

请查看：

* [核心概念](/home/core_concepts)
* [API 参考](/docs/api/info)
* [贡献指南](/contribution/overview)
