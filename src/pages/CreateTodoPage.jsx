import { Suspense,lazy } from "react"
import CreateTodo from "../componentes/CreateTodo"
import MainLayout from "../layouts/MainLayout"

const Loader = lazy(()=> ('../componentes/Loader'))

const CreateTodoPage = () => {
  return (
    <div>
     <MainLayout>
      <Suspense fallback={<Loader/>}>
      <CreateTodo/>
      </Suspense>
     </MainLayout>
    </div>
  )
}

export default CreateTodoPage