import { useState } from "react"
import { toast } from "react-toastify"
import { CreateTodoApi } from "../API/Api"


const CreateTodo = () => {

  let [title, setTitle]= useState("")
  let [description, setDescription]= useState("")

 const handleCreate =() => {
  if(!title){
    toast.error("Title is required")
  }
  if(!description){
    toast.error("Description is required")
  }
  else{
     CreateTodoApi(title, description)
     .then((result) => {
       if(result === true){
        
         window.location.href = "/new-todo"
       }
       else{
         toast.error("Something went wrong")
       }
     })
     .catch((error) => {
        toast.error("Something went wrong")
      })
  }

  }


  return (
    <div>
      <h1 className='text-center text-2xl text-secondary font-bold mb-6'>CreateTodo</h1>
      <div className='w-[500px] mx-auto mt-5 bg-white bg-opacity-[.3] rounded-lg p-10'>
        <input onChange={(e)=> setTitle(e.target.value)} className='border border-secondary rounded-lg outline-none w-full p-2' type="text" placeholder='Title' />
        <textarea onChange={(e)=> setDescription(e.target.value)} className='border border-secondary rounded-lg outline-none w-full px-2 py-6 mt-4' type="text" placeholder='Descreption'/>
       <button onClick={handleCreate} className='w-full p-2 my-2 rounded-md bg-secondary text-white mt-4'>Create Todo</button>
      </div>

    </div>
  )
}

export default CreateTodo