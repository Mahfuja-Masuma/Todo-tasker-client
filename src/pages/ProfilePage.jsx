import { Suspense,lazy } from 'react'
import Profile from '../componentes/Profile'
import MainLayout from '../layouts/MainLayout'
const Loader = lazy(()=> ( '../componentes/Loader'))

const ProfilePage = () => {
  return (
    <div>
     <MainLayout>
      <Suspense fallback={<Loader/>}>
      <Profile/>
      </Suspense>
     </MainLayout>
    </div>
  )
}

export default ProfilePage