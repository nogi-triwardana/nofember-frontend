import { createLazyFileRoute } from '@tanstack/react-router'
import { Guests } from '../../pages/admin/guests'

export const Route = createLazyFileRoute('/_layout/guests')({
  component: Guests
})