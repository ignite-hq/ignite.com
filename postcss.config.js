module.exports = {
  plugins: {
    'postcss-import': {},
    'autoprefixer': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {},
    'tailwindcss': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
