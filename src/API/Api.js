import axios from "axios";
import { toast } from 'react-toastify';
import { getAuthToken, logout, setAuthToken, setEmail, setOTP, setUserDetails } from "../helper/SesionHelper";
import { store } from "../redux/store/Store";
import { setProfile } from "../redux/slices/ProfileSlice";

const baseUrl = "https://to-do-tasker-ip1o.onrender.com/api/v1"; //this is the base url this application
const token = {headers:{token: getAuthToken()}} //set token in header


// registration api call start
 export function RegistrationRequest(firstName,lastName,email,password,profilePicture){
    let url = `${baseUrl}/registration`
    let body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        profilePicture: profilePicture
    }
    return axios.post(url, body)
    .then(response => {
        if(response.status === 200) {

            if(response.data.status ==='failed'){
              if(response.data.data.email === 1){
                  toast.error('Email already exists')
                  return false
              }
            
            }
            else {
                toast.success('Registration successful')
                return true
              
            }
          
        }

        else{
            toast.error('Something went wrong')
            return false
        }
       
     })
     .catch(error => {
        toast.error('Something went wrong')
        return false
     })

 }
// registration api call end 

// login api call start
export function LoginRequest(email,password){
    let url = `${baseUrl}/login`
    let postBody = {
        email: email,
        password: password
    }
    return axios.post(url, postBody)
    .then((response) => {
        if(response.status === 200) {
            if(response.data.status === 'faild'){
                if(response.data.data ==='User not found'){
                    return {error: 'User not found'}
                }
                else if(response.data.data === 'Password not match'){
                  return {error: 'Password not match'}
                }
                else{
                    // return {error: 'Something went wrong'}
                    return false
                }

            }
            else {
                setAuthToken(response.data.token)
                setUserDetails(response.data.data)
                return true
            }

        }
        else{
            // toast.error('Something went wrong')
            return false
        }

    })
    .catch((error) => {
    //    toast.error('somthing went error')
       return false
     })
  
}
// login api call end


// email verify start 
export function EmailVerifyRequest(email){
    let url = `${baseUrl}/email-verify/${email}`
    return axios.get(url)
    .then((response) => {
        if(response.status === 200) {
            if(response.data.status === 'faild'){
                toast.error('User not found')
                return false
            }

            else{
                toast.success('OTP send successfully')
                setEmail(email)
                return true
            }
        }

         else{
            toast.error('Something went wrong')
            return false
        }

    })
}
// email verify send

// Otp verify start 
export function OtpVerifyRequest(email,otp){
    let url = `${baseUrl}/otp-verify/${email}/${otp}`
    return axios.get(url)
    .then((response) => {
        if(response.status==200){
            if(response.data.status === "faild"){
                toast.error('Wrong OTP')
                return false

            }
            else{
                setOTP(otp)
                return true
                
            }
        }
       
    })
    .catch((error) => {
       toast.error('somthing went error')
       return false
     })
   

} 
// Otp verify end


// Reset password start
export function ResetNewPasswordRequest(email, otp, password){
  let url = `${baseUrl}/reset-password`

     let postBody = {
         email: email,
         otp: otp,
         password: password
     }
     return axios.post(url, postBody)
     .then((response) => {
        if(response.status=== 200){
            return true
        }

     })
     .catch((error) => {
       toast.error('somthing went error')
       return false
     })
  
}
// Reset password end

// get Profile Start
export function getProfileDetailsRequest() {
    let url = `${baseUrl}/profile-details`

    return axios.get(url, token)
    .then((response) => {
        if(response.status === 200) {
            store.dispatch(setProfile(response.data.data))
            return true
        }
        else{
            toast.error('Something went wrong')
            
        }

    })
    .catch((error) => {
       if(error.response && error.response.status === 401){
        toast.error('Something went wrong')
        logout()
       }
       else{
        toast.error('Something went wrong')
       }
     })

     
}
// get Profile End 

// Update  profile  start
export function getUpdateProfileRequest(email,firstName,lastName,profilePicture) {
    let url = `${baseUrl}/user-profile-update`

     let postBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      profilePicture: profilePicture
    }

    let userDetails = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        photo: profilePicture
    }

    return axios.post(url, postBody, token)
    .then((response) => {
        if(response.status === 200) {
            setUserDetails(userDetails)
            return true; // Indicate success
        } else {
            throw new Error('Something went wrong'); // Throw error for failure
        }
    })
    .catch((error) => {
        if(error.response && error.response.status === 401){
         toast.error('Something went wrong')
         logout()
        }
        else{
         toast.error('Something went wrong')
        }
      })
}

// Update  profile end

// Create todo api call start


// create todo api start 

export function CreateTodoApi(title, description){
    let url = `${baseUrl}/create-todo`

    let postBody = {
        title: title,
        description: description,
        status: 'New'
    }
    return axios.post(url, postBody, token)
    .then((response) => {
        if(response.status === 200) {
            toast.success('Todo created successfully')
            return true
        }
        else{
            toast.error('Something went wrong')
            return false
            
        }

    })
    .catch((error) => {
        if(error.response && error.response.status === 401){
         toast.error('Something went wrong')
         logout()
        }
        else{
         toast.error('Something went wrong')
        }
      })
   

}
// create todo api end

// Create todo api call end


