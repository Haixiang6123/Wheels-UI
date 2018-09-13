module.exports = {
    base: '/wheel-ui/',
    title: 'Wheel UI',
    description: 'A UI library based on Vue.js',
    host: 'localhost',
    themeConfig: {
        nav: [
            { text: 'Github', link: 'https://github.com/Haixiang6123/wheel-ui' },
        ],
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
                    '/general/button.md'
                ]
            },
            {
                title: 'Layout',
                children: [
                    '/layout/layout.md',
                    '/layout/grid.md',
                ]
            },
            {
                title: 'Data Display',
                children: [
                    '/data-display/tabs.md',
                    '/data-display/popover.md'
                ]
            },
            {
                title: 'Data Entry',
                children: [
                    '/data-entry/input.md',
                ]
            },
            {
                title: 'Feedback',
                children: [
                    '/feedback/toast.md',
                ]
            }
        ]
    }
}