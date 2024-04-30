import CanceledTodo from '../componentes/CanceledTodo'
import MainLayout from '../layouts/MainLayout'
import { Suspense, lazy } from 'react'
const Loader = lazy(()=> ( '../componentes/Loader'))

const CanceledTodoPage = () => {
  return (
    <div>
     <MainLayout>
      <Suspense fallback={<Loader/>}>
      <CanceledTodo/>
      </Suspense>
     </MainLayout>
    </div>
  )
}

export default CanceledTodoPage