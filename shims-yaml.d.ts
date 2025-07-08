declare module '*.yml' {
  interface YamlContent {
    hero: {
      title: string
      description: string
      links: Array<{
        label: string
        icon?: string
        class?: string
      }>
    }
  }
  const content: YamlContent
  export default content
}
