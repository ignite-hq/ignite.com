// Px to REM function (static base of 16)
const pxToRem = (dest) => 1 / (16 / dest)

module.exports = {
  content: [
    './src/components/**/*.vue',
    './src/views/**/*.vue',
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': `${pxToRem(4)}rem`,
      DEFAULT: `${pxToRem(16)}rem`,
      'md': `${pxToRem(20)}rem`,
      'lg': `${pxToRem(100)}rem`,
      'circle': '100%',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        500: 'rgba(255,255,255,0.5)',
        800: 'rgba(255,255,255,0.82)',
        1000: '#fff',
      },
      gray: {
        0: '#000',
        50: '#f0f0f0',
        30: 'rgba(0, 0, 0, 0.03)',
        70: 'rgba(0, 0, 0, 0.07)',
        660: 'rgba(0, 0, 0, 0.667)',
      },
      primary: '#094EFD',
      secondary: '#95DCFD',
    
      // functional colors
      bg: '#fff',
      title: '#000',
      text: '#000',
      inverse: '#fff',
      muted: 'rgba(0, 0, 0, 0.667)',
      link: '#000',
      linkHover: 'rgba(0, 0, 0, 0.667)',
      border: 'rgba(0, 0, 0, 0.07)',
    },
    fontSize: {
      0: '0',
      1: [`${pxToRem(10)}rem`],
      2: [`${pxToRem(13)}rem`],
      3: [`${pxToRem(16)}rem`],
      4: [`${pxToRem(21)}rem`],
      5: [`${pxToRem(28)}rem`],
      6: [`${pxToRem(32)}rem`],
      7: [`${pxToRem(38)}rem`],
      8: [`${pxToRem(51)}rem`],
    },
    extend: {
      inset: {
        'center': '50%',
      },
      lineHeight: {
        'title': '127%',
        'text': '153.8%',
      },
    },
    letterSpacing: {
      tighter: '-.007em',
      tight: '-.02em',
      normal: '0',
    },
    screens: {
      // mobile first -> (min-width:xxx)
      xs: `${pxToRem(320)}rem`,
      sm: `${pxToRem(576)}rem`,
      m: `${pxToRem(768)}rem`,
      l: `${pxToRem(1024)}rem`,
      xl: `${pxToRem(1440)}rem`,
    },
    spacing: {
      'auto': 'auto',
      'full': '100%',
      '0': '0',
      '1': '.25rem',
      '2': '.375rem',
      '3': '.5rem',
      '4': '.75rem',
      '5': '1rem',
      '6': '1.5rem',
      '7': '2rem',
      '7.5': `${pxToRem(40)}rem`,
      '8': '3rem',
      '8.5': `${pxToRem(52)}rem`,
      '9': '4rem',
      '9.5': '5rem',
      '10': '6rem',
      '11': '8rem',
      '12': '12rem',
    },
  },
  plugins: [],
};
