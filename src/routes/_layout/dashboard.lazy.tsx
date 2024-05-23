import { createLazyFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../../pages/admin/dashboard'

// @ts-ignore
// @ts-nocheck
export const Route = createLazyFileRoute('/_layout/dashboard')({
  component: Dashboard
})