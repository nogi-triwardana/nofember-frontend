import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
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
            }
          `
        }
      />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeUIProvider>
  ),
})