
import MainLayout from '../layouts/MainLayout'
import { Suspense, lazy } from 'react'
import Loader from '../componentes/Loader'

const Home = lazy(() => import('../componentes/Home')) 

const HomePage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loader/>}>
      <Home/>
      </Suspense>
      
    </MainLayout>
  )
}

export default HomePage
