import Swal from "sweetalert2";
import { DeleteTodo, UpdateTodo } from "../API/Api";

export function DeleteAlert(id){
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        return DeleteTodo(id)
        .then((result)=> {
            return result
        })
        }
      });
    

}
export function UpdateAlert(id , status){
    return  Swal.fire({
   
  input: "select",
  inputOptions: { New: "New", Progress: "Progress", Completed: "Completed", Canceled: "Canceled"},
  inputValue: status, 
  showCancelButton: true,
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Updated!",
    //   text: "Your file has been Updated.",
    //   icon: "success"
    // });
  
   return UpdateTodo(id, result.value)
    .then((result) => {
     return result;
  })
  }
    })

  }
