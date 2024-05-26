import { createLazyFileRoute } from '@tanstack/react-router'
import { GuestsBook } from '../../pages/admin/guests-book'

export const Route = createLazyFileRoute('/_layout/guests-book')({
  component: GuestsBook
})