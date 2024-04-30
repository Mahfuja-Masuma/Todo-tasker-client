import NewTodo from '../componentes/NewTodo'
import MainLayout from '../layouts/MainLayout'
import { Suspense, lazy } from 'react'

const Loader = lazy(()=> ('../componentes/Loader'))

const NewTodoPage = () => {
  return (
    <div>
     <MainLayout>
      <Suspense fallback={<Loader/>}>
      <NewTodo/>
      </Suspense>
     </MainLayout>
    </div>
  )
}

export default NewTodoPage