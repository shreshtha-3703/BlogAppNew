import {
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  whiteA,
  indigoDark,
  orange,
  gray,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';

export const defaultTokens = {
  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;"
  },
  fontFamily: {
    base: 'MerriweatherSans',
    light: 'MerriweatherSansLight'
  },
  fontSizes: {
    miny: '.6rem',
    tiny: '.5rem',
    xs: '0.70rem',
    base: '0.925rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
    bt: '0.825rem'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    md: 1.5,
    lg: 1.625,
    xl: 1.75
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  space: {
    0: '0rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2.25rem',
    px: '1px',
    1: '0.1rem',
    2: '0.2rem',
    3: '0.3rem',
    4: '0.4rem',
    5: '0.5rem',
    6: '0.6rem',
    7: '0.7rem',
    8: '0.8rem',
    9: '0.9rem',
    10: '1rem',
    11: '1.25rem',
    12: '1.5rem',
    13: '1.75rem',
    14: '2rem',
    15: '2.25rem',
    16: '2.5rem',
    17: '2.75rem',
    18: '3rem',
    20: '3.25rem',
    24: '3.5rem',
    28: '3.75rem',
    32: '4rem',
    36: '4.25rem',
    40: '4.5rem',
    44: '4.75rem',
    48: '5rem',
    52: '5.25rem',
    56: '5.5rem',
    60: '5.75rem',
    64: '6rem',
    72: '6.25rem',
    80: '6.5rem',
    96: '6.75rem'
  },
  radii: {
    xs: '3px',
    sm: '5px',
    md: '7px',
    base: '14px',
    lg: '14px',
    xl: '18px',
    squared: '33%',
    rounded: '50%',
    pill: '9999px'
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999'
  },
  borderWidth: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px'
  },
  transitions: {
    default: 'all 150ms ease'
  },
  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px'
  }
};

export const defaultUtils = {
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: value
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: value
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: value
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: value
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
    textAlign: value
  }),
  tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
    textTransform: value
  }),

  ts: (value: Stitches.PropertyValue<'textShadow'>) => ({
    textShadow: value
  }),
  to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
    textOverflow: value
  }),
  d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
  dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value
  }),
  fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value
  }),
  fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
  ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value
  }),
  ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
    alignContent: value
  }),
  jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value
  }),
  as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
    alignSelf: value
  }),
  fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
  fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
    fontSize: value
  }),
  fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
    flexBasis: value
  }),
  bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value
  }),
  bf: (value: Stitches.PropertyValue<'backdropFilter'>) => ({
    backdropFilter: value
  }),
  bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    background: value
  }),
  bgBlur: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    bf: 'saturate(180%) blur(10px)',
    bg: `${value}66`
  }),
  bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value
  }),
  backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value
  }),
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value
  }),
  bw: (value: Stitches.PropertyValue<'borderWidth'>) => ({
    borderWidth: value
  }),
  btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
    borderTopRightRadius: value
  }),
  bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
    borderBottomRightRadius: value
  }),
  bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
    borderBottomLeftRadius: value
  }),
  btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
    borderTopLeftRadius: value
  }),
  bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  normalShadow: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 4px 14px 0 $colors${value}`
  }),
  normalShadowVar: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `0 4px 14px 0 ${value}`
  }),
  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value
  }),
  ov: (value: Stitches.PropertyValue<'overflow'>) => ({ overflow: value }),
  ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
    overflowX: value
  }),
  oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
    overflowY: value
  }),
  pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value
  }),
  events: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
    pointerEvents: value
  }),
  us: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),
  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value
  }),
  w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
  h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
  mw: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
  maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
    maxWidth: value
  }),
  mh: (value: Stitches.PropertyValue<'maxHeight'>) => ({
    maxHeight: value
  }),
  maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
    maxHeight: value
  }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value
  }),
  minSize: (value: Stitches.PropertyValue<'width'>) => ({
    minWidth: value,
    minHeight: value,
    width: value,
    height: value
  }),
  sizeMin: (value: Stitches.PropertyValue<'width'>) => ({
    minWidth: value,
    minHeight: value,
    width: value,
    height: value
  }),
  maxSize: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    maxHeight: value
  }),
  sizeMax: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    maxHeight: value
  }),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value
  }),
  scale: (value: Stitches.PropertyValue<'scale'>) => ({
    transform: `scale(${value})`
  }),
  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`
  }),
  tdl: (value: Stitches.PropertyValue<'textDecorationLine'>) => ({
    textDecorationLine: value
  }),
  textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::selection': {
      WebkitTextFillColor: '$colors$text'
    }
  })
};

export const shadows = {
  xs: '-4px 0 4px rgb(0 0 0 / 5%);',
  sm: '0 5px 20px -5px rgba(0, 0, 0, 0.1)',
  md: '0 8px 30px rgba(0, 0, 0, 0.15)',
  lg: '0 30px 60px rgba(0, 0, 0, 0.15)',
  xl: '0 40px 80px rgba(0, 0, 0, 0.25)'
}



