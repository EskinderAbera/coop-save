import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/list-package')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/list-package"!</div>
}
