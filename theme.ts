import { lighten, darken, readableColor } from 'polished';

export const theme = {
  // spacing: {
  //   unit: 5,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
  //   sectionVertical: ({ spacing }) => spacing.unit * 8,
  // },
  breakpoints: {
    xs: 0,
    small: '550px',
    medium: '900px',
    large: '1200px',
  },
  colors: {
    tonalOffset: 0,
    primary: {
      main: '#823175',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      // dark: ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      // contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    // success: {
    //   main: '#00aa13',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 3, colors.success.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
    //   contrastText: ({ colors }) => readableColor(colors.success.main),
    // },
    // error: {
    //   main: '#e53935',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.error.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
    //   contrastText: ({ colors }) => readableColor(colors.error.main),
    // },
    // warning: {
    //   main: '#d4ad03',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.warning.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
    //   contrastText: ({ colors }) => readableColor(colors.warning.main),
    // },
    // info: {
    //   main: '#4782cb',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.info.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.info.main),
    //   contrastText: ({ colors }) => readableColor(colors.info.main),
    // },
    text: {
      primary: '#2B2B35',
      // secondary: '#4e566d',
    },
    border: {
      dark: '#DCDCDE',
      light: '#DCDCDE',
    },
    // responses: {
    //   success: {
    //     color: ({ colors }) => colors.success.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.success.main),
    //   },
    //   error: {
    //     color: ({ colors }) => colors.error.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.error.main),
    //   },
    //   redirect: {
    //     color: ({ colors }) => colors.warning.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.redirect.color),
    //   },
    //   info: {
    //     color: ({ colors }) => colors.info.main,
    //     backgroundColor: ({ colors }) => transparentize(0.9, colors.responses.info.color),
    //   },
    // },
    http: {
      get: '#6bbd5b',
      post: '#248fb2',
      put: '#9b708b',
      options: '#d3ca12',
      patch: '#e09d43',
      delete: '#e27a7a',
      basic: '#999',
      link: '#31bbb6',
      head: '#c167e4',
    },
     navbar: {
       main: "#823175",
    //   contrastText: 'white'
     }
    // footer: {
      // main: ({ colors }) => colors.primary.main,
      // contrastText: 'white'
    // },
  },
  logo:{
    height:'2.75rem'
  },
  sidebar: {
    backgroundColor: 'transparent',
    width: '260px',
    activeBgColor: 'transparent',
    activeTextColor: '#823175',
    textColor: '#9090A6',
    
  },
  tocPanel: {
    width: '240px',
    fontSize: '14px'
  },
  // tocPanel: {
  //   width: '240px',
  // },

  typography: {
    fontSize: '14px',
    lineHeight: '1.5em',
    fontWeightRegular: '400',
    fontWeightBold: '600',
    fontWeightLight: '300',
    fontFamily: '"inter", sans-serif',
    headings: {
      fontFamily: '"poppins", sans-serif',
      fontWeight: '600',
    },
    heading1: {
      fontSize: '36px',
      fontWeight: '600',
      fontFamily: ({ typography }) => typography.headings.fontFamily,
      lineHeight: ({ typography }) => typography.lineHeight,
      color: '#2B2B35',
      capitalize: true,
    },
    heading2: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2B2B35',
      fontFamily: ({ typography }) => typography.headings.fontFamily,
      lineHeight: ({ typography }) => typography.lineHeight,
      capitalize: false,
    },
    heading3: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2B2B35',
      fontFamily: ({ typography }) => typography.headings.fontFamily,
      lineHeight: ({ typography }) => typography.lineHeight,
      capitalize: false,
    },
    // heading4: {
    // // ...
    // },
    // heading5: {
    // // ...
    // },
    // heading6: {
    // // ...
    // },
    code: {
      fontSize: '13px',
      fontFamily: 'inter',
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#324B7A',
      backgroundColor: '#ebf3ff',
      wrap: false,
    },
    links: {
      color: ({ colors }) => colors.primary.main,
      visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => lighten(0.2, typography.links.color),
    },
  },
  rightPanel: {
    backgroundColor: '#263238',
    width: '45%',
    panelBackgroundColor:'#334159',
    panelControlsBackgroundColor:'#283145'
    // textColor: '#ffffff',
  },
  schema: {
    nestedBackground: '#fafafa',
    // linesColor: theme => lighten( theme.colors.tonalOffset, desaturate(theme.colors.tonalOffset, theme.colors.primary.main) ),
    // defaultDetailsWidth: '75%',
    // typeNameColor: theme => theme.colors.text.secondary,
    // typeTitleColor: theme => theme.schema.typeNameColor,
    // requireLabelColor: theme => theme.colors.error.main,
    // labelsTextSize: '0.9em',
    // nestingSpacing: '1em',
    // arrow: {
    //   size: '1.1em',
    //   color: theme => theme.colors.text.secondary,
    // },
  },
  // codeBlock: {
  //   backgroundColor: ({ rightPanel }) => darken(0.1, rightPanel.backgroundColor),
  //   tokens: {},
  // },
};