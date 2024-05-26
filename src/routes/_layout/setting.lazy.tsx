import { createLazyFileRoute } from '@tanstack/react-router'
import { Setting } from '../../pages/admin/setting'

export const Route = createLazyFileRoute('/_layout/setting')({
  component: Setting
})