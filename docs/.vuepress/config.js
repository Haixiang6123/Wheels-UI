module.exports = {
    base: '/wheel-ui/',
    title: 'Wheel UI',
    description: 'A UI library based on Vue.js',
    host: 'localhost',
    themeConfig: {
        sidebar: [
            {
                title: 'Introduction',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: 'General',
                children: [
                    '/general/icon.md',
                    '/general/button.md',
                    '/general/button-group.md'
                ]
            },
            {
                title: 'Layout',
                children: [
                    '/layout/layout.md',
                    '/layout/grid.md',
                ]
            },
        ]
    }
}