
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import NewTodoPage from './pages/NewTodoPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import CreateTodoPage from './pages/CreateTodoPage'

import CompletedTodoPage from './pages/CompletedTodoPage'
import CanceledTodoPage from './pages/CanceledTodoPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import ProfilePage from './pages/ProfilePage'
import NewPasswordPage from './pages/NewPasswordPage'
import OtpVerifyPage from './pages/OtpVerifyPage'
import Page404 from './pages/Page404'
import ProgressTodoPage from './pages/ProgressTodoPage'
import { getAuthToken } from './helper/SesionHelper'


function App() {

if(getAuthToken()){
  return(
<BrowserRouter>
<Routes>




  <Route path="/" element={<HomePage/>} />
  {/* todo routes */}
  <Route path="/create-todo" element={<CreateTodoPage/>} />
  <Route path="/new-todo" element={<NewTodoPage/>} />
  <Route path="/progress-todo" element={<ProgressTodoPage/>} />
  <Route path="/complete-todo" element={<CompletedTodoPage/>} />
  <Route path="/cancelled-todo" element={<CanceledTodoPage/>} />
  <Route path="/profile" element={<ProfilePage/>} />

  <Route path="/login" element={<Navigate to='/' replace/>} />
  <Route path="*" element={<Page404/>} />

</Routes>
</BrowserRouter>
  )
}
else{
  return(
    <BrowserRouter>
<Routes>

  <Route path="/login" element={<LoginPage/>} />
  <Route path="/registration" element={<RegistrationPage/>} />
  <Route path="/forgot-password" element={<ForgetPasswordPage/>} />
  <Route path="/otp-verify" element={<OtpVerifyPage/>} />
  <Route path="/create-new-password" element={<NewPasswordPage/>} />

  <Route path="/" element={<Navigate to='/login' replace/>} />

  <Route path="*" element={<Page404/>} />

</Routes>
</BrowserRouter>

  )
}

 
}

export default App

// api link
//https://to-do-tasker-ip1o.onrender.com/
