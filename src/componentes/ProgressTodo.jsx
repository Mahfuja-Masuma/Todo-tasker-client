import { useEffect } from "react";

import { useSelector } from "react-redux";
import { TodoListByStatus } from "../API/Api";
import { DeleteAlert, UpdateAlert } from "../helper/AlertHelper";

const ProgressTodo = () => {
  useEffect(() => {
    TodoListByStatus("Progress");
  }, []);

  const progressTodos = useSelector((state) => state.todo.progressTodos);

  const handleDeleteTodo = (id) => {
    DeleteAlert(id)
      .then((result) => {
        if (result === true) {
          TodoListByStatus("Progress");
        }
        console.log(result);
      })
      .catch((error) => {
        // Handle error if DeleteAlert fails
        console.error("Error while deleting todo:", error);
      });
  };
  const handleUpdateTodo = (id, status) => {
    UpdateAlert(id, status).then((result) => {
      if (result) {
        TodoListByStatus("Progress");
      }
    });
  };

  return (
    <div className="flex flex-wrap justify-between gap-y-8">
      {progressTodos.map((item, i) => {
        return (
          <div
            key={i}
            className="px-3 py-5 w-[32%] bg-senary bg-opacity-[.6] rounded-lg"
          >
            <h1 className="text-2xl font-bold text-secondary">{item.title}</h1>
            <p className="text-base text-primary my-2">{item.description}</p>
            <h3 className=" font-bold text-base text-primary">
              Status : <span className="text-quinary">{item.status}</span>
            </h3>

            <div className="flex justify-between items-center mt-5">
              <div className="w-[50%] flex gap-2">
                <button
                  onClick={() => handleUpdateTodo(item._id, item.status)}
                  className="w-full rounded-lg py-1 px-5 font-bold bg-secondary text-primary "
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteTodo(item._id)}
                  className="w-full rounded-lg py-1 px-5 font-bold bg-secondary text-primary "
                >
                  Delete
                </button>
              </div>
              <div className="w-[50%] text-right">
                <p>{item.createDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTodo;
