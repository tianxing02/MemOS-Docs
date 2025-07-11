---
title: Graph Memory Backend
desc: "This module provides graph-based memory storage and querying for memory-augmented systems such as RAG, cognitive agents, or personal memory assistants. <br/>It defines a clean abstraction (`BaseGraphDB`) and includes a production-ready implementation using **Neo4j**."
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
## 目录结构

```

src/memos/graph_dbs/
├── base.py            # Abstract interface: BaseGraphDB
├── factory.py         # Factory to instantiate GraphDB from config
├── neo4j.py           # Neo4jGraphDB: production implementation

````

## 如何使用

```python
from memos.graph_dbs.factory import GraphStoreFactory
from memos.configs.graph_db import GraphDBConfigFactory

# Step 1: Build factory config
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

# Step 2: Instantiate the graph store
graph = GraphStoreFactory.from_config(config)

# Step 3: Add memory
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

## 扩展

你可以添加任何其他图形引擎的支持（例如，**TigerGraph**, **DGraph**, **Weaviate hybrid**）:

1. 子类 `BaseGraphDB`
2. 创建配置数据类(例如, `DgraphConfig`)
3. 将它注册到:

   * `GraphDBConfigFactory.backend_to_class`
   * `GraphStoreFactory.backend_to_class`

参见 `src/memos/graph_dbs/neo4j.py` 作为参考实现。
