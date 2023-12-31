
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray1': "#7D7D88",
        'lightBlue': "#00B9FF",
        'main-blue': "#0766FF",
        'borderColor': '#DBDBDB',
        blueTheme: '#00B9FF',
        purpleTheme: '#7600ED',
        'grayColor': '#7D7D88',
        secondary: '#7D7D88',
        yellowBg: 'rgba(241, 231, 201, 1)',
        mainBlue: 'rgba(7, 102, 255, 1)',
        orange: 'rgba(255, 111, 7, 1)',
        dark: 'rgba(12, 11, 66, 1)',
        lightCyan: 'rgba(122, 178, 229, 0.20)',
        grayText: 'rgba(99, 98, 130, 0.50)',
        secondText: 'rgba(125, 125, 136, 1)',
        secondTextBg: 'rgba(248, 250, 253, 1)',
        cardBg: 'rgba(250, 251, 254, 1)',
        greenSuccess: 'rgba(11, 182, 141, 1)',
        orangeColor: 'rgba(255, 111, 7, 1)',

      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
        themed: '0px 0px 3px 0px rgba(0, 0, 0, 0.10);'
      },
      backgroundImage: {
        'linear-gradient': "linear-gradient(180deg, rgba(0,66,175,1) 5%, rgba(12,14,70,1) 97%)"
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        onest: ['Onest', 'sans-serif']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      screens: {
        xs: '480px',
      },
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
      },

    },
  },
  // plugins: [
  //   // eslint-disable-next-line global-require
  //   require('@tailwindcss/forms'),
  //   // add custom variant for expanding sidebar
  //   plugin(({ addVariant, e }) => {
  //     addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
  //     });
  //   }),
  // ],
};
