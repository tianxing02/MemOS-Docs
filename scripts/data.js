export default {
  data: [
    {
      url: 'https://api.github.com/repos/MemTensor/MemOS/releases/231768705',
      assets_url: 'https://api.github.com/repos/MemTensor/MemOS/releases/231768705/assets',
      upload_url: 'https://uploads.github.com/repos/MemTensor/MemOS/releases/231768705/assets{?name,label}',
      html_url: 'https://github.com/MemTensor/MemOS/releases/tag/v0.2.0',
      id: 231768705,
      author: {
        login: 'fridayL',
        id: 78344051,
        node_id: 'MDQ6VXNlcjc4MzQ0MDUx',
        avatar_url: 'https://avatars.githubusercontent.com/u/78344051?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/fridayL',
        html_url: 'https://github.com/fridayL',
        followers_url: 'https://api.github.com/users/fridayL/followers',
        following_url: 'https://api.github.com/users/fridayL/following{/other_user}',
        gists_url: 'https://api.github.com/users/fridayL/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/fridayL/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/fridayL/subscriptions',
        organizations_url: 'https://api.github.com/users/fridayL/orgs',
        repos_url: 'https://api.github.com/users/fridayL/repos',
        events_url: 'https://api.github.com/users/fridayL/events{/privacy}',
        received_events_url: 'https://api.github.com/users/fridayL/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false
      },
      node_id: 'RE_kwDOPHuKoM4N0IKB',
      tag_name: 'v0.2.0',
      target_commitish: 'main',
      name: 'Release v0.2.0',
      draft: false,
      immutable: false,
      prerelease: false,
      created_at: '2025-07-11T12:27:57Z',
      published_at: '2025-07-11T12:35:26Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/MemTensor/MemOS/tarball/v0.2.0',
      zipball_url: 'https://api.github.com/repos/MemTensor/MemOS/zipball/v0.2.0',
      body: 'We are thrilled to officially release MemOS v0.2.0 (Stellar, 星河), an early preview version of MemOS v1.0.\r\n' +
        '\r\n' +
        'MemOS is an operating system for Large Language Models (LLMs) designed to enhance their long-term memory capabilities. This framework enables LLMs to store, retrieve, and manage information, facilitating more context-aware, consistent, and personalized interactions.\r\n' +
        '\r\n' +
        'The current release includes the following features:\r\n' +
        '* Support for CRUD operations across three memory layers: Memory Manager, MemCube, and MemOS\r\n' +
        '  * The Memory Manager currently supports: General Memory Management, Tree Memory Management, and KV Cache Memory Management\r\n' +
        '  * MemCube integrates three memory types (Textual Memory, Activation Memory, and Parametric Memory), representing similar memory contents through different storage formats\r\n' +
        '  * MemOS serves as the top-level abstraction for managing multiple MemCubes\r\n' +
        '* MemOS Capabilities\r\n' +
        '  * Basic chat functionality with LLMs through MemOS\r\n' +
        '  * Offline batch document loading and parsing into MemCubes\r\n' +
        '* FastAPI interface for the MemOS layer\r\n' +
        '* Preliminary MemScheduler functionality\r\n' +
        '* Various infrastructure components including LLM, Embedder, Neo4j graph DB, Qdrant vector DB, Parser, and Chunker\r\n' +
        '\r\n' +
        'Note: This is currently a preview version with known limitations and bugs. We welcome contributions from the community!\r\n' +
        '\r\n' +
        "## What's Changed\r\n" +
        '* refactor: update feature request template by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/50\r\n' +
        '* docs: update documentation links and images by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/55\r\n' +
        '* feat: add structure reorganizer and conflict resolver by @CaralHsi in https://github.com/MemTensor/MemOS/pull/14\r\n' +
        '* feat(eval): add openai memory on locomo - eval guide by @Duguce in https://github.com/MemTensor/MemOS/pull/54\r\n' +
        '* feature: mem reader update and some bug fixs by @Nyakult in https://github.com/MemTensor/MemOS/pull/43\r\n' +
        '* chore: bump version number to v0.2.0 by @fridayL in https://github.com/MemTensor/MemOS/pull/66\r\n' +
        '\r\n' +
        '## New Contributors\r\n' +
        '* @CaralHsi made their first contribution in https://github.com/MemTensor/MemOS/pull/14\r\n' +
        '* @Nyakult made their first contribution in https://github.com/MemTensor/MemOS/pull/43\r\n' +
        '\r\n' +
        '**Full Changelog**: https://github.com/MemTensor/MemOS/compare/v0.1.13...v0.2.0\r\n' +
        '-------------------------\r\n' +
        '我们很高兴正式发布 MemOS v0.2.0 (Stellar, 星河)，这是 MemOS v1.0 的早期预览版本。\r\n' +
        '\r\n' +
        'MemOS 是一个专为大型语言模型（LLMs）设计的操作系统，旨在增强其长期记忆能力。该框架使 LLMs 能够存储、检索和管理信息，促进更具上下文感知、一致性和个性化的交互。\r\n' +
        '\r\n' +
        '当前版本包含以下功能：\r\n' +
        '* 支持三个内存层的 CRUD 操作：Memory Manager、MemCube 和 MemOS\r\n' +
        '  * Memory Manager 目前支持：通用内存管理、树形内存管理和 KV 缓存内存管理\r\n' +
        '  * MemCube 集成了三种内存类型（文本内存、激活内存和参数内存），通过不同的存储格式表示相似的内存内容\r\n' +
        '  * MemOS 作为管理多个 MemCubes 的顶层抽象\r\n' +
        '* MemOS 功能\r\n' +
        '  * 通过 MemOS 与 LLMs 的基本聊天功能\r\n' +
        '  * 离线批量文档加载和解析到 MemCubes\r\n' +
        '* MemOS 层的 FastAPI 接口\r\n' +
        '* 初步的 MemScheduler 功能\r\n' +
        '* 各种基础设施组件，包括 LLM、嵌入器、Neo4j 图数据库、Qdrant 向量数据库、解析器和分块器\r\n' +
        '\r\n' +
        '注意：这是目前的预览版本，存在已知的限制和错误。我们欢迎社区的贡献！\r\n',
      discussion_url: 'https://github.com/MemTensor/MemOS/discussions/67',
      mentions_count: 5
    },
    {
      url: 'https://api.github.com/repos/MemTensor/MemOS/releases/231154915',
      assets_url: 'https://api.github.com/repos/MemTensor/MemOS/releases/231154915/assets',
      upload_url: 'https://uploads.github.com/repos/MemTensor/MemOS/releases/231154915/assets{?name,label}',
      html_url: 'https://github.com/MemTensor/MemOS/releases/tag/v0.1.13',
      id: 231154915,
      author: {
        login: 'fridayL',
        id: 78344051,
        node_id: 'MDQ6VXNlcjc4MzQ0MDUx',
        avatar_url: 'https://avatars.githubusercontent.com/u/78344051?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/fridayL',
        html_url: 'https://github.com/fridayL',
        followers_url: 'https://api.github.com/users/fridayL/followers',
        following_url: 'https://api.github.com/users/fridayL/following{/other_user}',
        gists_url: 'https://api.github.com/users/fridayL/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/fridayL/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/fridayL/subscriptions',
        organizations_url: 'https://api.github.com/users/fridayL/orgs',
        repos_url: 'https://api.github.com/users/fridayL/repos',
        events_url: 'https://api.github.com/users/fridayL/events{/privacy}',
        received_events_url: 'https://api.github.com/users/fridayL/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false
      },
      node_id: 'RE_kwDOPHuKoM4NxyTj',
      tag_name: 'v0.1.13',
      target_commitish: 'main',
      name: 'Release v0.1.13',
      draft: false,
      immutable: false,
      prerelease: true,
      created_at: '2025-07-09T13:13:05Z',
      published_at: '2025-07-09T13:20:23Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/MemTensor/MemOS/tarball/v0.1.13',
      zipball_url: 'https://api.github.com/repos/MemTensor/MemOS/zipball/v0.1.13',
      body: "## What's Changed\r\n" +
        '* ci: add issue templates and update pull request template by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/17\r\n' +
        '* Add long version of MemOS paper by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/20\r\n' +
        '* docs: update citations by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/25\r\n' +
        '* feat(eval): add eval configs example by @Duguce in https://github.com/MemTensor/MemOS/pull/19\r\n' +
        '* feat(eval): add run locomo eval script by @Duguce in https://github.com/MemTensor/MemOS/pull/28\r\n' +
        '* fix(example): correct ParsedTaskGoal usage and add unrelated memory for testing by @Wujiaxuan007 in https://github.com/MemTensor/MemOS/pull/23\r\n' +
        '* style: fix format by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/36\r\n' +
        '* ci: Include macOS and Windows in CI pipeline by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/22\r\n' +
        '* docs: move all docs to https://github.com/MemTensor/MemOS-Docs by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/34\r\n' +
        '* fix(eval): delete about memos redundant search branches by @Duguce in https://github.com/MemTensor/MemOS/pull/35\r\n' +
        '* feat: add internet retrieval and CoT functionality to MemOS  by @fridayL in https://github.com/MemTensor/MemOS/pull/16\r\n' +
        '* docs: update pull request template for clarity and completeness by @Ki-Seki in https://github.com/MemTensor/MemOS/pull/45\r\n' +
        '* chore: bump version to v0.1.13 by @fridayL in https://github.com/MemTensor/MemOS/pull/47\r\n' +
        '* chore: bump version to v0.1.13 by @fridayL in https://github.com/MemTensor/MemOS/pull/48\r\n' +
        '\r\n' +
        '## New Contributors\r\n' +
        '* @Ki-Seki made their first contribution in https://github.com/MemTensor/MemOS/pull/17\r\n' +
        '* @Duguce made their first contribution in https://github.com/MemTensor/MemOS/pull/19\r\n' +
        '* @Wujiaxuan007 made their first contribution in https://github.com/MemTensor/MemOS/pull/23\r\n' +
        '\r\n' +
        '**Full Changelog**: https://github.com/MemTensor/MemOS/compare/v0.1.12...v0.1.13',
      discussion_url: 'https://github.com/MemTensor/MemOS/discussions/49',
      reactions: {
        url: 'https://api.github.com/repos/MemTensor/MemOS/releases/231154915/reactions',
        total_count: 2,
        '+1': 0,
        '-1': 0,
        laugh: 1,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 1,
        eyes: 0
      },
      mentions_count: 4
    },
    {
      url: 'https://api.github.com/repos/MemTensor/MemOS/releases/230877530',
      assets_url: 'https://api.github.com/repos/MemTensor/MemOS/releases/230877530/assets',
      upload_url: 'https://uploads.github.com/repos/MemTensor/MemOS/releases/230877530/assets{?name,label}',
      html_url: 'https://github.com/MemTensor/MemOS/releases/tag/v0.1.12',
      id: 230877530,
      author: {
        login: 'Ki-Seki',
        id: 60967965,
        node_id: 'MDQ6VXNlcjYwOTY3OTY1',
        avatar_url: 'https://avatars.githubusercontent.com/u/60967965?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Ki-Seki',
        html_url: 'https://github.com/Ki-Seki',
        followers_url: 'https://api.github.com/users/Ki-Seki/followers',
        following_url: 'https://api.github.com/users/Ki-Seki/following{/other_user}',
        gists_url: 'https://api.github.com/users/Ki-Seki/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Ki-Seki/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Ki-Seki/subscriptions',
        organizations_url: 'https://api.github.com/users/Ki-Seki/orgs',
        repos_url: 'https://api.github.com/users/Ki-Seki/repos',
        events_url: 'https://api.github.com/users/Ki-Seki/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Ki-Seki/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false
      },
      node_id: 'RE_kwDOPHuKoM4Nwula',
      tag_name: 'v0.1.12',
      target_commitish: 'main',
      name: 'Release v0.1.12 (pre-release)',
      draft: false,
      immutable: false,
      prerelease: true,
      created_at: '2025-07-06T10:01:39Z',
      published_at: '2025-07-08T15:22:51Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/MemTensor/MemOS/tarball/v0.1.12',
      zipball_url: 'https://api.github.com/repos/MemTensor/MemOS/zipball/v0.1.12',
      body: '**Full Changelog**: https://github.com/MemTensor/MemOS/commits/v0.1.12'
    }
  ]
}