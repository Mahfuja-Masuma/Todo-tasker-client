
import ProgressTodo from '../componentes/ProgressTodo'
import MainLayout from '../layouts/MainLayout'
import { Suspense, lazy } from 'react'
const Loader = lazy(()=> ( '../componentes/Loader'))

const ProgressTodoPage = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<Loader/>} >
        <ProgressTodo/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default ProgressTodoPage