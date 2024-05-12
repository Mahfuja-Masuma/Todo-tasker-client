import { useEffect } from "react";
import { AllTodosApi } from "../API/Api";
import { useSelector } from "react-redux";

const Home = () => {
  useEffect(() => {
    AllTodosApi();
  }, []);

  const allTodos = useSelector((state) => state.allTodos.total);

  return (
    <div className="flex justify-between">
      {Array.isArray(allTodos) && allTodos.map((item, i) => (
        <div key={i} className="w-[20%] items-center text-center px-5 py-6 bg-primary rounded-md shadow-lg font-bold text-white">
          <h1>{item._id}</h1>
          <h2 className="mt-4">Total: {item.total}</h2>
          {/* <p>{item.status}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Home;
