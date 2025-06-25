import { defaultTokens, defaultUtils, lightColors, shadows } from './common';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

const stitches = createStitches({
    theme: {
      ...defaultTokens,
      colors:lightColors,
      shadows: {
        ...shadows
      },
    },
    utils: defaultUtils,
    media: {
      bp0: '(min-width: 240px)',
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  });

  export const cssFocusVisible = stitches.css({
    variants: {
      isFocusVisible: {
        true: {
          outline: 'none',
          boxShadow:
            '0 0 0 2px $colors$background, 0 0 0 4px $colors$primary !important'
        }
      }
    }
  });


  export const {theme, styled, keyframes} = stitches;
