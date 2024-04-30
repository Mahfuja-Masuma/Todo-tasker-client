import { useState } from "react";
import VerificationInput from "react-verification-input";
import { OtpVerifyRequest } from "../API/Api";
import { getEmail } from "../helper/SesionHelper";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {

  let [otp, setOtp]= useState("")
  let [otpError, setOtpError]= useState("") 
  const navigate = useNavigate()

  const handleVerifyOtp =()=> {
    if(otp.length == 6){
      OtpVerifyRequest(getEmail(), otp)
      .then((result)=>{
         if(result === true) {
          navigate("/create-new-password")
         }
         else{
          setOtpError("Wrong OTP")
         }

       })
    
    }else{
     setOtpError("please enter 6 digits otp")
    }
  }
  return (
    <div className="h-screen w-full flex justify-center items-center">
    <div className="w-[500px] p-9">
    <VerificationInput onChange={(e)=> setOtp(e)} validChars="0-9" />
    <p className="text-red-500">{otpError}</p>
      <button onClick={handleVerifyOtp}  className="items-center p-2 my-2 rounded-md bg-quaternary text-white mt-3">Submit</button>
    </div>
    
  </div>
  )
}

export default OtpVerify