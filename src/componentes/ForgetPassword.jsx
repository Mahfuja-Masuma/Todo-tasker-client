import { useState } from "react"
import { toast } from 'react-toastify';
import { EmailVerifyRequest } from "../API/Api";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {


  let [email, setEmail]= useState('')
  let [loader, setLoader] = useState(false)
  const navigate = useNavigate()

  const handleSendEmail = () => {
    if(!email){
      toast.error('Email is required')
    }else{
      setLoader(true)
      EmailVerifyRequest(email)
      .then((result)=>{
        if(result === true) {
          setLoader(false)
          toast.success('OTP sent successfully')
          navigate('/otp-verify')
        } 
        else{
          setLoader(false)
          toast.error('user not found')
        }

      })
    }
   
  } 

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[500px] p-9 bg-quaternary">
        <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter your email" className="w-full border border-primary p-2 rounded-md outline-none " />
        {
          loader?
          <button onClick={handleSendEmail} className="w-full p-1 my-2 rounded-md bg-primary text-white mt-3">lodding...</button>
          :
          <button onClick={handleSendEmail} className="w-full p-1 my-2 rounded-md bg-primary text-white mt-3">Submit</button>
        }
        
      </div>
      
    </div>
  )
}

export default ForgetPassword