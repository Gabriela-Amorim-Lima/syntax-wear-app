import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container'>
      <h1 className='text-black'>OLÁ</h1>

      <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt nisi eaque voluptatibus dolor quasi tenetur nostrum tempora voluptatem quis aut architecto exercitationem quisquam accusantium voluptas, necessitatibus perferendis libero esse.</p>
    </div>
  )
}
