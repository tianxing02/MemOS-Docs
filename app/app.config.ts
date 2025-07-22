export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'gray'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  header: {
    title: '',
    to: 'https://memos.openmem.net',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/MemTensor/MemOS',
      'target': '_blank',
      'aria-label': 'GitHub'
    }],
    memus: [{
      to: 'https://memos.openmem.net',
      label: 'header.home'
    }, {
      to: '/home/overview',
      label: 'header.docs'
    }, {
      label: 'header.research',
      target: '_blank',
      to: 'https://memos.openmem.net/paper_memos_v2'
    }, {
      label: 'header.changelog',
      to: '/changelog'
    }]
  },
  footer: {
    credits: 'footer.copyright',
    colorMode: false
  },
  toc: {
    bottom: {
      title: 'community.title',
      edit: 'https://github.com/MemTensor/MemOS-Docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'community.stars',
        to: 'https://github.com/MemTensor/MemOS',
        target: '_blank'
      }]
    }
  }
})
