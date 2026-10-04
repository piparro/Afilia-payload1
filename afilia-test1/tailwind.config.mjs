/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      },
    },
  },
}

export default config

/*         'light-background': '#ddd2b5',
        'light-primary': '#b98560',
        'light-hover': '#e3997c',
        'light-highlight': '#ffb3b6',
        'light-disabled': '#d0b8a7',
        'light-text-color-primary': '#221d1a',
        'light-text-color-primary-disabled': '#6d635c',
        'light-text-color-secondary': '#221d1a',
        'light-text-color-secondary-disabled': '#6d635c',

        'dark-background': '#221d1a',
        'dark-primary': '#677b53',
        'dark-hover': '#99c071',
        'dark-highlight': '#ebff8d',
        'dark-disabled': '#a3ab91',
        'dark-text-color-primary': '#221d1a',
        'dark-text-color-primary-disabled': '#6d635c',
        'dark-text-color-secondary': '#ddd2b5',
        'dark-text-color-secondary-disabled': '#a69f8b',

        'afi-background': '#c5b390',
        'afi-primary': '#5a448c',
        'afi-hover': '#755da3',
        'afi-highlight': '#cbb6f4',
        'afi-disabled': '#8a84ae',
        'afi-text-color-primary': '#262043',
        'afi-text-color-primary-disabled': '#6d635c',
        'afi-text-color-secondary': '#262043',
        'afi-text-color-secondary-disabled': '#6d635c', */