export const lightColors = {
  ...red,
  ...green,
  ...whiteA,
  ...indigo,
  ...orange,
  ...grayDark,
  ...gray,

  bg1: '$indigo1',
  bg2: '$indigo2',
  bg3: '$indigo3', //for component bacgrounds
  bgHover: '$indigo4', //when component is hovered
  bgActive: '$indigo5', //when component is clicked
  // borderLight: '$indigo6', //use for subtle components such as sidebars, seperators, cards, alerts
  borderLight: '$gray3', //use for subtle components such as sidebars, seperators, cards, alerts
  border: '$indigo7', //use for interactive components such as buttons
  borderHover: '$indigo8', //when component is hovered
  bgSolid1: '$indigo9', //use for solid bg
  bgSolid2: '$indigo10', //use for solid bg
  pText1: '$indigo11', //low contrast text
  pText2: '$indigo12', //hight contrast text
  // gradient: 'linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)',
  sbg1: '$green1',
  sbg2: '$green2',
  sbg3: '$green3', //for component bacgrounds
  sbgHover: '$green4', //when component is hovered
  sbgActive: '$green5', //when component is clicked
  sborderLight: '$green6', //use for subtle components such as sidebars, seperators, cards, alerts
  sborder: '$green7', //use for interactive components such as buttons
  sborderHover: '$green8', //when component is hovered
  sbgSolid1: '$green9', //use for solid bg
  sbgSolid2: '$green10', //use for solid bg
  spText1: '$green11', //low contrast text
  spText2: '$green12', //hight contrast text
  // gradient: 'linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)',
  ebg1: '$red1',
  ebg2: '$red2',
  ebg3: '$red3', //for component bacgrounds
  ebgHover: '$red4', //when component is hovered
  ebgActive: '$red5', //when component is clicked
  eborderLight: '$red6', //use for subtle components such as sidebars, seperators, cards, alerts
  eborder: '$red7', //use for interactive components such as buttons
  eborderHover: '$red8', //when component is hovered
  ebgSolid1: '$red9', //use for solid bg
  ebgSolid2: '$red10', //use for solid bg
  epText1: '$red11', //low contrast text
  epText2: '$red12', //hight contrast text
  // gradient: 'linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)',
  obg1: '$orange1',
  obg2: '$orange2',
  obg3: '$orange3', //for component bacgrounds
  obgHover: '$orange4', //when component is hovered
  obgActive: '$orange5', //when component is clicked
  oborderLight: '$orange6', //use for subtle components such as sidebars, seperators, cards, alerts
  oborder: '$orange7', //use for interactive components such as buttons
  oborderHover: '$orange8', //when component is hovered
  obgSolid1: '$orange9', //use for solid bg
  obgSolid2: '$orange10', //use for solid bg
  opText1: '$orange11', //low contrast text
  opText2: '$orange12', //hight contrast text
  // gradient: 'linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)',
  gbg1: '$gray1',
  gbg2: '$gray2',
  gbg3: '$gray3', //for component bacgrounds
  gbgHover: '$gray4', //when component is hovered
  gbgActive: '$gray5', //when component is clicked
  gborderLight: '$gray6', //use for subtle components such as sidebars, seperators, cards, alerts
  gborder: '$gray7', //use for interactive components such as buttons
  gborderHover: '$gray8', //when component is hovered
  gbgSolid1: '$gray9', //use for solid bg
  gbgSolid2: '$gray10', //use for solid bg
  gpText1: '$gray11', //low contrast text
  gpText2: '$gray12', //hight contrast text
  // gradient: 'linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)',

  primarybg1: 'rgba(239,110,77,0.05)',
  primarybg2: 'rgba(239,110,77,0.2)',

  secondarybg1: 'rgba(54,59,100,0.05)',
  secondarybg2: 'rgba(54,59,100,0.1)',
  secondaryText1: 'rgba(54,59,100,0.8)',
  secondaryText2: 'rgba(54,59,100,0.9)',

  primary1: '#F6EFED', //#fdf0ec
  primary2: '#F6E2DD', //#f8c5b7
  primary3: '#f5a894',
  primary4: '#f28b70',
  primary5: '#ef6e4d',
  primary6: '#bf583d',
  primary7: '#8f422e',
  primary8: '#5f2c1e',
  primary9: '#2f160f',
  primary10: '#000000',
  gradient: 'linear-gradient(90deg, #0463EF, #66E5FB)',

  secondary1: '#d6d7e0',
  secondary2: '#aeb0c1',
  secondary3: '#8689a2',
  secondary4: '#5e6283',
  secondary5: '#363b64',
  secondary6: '#2b2f50',
  secondary7: '#20233c',
  secondary8: '#151728',
  secondary9: '#0a0b14',
  secondary10: '#000000',


  gray: '#202020', // page gray background


  yellow: '#FBC040', // yellow bg color
  // yellow10:'#9F6B16', // text color of yellow bg
  yellow10: '#543708', // text color of yellow bg
  primary: '#005cb3',// blue text
  blue: '#D6EAFF', // blue background
  blue1: '#0A51A4', // blue icon color
  darkblue: '#0A51A4',
  purple: '#E328AF',
  blue2: '#5ECFFF',
  blueActiveTab: '#3B77B7',
  blueTab: '#D6EAFF',
  green: '#368D00',
  yellowBorder: '#F7B500',
  goalBlue: '#005CB3',
  mediumBlue: '#339cff',
  lightBlue: '#B3DAFF',
  orangeLight: '#FCD682',
  yellowButton: '#FAAC05',
  lightGreen: '#70E858',
  iconBlue: ' #3B77B7',
  backgroundColor: '#f5f5f5',
  black:"#000000",

}

export const darkColors = {
  ...grayDark,
  ...blueDark,
  ...redDark,
  ...greenDark,
  ...indigoDark
}