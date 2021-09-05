module.exports = {
  // Tree-shake unused styles in production build
  // purge: ['./src/**/*.{vue,js,ts,jsx,tsx,html}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // Disable breakpoints
    screen: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    //禁用一些小程序class不支持的分割
    space: false,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false
  }
}
