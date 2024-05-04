import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from '../components/themes'

// @ts-ignore
// @ts-nocheck
export const Route = createRootRoute({
  component: () => (
    <ThemeUIProvider theme={theme}>
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeUIProvider>
  ),
})