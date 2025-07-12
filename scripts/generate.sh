#!/bin/bash

# description: 生成静态站点

# 设置错误时退出
set -e

# 获取环境参数
ENV=${npm_config_env:-dev}
LOCALE=${npm_config_locale:-en}

echo "🚀 开始发布流程... 当前环境: $ENV, 当前语言: $LOCALE"

echo "⚙️ 配置环境变量..."
if [ -f "envConfig/config.${ENV}.ts" ]; then
  echo "✅ 已检测到环境配置: config.${ENV}.ts"
else
  echo "⚠️ 警告：环境配置文件 config.${ENV}.ts 不存在，将使用默认配置"
fi

echo "🏗️ 开始构建文档..."
NUXT_ENV_CONFIG=$ENV NUXT_PUBLIC_LOCALE=$LOCALE nuxt generate

echo "✨ 发布流程完成！"
