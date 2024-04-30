

const NewTodo = () => {
  return (
    <div className="flex flex-wrap justify-between gap-y-8">

      <div className="p-6 w-[35%] bg-senary bg-opacity-[.6] rounded-lg">
        <h1 className="text-2xl font-bold text-secondary">New Todo</h1>
       <p className="text-base text-primary my-2">Details</p>
       <h3 className=" font-bold text-base text-primary">Status : <span className="text-quinary">New</span></h3>
      
      <div className="flex justify-between items-center mt-5">
        <div className="w-[50%] flex gap-2">
          <button className="w-full rounded-lg py-2 px-5 font-bold bg-secondary text-primary ">Update</button>
          <button className="w-full rounded-lg py-2 px-5 font-bold bg-secondary text-primary ">Delete</button>
        </div>
        <div className="w-[50%] text-right">
       <p>Date</p>
        </div>
       
      </div>
      </div>
      
    </div>
  )
}

export default NewTodo