import { createLazyFileRoute } from '@tanstack/react-router'
import { Login } from '../pages/login'

// @ts-ignore
// @ts-nocheck
export const Route = createLazyFileRoute('/login')({
  component: Login
})