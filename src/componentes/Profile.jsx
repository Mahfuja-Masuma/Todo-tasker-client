import { useEffect, useState } from "react"
import { getProfileDetailsRequest, getUpdateProfileRequest} from "../API/Api"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { getUserDetails, setUserDetails } from "../helper/SesionHelper"


const Profile = () => {
  const [email, setEmail]= useState("")
 const [firstName, setFirstName]= useState("")
 const [lastName, setLastName]= useState("")
 const [profilePicture, setProfilePicture]= useState("")
  const navigate = useNavigate()


const profile = useSelector(state=> state.profile.profile)


  useEffect(() => {
    getProfileDetailsRequest()
    .then(()=> {
      setFirstName(profile?.firstName)
      setLastName(profile?.lastName)
      setEmail(profile?.email)
       setProfilePicture(profile?.profilePicture)
       
 

    })
  },[profile?.firstName, profile?.lastName, profile?.email, profile?.ProfilePicture])


  // image conver 64 bit start

  const convertToBase64 = (file)=>{
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = error => reject(error);
    });
  }

  // image conver 64 bit end



  const handleImage= async(e)=> {
    const file = e.target.files[0]
    convertToBase64(file)
    .then((result)=> {
      setProfilePicture(result) 

    })
    .catch((error)=> {
       toast.error("Couldn't convert")
     })
    

  }

  // update Profile start
  const handleUpdateProfile=() =>{
    if(firstName&&lastName){
      getUpdateProfileRequest(email,firstName,lastName,profilePicture)
      .then((result)=> {
        if(result===true){
           toast.success("Profile Updated")
           window.location.href = "/" 
        }
        else{
          toast.error("Something went wrong")
        }
         
      })
      
      

    }
    else{
      toast.error('All fields are required')
    }
  }
  // update Profile end

  return (
 <div>
  <h1 className="text-4xl text-primary font-bold">Update Profile</h1>
     <div className="mb-5 border-b border-primary">
      <img src={profilePicture?profilePicture:getUserDetails?.photo} className="w-[200px] h-[200px] rounded-full my-2" alt="" />     
    </div>

    <div className="w-[400px]">
    <input onChange={handleImage}  type="file" placeholder="image" className="border w-full outline-none px-5 py-2 mb-3 border-primary"/>
    <input readOnly value={email} type="email" placeholder="Your Email" className="border my-3 w-full outline-none px-5 py-2 mb-3 border-primary"/>
<input onChange={(e)=> setFirstName(e.target.value)} value={firstName} type="text" placeholder="First Name" className="border  w-full outline-none px-5 py-2 border-primary"/>
<input onChange={(e)=> setLastName(e.target.value)} value={lastName} type="text" placeholder="Last Name" className="border  w-full outline-none px-5 py-2 mt-3 border-primary"/>



       <button onClick={handleUpdateProfile} className="mt-5 px-5 py-2 bg-primary text-white w-full">Update</button>
    </div>
 </div>
  )
}

export default Profile