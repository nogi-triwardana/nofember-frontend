import { createLazyFileRoute } from '@tanstack/react-router'
import { Invitation } from '../../pages/admin/invitation'

export const Route = createLazyFileRoute('/_layout/invitation')({
  component: Invitation
})