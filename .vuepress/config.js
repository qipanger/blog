module.exports = {
    title: 'Hello',
    description: 'Just playing around',
    logo: '/assets/img/logo.png',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    theme: '@vuepress/blog',
    search: false,
    searchMaxSuggestions: 10,
    themeConfig: {
        sidebar: [
            '/',
            '/page-a',
        ]
    }
}