import CompletedTodo from '../componentes/CompletedTodo'
import MainLayout from '../layouts/MainLayout'
import { Suspense ,lazy } from 'react'

const Loader = lazy(()=> ( '../componentes/Loader'))

const CompletedTodoPage = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<Loader/>}>
        <CompletedTodo/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default CompletedTodoPage