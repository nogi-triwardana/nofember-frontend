import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '../components/themes'
import { css, Global } from '@emotion/react'

// @ts-ignore
// @ts-nocheck
export const Route = createRootRoute({
  component: () => (
    <ThemeUIProvider theme={theme}>
      <Global
        styles={
          css`
            :root {
              --border-table-color: ${theme?.colors?.borderColorTable};
              --bg-light: ${theme?.colors?.bgLight};
              --gray-200: ${theme?.colors?.gray200};
              --gray-300: ${theme?.colors?.gray300};
              --gray-400: ${theme?.colors?.gray400};
              --gray-500: ${theme?.colors?.gray500};
              --gray-600: ${theme?.colors?.gray600};
              --gray-700: ${theme?.colors?.gray700};
              --gray-800: ${theme?.colors?.gray800};
              --gray-900: ${theme?.colors?.gray900};
              --gray-950: ${theme?.colors?.gray950};
              --blue50: ${theme?.colors?.blue50};
              --blue100: ${theme?.colors?.blue100};
              --blue200: ${theme?.colors?.blue200};
              --blue300: ${theme?.colors?.blue300};
            }

            *:focus {
              outline: none;
            }
          `
        }
      />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeUIProvider>
  ),
})