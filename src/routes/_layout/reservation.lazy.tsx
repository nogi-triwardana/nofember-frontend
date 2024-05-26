import { createLazyFileRoute } from '@tanstack/react-router'
import { Reservation } from '../../pages/admin/reservation'

export const Route = createLazyFileRoute('/_layout/reservation')({
  component: Reservation
})