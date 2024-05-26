import { createLazyFileRoute } from '@tanstack/react-router'
import { Transfer } from '../../pages/admin/transfer'

export const Route = createLazyFileRoute('/_layout/transfer')({
  component: Transfer
})