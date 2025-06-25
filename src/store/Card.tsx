
import { styled } from './stitches.config';


export const StyledCard = styled('div', {
  margin: "$4",
  padding: "$4",
  borderRadius: "$md",
  position: 'relative',
  // display: 'inline',
  // overflow: 'hidden',
  height: 'auto',
  boxSizing: 'border-box',
  variants: {
    color: {
      default: {
        backgroundColor: "$whiteA12",
        marginTop: "$4",
        marginLeft: "$0",
        marginRight: "$0"
      },
      blue: {
        backgroundColor: "$blue",
      },
      bluelight: {
        backgroundColor: 'rgba(10,81,164, 0.5)',
        // backgroundColor: rgba($primary-color,0.1);
        padding: 15
      },
      bluedark: {
        backgroundColor: '$blue1',
        // backgroundColor: rgba($primary-color,0.1);
        padding: 15
      },
      orangeLight: {
        backgroundColor: "$orangeLight",
        marginTop: "$4",
        marginLeft: "$0",
        marginRight: "$0"
      },
      themeBlue: {
        backgroundColor: "#005cb3",
        marginTop: "$4",
        marginLeft: "$0",
        marginRight: "$0"
      }
    },
    height: {
      full: {
        height: '77vh',
        // height:'calc(100% – 40px – 30px)'
      }
    },
    //bordered
    bordered: {
      true: {
        borderStyle: 'solid',
        borderColor: '$gray6'
      },
      false: {
        borderWidth: 0
      }
    },
    borderBlue: {
      true: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '$primary'
      },
      false: {
        borderWidth: 0
      }
    },
    //clickable
    clickable: {
      true: {
        cursor: 'pointer',
        us: 'none',
        WebkitTapHighlightColor: 'transparent',
        '&:focus:not(&:focus-visible)': {
          boxShadow: 'none'
        },
        '&:focus': {
          outline: 'none',
        },
        '@safari': {
          WebkitTapHighlightColor: 'transparent',
          outline: 'none'
        }
      }
    },
    //shadow
    shadow: {
      true: {
        boxShadow: "$sm"
      }
    },
    noshadow: {
      true: {
        boxShadow: "none",
        margin: "$0",
      }
    },
    //hoverable
    hoverable: {
      true: {
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '$md'
        }
      }
    },
    animated: {
      true: {
        transition: '$default'
      },
      false: {
        transition: 'none'
      }
    },
  },
  compoundVariants: [
    // clickable && animated
    {
      clickable: true,
      animated: true,
      css: {
        '&:active': {
          scale: 0.97
        }
      }
    }
  ],
  defaultVariants: {
    color: 'default',
    animated: true,
    bordered: false,
    shadow: true,
    clickable: false
  }
})