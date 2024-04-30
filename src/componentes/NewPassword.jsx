import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye and eye-slash icons
import { ResetNewPasswordRequest } from '../API/Api';
import { useNavigate } from "react-router-dom";
import { getEmail, getOTP } from '../helper/SesionHelper';
import { toast } from 'react-toastify';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let [password, setPassword]= useState('')

 const handleSetNewPassword =()=> {
  if(!password){
    alert('Please enter new password')
  }
  else{
    ResetNewPasswordRequest(getEmail(), getOTP(), password)
     .then((res) => {
       if(res === true){
        toast.success('Password updated successfully')
         navigate('/login')
         localStorage.clear(getEmail(), getOTP())
       }
      })

       .catch((err) => {
          console.log(err)
        })
  }

 }


  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="w-[500px] p-9">
      <h1 className="text-center text-2xl text-black mb-8 font-bold capitalize">Set new password</h1>
    <div className='relative'>
    <input onChange={(e)=> setPassword(e.target.value)}  type={showPassword ? "text" : "password"} placeholder="New Password" className="w-full border border-secondary p-2 rounded-md outline-none "  />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showPassword ? (
                <FaEyeSlash onClick={togglePasswordVisibility} className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye onClick={togglePasswordVisibility} className="text-gray-500 cursor-pointer" />
              )}
            </div>
    </div>
     <button onClick={handleSetNewPassword} className="w-full items-center p-2 my-2 rounded-md bg-secondary text-white mt-3">Submit</button>
    </div>
    
  </div>
  )
}

export default NewPassword