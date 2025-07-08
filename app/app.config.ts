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
    memu: [{
      to: 'https://memos.openmem.net',
      label: 'Home'
    }, {
      label: 'Research',
      target: '_blank',
      to: 'https://memos.openmem.net/paper_memos_v2'
    }]
  },
  footer: {
    credits: '© 2025 Memtensor, Inc. All rights reserved.',
    colorMode: false
  },
  toc: {
    bottom: {
      title: 'Community',
      edit: 'https://github.com/MemTensor/MemOS-Docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/MemTensor/MemOS',
        target: '_blank'
      }]
    }
  }
})
