import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import LOGO from './logo.svg'
import LOGOMARK from './logomark.svg'
import PARTICLE_1A from './particle_1a.svg'
import PARTICLE_1B from './particle_1b.svg'
import PARTICLE_2A from './particle_2a.svg'
import PARTICLE_2B from './particle_2b.svg'
import PARTICLE_3A from './particle_3a.svg'
// import PARTICLE_3B from './particle_3b.svg'
import PARTICLE_4A from './particle_4a.svg'
// import PARTICLE_4B from './particle_4b.svg'
import PARTICLE_5A from './particle_5a.svg'
import PARTICLE_5B from './particle_5b.svg'

export { LOGO, LOGOMARK }
export const PARTICLES = [
  PARTICLE_1A,
  PARTICLE_1A,
  PARTICLE_1B,
  PARTICLE_2A,
  PARTICLE_2A,
  PARTICLE_2B,
  PARTICLE_3A,
  // PARTICLE_3B,
  PARTICLE_4A,
  // PARTICLE_4B,
  PARTICLE_5A,
  PARTICLE_5A,
  PARTICLE_5B,
]
export const PLUS = PARTICLE_3A

/**
 * Usable fonts in this website.
 */
export const Fonts = {
  display: ['Metropolis', 'Proxima Nova', 'Montserrat', ...getSystemFonts()].join(', '),
  body: ['Noto Sans', 'Noto Sans Thai UI', ...getSystemFonts()].join(', '),
}

/**
 * Usable colors in this website.
 */
export const Colors = {
  /* Old */
  grey600: '#555',
  reactBlue: '#00d8ff',

  /* New */
  brightest: '#fff',
  bright: '#dedede',
  darkest: '#222',
  dark: '#343334',
  react: '#61dafb',
  anotherReact: '#00badc', // Try
  reactBright: '#99ebfd',
  reactDark: '#282c34',
  reactComplementary: '#ff8a19',

  gold: '#e7d371',
  goldHighlight: '#f8f3d6',
  silver: '#bdbdbd',
  silverHighlight: '#fff',
  platinum: '#fff',
  platinumHighlight: '#dadada',
  platinumGlow: '#dadada',
}

/**
 * Breakpoints for responsive design.
 */
export const MediaQueries = {
  /** Horizontal mobile phone and above. */
  sm: '@media (min-width: 576px)',
  /** Tablet and above. */
  md: '@media (min-width: 768px)',
  /** Landscape tablet and above. */
  lg: '@media (min-width: 992px)',
  /** Desktop and above. */
  xl: '@media (min-width: 1200px)',
}

export const XS_MOBILE_BREAKPOINT = 350
export const MOBILE_BREAKPOINT = 767
export const TABLET_BREAKPOINT = 1023

export const ViewType = {
  xsMobile: `@media (max-width: ${XS_MOBILE_BREAKPOINT}px)`,
  mobile: `@media (max-width: ${MOBILE_BREAKPOINT}px)`,
  tablet: `@media (min-width: ${MOBILE_BREAKPOINT + 1}px) and (max-width: ${TABLET_BREAKPOINT}px)`,
}

/**
 * The base font size for mobile phones.
 */
const BASE_FONT_SIZE_XS = '16px'

/**
 * The base font size for tablets and above.
 */
const BASE_FONT_SIZE_MD = '20px'

/**
 * Convert a "beat" to a CSS size unit. Used to establish a
 * [vertical rhythm](https://zellwk.com/blog/why-vertical-rhythms/).
 * @param {number} beats Number of beats
 */
export function beat (beats) {
  return `${beats * 1.52}rem`
}

/**
 * Computes the absolute font size for
 * [typographic scale](http://spencermortensen.com/articles/typographic-scale/).
 *
 * We use [7 tone equal temperament](https://en.wikipedia.org/wiki/Equal_temperament#5_and_7_tone_temperaments_in_ethnomusicology)
 * which is the [tuning of Thai traditional instruments](https://en.wikipedia.org/wiki/Ranat_ek#Tuning).
 *
 * @param {number} n The font size, where
 *
 *   - `-14` = 0.25x normal font size.
 *   - `-7` = 0.5x normal font size.
 *   - `0` = normal font size.
 *   - `7` = 2x normal font size.
 *   - `14` = 4x normal font size.
 */
export function fontSize (n) {
  return `${(2 ** (n / 7)).toFixed(3)}rem`
}

/**
 * Tracking (letter-spacing).
 */
export const Tracking = {
  tight: '-0.05em',
  normal: '0',
  wide: '0.05em',
  extraWide: '0.1em',
}

/**
 * The layout component. Should be used on each page.
 */
export class Layout extends React.Component {
  render () {
    return <TypographicContext>{this.props.children}</TypographicContext>
  }
}

/**
 * Establishes a typographic context by:
 *
 * - resetting font size
 * - resetting line height
 * - setting appropriate margins for direct children
 */
export const TypographicContext = styled.div({
  fontSize: '1rem',
  '> p, > blockquote, > ul, > ol, > dl, > table, > pre': {
    marginTop: beat(1),
    marginBottom: 0,
    '&:first-child': {
      marginTop: 0,
    },
  },
})

function injectGlobalStyles () {
  function fontFace (src, family, weight) {
    return `@font-face {
      font-family: "${family}";
      font-weight: ${weight};
      src: url(${src}) format('woff2');
    }`
  }

  injectGlobal`
    ${fontFace(require('./vendor/fonts/Metropolis-Light.woff2'), 'Metropolis', 300)}
    ${fontFace(require('./vendor/fonts/Metropolis-Regular.woff2'), 'Metropolis', 400)}
    ${fontFace(require('./vendor/fonts/Metropolis-Medium.woff2'), 'Metropolis', 500)}
    ${fontFace(require('./vendor/fonts/Metropolis-SemiBold.woff2'), 'Metropolis', 600)}
    ${fontFace(require('./vendor/fonts/Metropolis-Bold.woff2'), 'Metropolis', 700)}
    ${fontFace(require('./vendor/fonts/NotoSans-Light-Latin.woff2'), 'Noto Sans', 300)}
    ${fontFace(require('./vendor/fonts/NotoSans-SemiBold-Latin.woff2'), 'Noto Sans', 600)}
    ${fontFace(require('./vendor/fonts/NotoSansThaiUI-Light.woff2'), 'Noto Sans Thai UI', 300)}
    ${fontFace(require('./vendor/fonts/NotoSansThaiUI-SemiBold.woff2'), 'Noto Sans Thai UI', 600)}
  `

  injectGlobal({
    'html, body': {
      fontFamily: Fonts.body,
      fontWeight: 300,
      fontSize: BASE_FONT_SIZE_MD,
      color: Colors.brightest,
      margin: 0,
      padding: 0,
      background: `linear-gradient(${Colors.darkest}, ${Colors.reactBright})`,
      [ViewType.mobile]: {
        fontSize: BASE_FONT_SIZE_XS,
      },
    },
    a: {
      textDecoration: 'none',
      color: Colors.brightest,
    },
    'button, input, textarea': {
      fontFamily: 'inherit',
    },
  })
}

function getSystemFonts () {
  return [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ]
}

injectGlobalStyles()
