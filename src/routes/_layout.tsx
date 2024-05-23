import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/templates/Layout'

export const Route = createFileRoute('/_layout')({
  component: () => {
    return (
      <Layout>
        <Outlet />
      </Layout>
    )
  }
})