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