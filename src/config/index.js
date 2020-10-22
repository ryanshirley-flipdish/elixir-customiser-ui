export default {
    /**
     * Elixir Templates - CSS & JS
     */
    elixirs: {
        cafeshirley: {
            label: 'CafeShirley',
            css: 'https://cdn.jsdelivr.net/gh/ryanshirley-flipdish/elixir-templates@development/cafeshirley/production.min.css',
            settings: {
                colours: [
                    {
                        name: 'Main Background',
                        variable: 'main-bg-color',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Main Background Alternate',
                        variable: 'main-bg-color=alternate',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Second Background',
                        variable: 'second-bg-color',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Headings',
                        variable: 'heading-font-color',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Body',
                        variable: 'body-font-color',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Headings Inverse',
                        variable: 'heading-font-color-inverse',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Body Inverse',
                        variable: 'body-font-color-inverse',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                ]
            }
        }
    },
}