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
                title: 'Components',
                children: [
                    '/components/button.md'
                ]
            },
        ]
    }
}