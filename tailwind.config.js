module.exports = {
  content: [
    './src/components/**/*.vue',
    './src/views/**/*.vue',
  ],
  theme: {
    extends: {
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
        muted: 'rgba(0, 0, 0, 0.667)',
        link: '#000',
        linkHover: 'rgba(0, 0, 0, 0.667)',
        border: 'rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
};
