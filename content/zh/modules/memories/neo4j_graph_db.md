---
title: 基于图的明文记忆后端
desc: "该模块为记忆增强系统（如RAG、认知代理或个人内存助手）提供基于图结构的记忆存储和查询。 <br/>它定义了一个干净的抽象类(`BaseGraphDB`)，并使用**Neo4j**实现了一个可用于生产环境的实现。"
---

## 为什么记忆需要图存储?

与向量存储不同，一个图数据库允许:

- 将记忆组织成**链、层次和因果关系**
- 执行**多跳推理**和**子图遍历**
- 支持记忆**重复数据删除、冲突检测和调度**
- 随时间动态地演化图记忆

这构成了长期的、可解释的和组成性记忆推理的主干。

## 特色

- 跨不同图数据库的统一接口
- 内置对Neo4j的支持
- 支持向量增强检索(`search_by_embedding`)
- 模块化、可插拔和可测试
- [v0.2.1 新特性] 支持**多租户图存储架构**（单库多用户）
- [v0.2.1 新特性] 兼容\*\*Neo4j 社区版（Community Edition）

## 目录结构

```

src/memos/graph_dbs/
├── base.py            # BaseGraphDB的抽象接口
├── factory.py         # 工厂从配置中实例化GraphDB
├── neo4j.py           # Neo4jGraphDB的产品实现

````

## 如何使用

```python
from memos.graph_dbs.factory import GraphStoreFactory
from memos.configs.graph_db import GraphDBConfigFactory

# 步骤1：构建工厂配置
config = GraphDBConfigFactory(
    backend="neo4j",
    config={
        "uri": "bolt://localhost:7687",
        "user": "your_neo4j_user_name",
        "password": "your_password",
        "db_name": "memory_user1",
        "auto_create": True,
        "embedding_dimension": 768
    }
)

# 步骤2：实例化图存储
graph = GraphStoreFactory.from_config(config)

# 步骤3：增加记忆
graph.add_node(
    id="node-001",
    content="Today I learned about retrieval-augmented generation.",
    metadata={"type": "WorkingMemory", "tags": ["RAG", "AI"], "timestamp": "2025-06-05"}
)
````

## 可插拔的设计

### 接口: `BaseGraphDB`

所有的实现必须包括:

* `add_node`, `update_node`, `delete_node`
* `add_edge`, `delete_edge`, `edge_exists`
* `get_node`, `get_path`, `get_subgraph`, `get_context_chain`
* `search_by_embedding`, `get_by_metadata`
* `deduplicate_nodes`, `detect_conflicts`, `merge_nodes`
* `clear`, `export_graph`, `import_graph`

参见src/memos/graph_dbs/base.py获取完整的方法文档。

### 当前的后端:

| 后端 | 状态 | 文件       |
| ------- | ------ | ---------- |
| Neo4j   | Stable | `neo4j.py` |

## 单库多租户（Shared DB, Multi-Tenant）

通过配置 `user_name` 字段，MemOS 支持在单个 Neo4j 数据库中隔离多个用户的记忆图谱，适用于协同系统、多角色场景：

```python
config = GraphDBConfigFactory(
    backend="neo4j",
    config={
        "uri": "bolt://localhost:7687",
        "user": "neo4j",
        "password": "your_password",
        "db_name": "shared-graph",
        "user_name": "alice",
        "use_multi_db": False,
        "embedding_dimension": 768,
    },
)
```

每个用户的数据通过 `user_name` 字段在读写、搜索、导出中逻辑隔离，系统自动完成过滤。

::note
**示例参考**<br>话不多说，都在代码里了`examples/basic_modules
/neo4j_example.example_complex_shared_db(db_name="shared-traval-group-complex-new")`
::

## Neo4j 社区版（Community Edition）支持

新增后端标识：`neo4j-community`

使用方式与标准 Neo4j 类似，但自动关闭企业功能：

- ❌ 不支持 `auto_create` 数据库
- ❌ 不支持原生向量索引（使用外挂，如 Qdrant）
- ✅ 强制启用 `user_name` 逻辑隔离

示例配置：

```python
config = GraphDBConfigFactory(
    backend="neo4j-community",
    config={
        "uri": "bolt://localhost:7687",
        "user": "neo4j",
        "password": "12345678",
        "db_name": "paper",
        "user_name": "bob",
        "auto_create": False,
        "embedding_dimension": 768,
        "vec_config": {
            "backend": "qdrant",
            "config": {
                "host": "localhost",
                "port": 6333,
                "collection_name": "neo4j_vec_db",
                "vector_dimension": 768
            },
        },
    },
)
```

::note
**示例参考**<br>话不多说，都在代码里了`examples/basic_modules
/neo4j_example.example_complex_shared_db(db_name="paper", 
community=True)`
::

## 扩展

你可以添加任何其他图形引擎的支持（例如，**TigerGraph**, **DGraph**, **Weaviate hybrid**）:

1. 子类 `BaseGraphDB`
2. 创建配置数据类(例如, `DgraphConfig`)
3. 将它注册到:

   * `GraphDBConfigFactory.backend_to_class`
   * `GraphStoreFactory.backend_to_class`

参见 `src/memos/graph_dbs/neo4j.py` 作为参考实现。
