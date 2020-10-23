export default {
    /**
     * Elixir Templates - CSS & JS + Settings
     */
    elixirs: {
        cafeshirley: {
            label: 'Cafe Shirley',
            css: 'https://cdn.jsdelivr.net/gh/ryanshirley-flipdish/elixir-templates@latest/dist/cafeShirley/production.min.css',
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
                        variable: 'main-bg-color-alternate',
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
                ],
                fonts: [
                    {
                        name: 'Headings',
                        variable: 'heading-font',
                        type: 'heading',
                        description: 'This changes X.',
                    },
                    {
                        name: 'Body',
                        variable: 'main-font',
                        type: 'body',
                        description: 'This changes X.',
                    }
                ]
            }
        },
        pizzacafe: {
            label: 'Pizza Cafe',
            css: 'https://cdn.jsdelivr.net/gh/ryanshirley-flipdish/elixir-templates@latest/dist/pizzaCafe/production.min.css',
            settings: {
                colours: [
                    {
                        name: 'Main Background',
                        variable: 'main-bg-color',
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
                        name: 'Third Background',
                        variable: 'third-bg-color',
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
                        name: 'Secondary Font',
                        variable: 'secondary-font-color',
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
                    {
                        name: 'Secondary Font Inverse',
                        variable: 'secondary-font-color-inverse',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                ],
                fonts: []
            }
        },
        lospolloshermanos: {
            label: 'Los Pollos Hermanos',
            css: 'https://cdn.jsdelivr.net/gh/ryanshirley-flipdish/elixir-templates@latest/dist/losPollosHermanos/production.min.css',
            settings: {
                colours: [
                    {
                        name: 'Primary',
                        variable: 'primary-color',
                        forceRGB: true,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Accent',
                        variable: 'accent-color',
                        forceRGB: true,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Alt Accent',
                        variable: 'alt-accent-color',
                        forceRGB: true,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Alt Background',
                        variable: 'atl-bg',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Highlight',
                        variable: 'highlight',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                    {
                        name: 'Shadow',
                        variable: 'shadow',
                        forceRGB: false,
                        description: 'This changes X.',
                    },
                ],
                fonts: []
            }
        }
    },
    /**
     * Recommended Fonts
     */
    fonts: {
        heading: [
            "Libre Baskerville", "Knewave", "Montserrat", "Playfair Display"
        ],
        body: [
            "Josefin Sans", "Roboto", "Work Sans", "Poppins", "Rubik", "Fira Sans", "Alegreya Sans"
        ]
    }
}