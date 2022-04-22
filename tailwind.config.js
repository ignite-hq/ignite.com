// Px to REM function (static base of 16)
const pxToRem = (dest) => 1 / (16 / dest)

module.exports = {
  content: ['./src/components/**/*.vue', './src/views/**/*.vue'],
  theme: {
    borderRadius: {
      none: '0',
      xxs: `${pxToRem(4)}rem`,
      xs: `${pxToRem(8)}rem`,
      sm: `${pxToRem(10)}rem`,
      DEFAULT: `${pxToRem(16)}rem`,
      md: `${pxToRem(20)}rem`,
      lg: `${pxToRem(100)}rem`,
      circle: '100%'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        500: 'rgba(255,255,255,0.5)',
        800: 'rgba(255,255,255,0.82)',
        1000: '#fff'
      },
      gray: {
        0: '#000',
        50: '#f0f0f0',
        30: 'rgba(0, 0, 0, 0.03)',
        70: 'rgba(0, 0, 0, 0.07)',
        330: 'rgba(0, 0, 0, 0.33)',
        660: 'rgba(0, 0, 0, 0.667)'
      },
      primary: '#094EFD',
      secondary: '#95DCFD',

      // functional colors
      bg: '#fff',
      title: '#000',
      text: '#000',
      inverse: '#fff',
      muted: 'rgba(0, 0, 0, 0.667)',
      inactive: 'rgba(0, 0, 0, 0.33)',
      link: '#000',
      linkHover: 'rgba(0, 0, 0, 0.667)',
      border: 'rgba(0, 0, 0, 0.07)',
      checkbox: '#C4C4C4',
      radio: '#C4C4C4',
      error: '#D80228'
    },
    container: {
      center: true
    },
    fontFamily: {
      title: ['Termina', 'sans-serif']
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
      8: [`${pxToRem(51)}rem`]
    },
    extend: {
      boxShadow: {
        border: '0px 0.5px 0px #CBCBCB',
        border_double: '0px -0.5px 0px #CBCBCB, 0px 0.5px 0px #CBCBCB',
        max: '16px 32px 128px 8px rgba(0, 0, 0, 0.07)',
        dropdown: '-112px 73px 191px 59px rgba(0, 0, 0, 0.09)'
      },
      inset: {
        center: '50%'
      },
      lineHeight: {
        title: '127%',
        text: '153.8%'
      },
      borderRadius: {
        '2sm': '8px',
        '3sm': '10px',
        '4sm': '12px',
        '5sm': '14px',
        '6sm': '16px'
      }
    },
    letterSpacing: {
      tighter: '-.007em',
      tight: '-.02em',
      normal: '0'
    },

    screens: {
      // mobile first -> (min-width:xxx)
      xs: `${pxToRem(320)}rem`,
      sm: `${pxToRem(576)}rem`,
      md: `${pxToRem(768)}rem`,
      lg: `${pxToRem(1024)}rem`,
      xl: `${pxToRem(1380)}rem`
    },
    spacing: {
      auto: 'auto',
      full: '100%',
      0: '0',
      1: '.25rem',
      2: '.375rem',
      3: '.5rem',
      4: '.75rem',
      5: '1rem',
      5.5: `${pxToRem(20)}rem`,
      6: '1.5rem',
      7: '2rem',
      7.5: `${pxToRem(40)}rem`,
      8: '3rem',
      8.5: `${pxToRem(52)}rem`,
      9: '4rem',
      9.5: '5rem',
      10: '6rem',
      10.5: `${pxToRem(104)}rem`,
      11: '8rem',
      12: '12rem'
    },
    boxShadow: {
      DEFAULT: '16px 32px 128px -8px rgba(0, 0, 0, 0.07)'
    }
  },
  plugins: []
}
