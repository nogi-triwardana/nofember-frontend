import type { Theme } from "theme-ui"

export const theme: Theme = {
  fonts: {
    body:
    `'Roboto', sans-serif`,
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  buttons: {
    primary: {
      color: '#FCFCFD',
      bg: '#2a3bd1',
      cursor: 'pointer',
      fontWeight: 400,
      ':hover': {
        // opacity: 0.5
        bg: '#212fa6',
        transition: 'all 0.3s'
      }
    }
  },
  colors: {
    bgLight: '#fcfafa',
    text: '#333333',
    background: '#fff',
    primary: '#334155',
    secondary: '#30c',
    borderColorTable: '#eaecf0',
    gray50: 'rgb(249 250 251)',
    gray100: 'rgb(243 244 246)',
    gray200: 'rgb(229 231 235)',
    gray300: 'rgb(209 213 219)',
    gray400: 'rgb(156 163 175)',
    gray500: 'rgb(107 114 128)',
    gray600: 'rgb(75 85 99)',
    gray700: 'rgb(55 65 81)',
    gray800: 'rgb(31 41 55)',
    gray900: 'rgb(17 24 39)',
    gray950: 'rgb(3 7 18)',
    blue50: 'rgb(168 198 237)',
    blue100: 'rgb(128 175 237)',
    blue200: 'rgb(102 160 237)',
    blue300: 'rgb(74 144 237)',
    // muted: '#f6f6f6',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
}