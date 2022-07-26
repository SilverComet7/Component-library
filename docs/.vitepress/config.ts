export default {
    title: 'VitePress',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: 'My Custom Title',
        nav: [
            { text: 'Guide', link: '/Guide' },
            { text: 'Changelog', link: 'https://github.com/...' }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            }
        ]
    }
}
