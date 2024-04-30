import { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { getUserDetails, logout } from "../helper/SesionHelper";
import { IoCreateSharp } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5"; // Icon for "New plan"
import { IoTimerOutline } from "react-icons/io5"; // Icon for "Progress"
import { IoCheckmarkDoneOutline } from "react-icons/io5"; // Icon for "Completed"
import { IoCloseCircleOutline } from "react-icons/io5"; // Icon for "Cancelled"


const MainLayout = (props) => {
  const [show, setShow] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-full bg-[#F6F8FC] p-4">
      {/* navbar part start */}
      <div>
        <nav className="flex justify-between items-center">
          <div className="flex gap-7 items-center">
            {sidebarOpen ? (
              <HiMiniBars3BottomLeft
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-3xl text-primary cursor-pointer"
              />
            ) : (
              <HiMiniBars3BottomRight
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-3xl text-primary cursor-pointer"
              />
            )}
            <div className="">
              <Link to="/" className="text-2xl font-bold capitalize flex">
                Tactic
                <span>
                  <HiBadgeCheck size={40} className="text-secondary" />
                </span>
                Planet
              </Link>
            </div>
          </div>

          {/* profile picture start */}
          <div className="relative">
            <div
              onClick={() => setShow(!show)}
              className="h-[80px] w-[80px] overflow-hidden rounded-full bg-tertiary cursor-pointer"
            >
              <img src={getUserDetails()?.photo} alt="" />
            </div>

            {show && (
              <div className="absolute w-[300px] items-center p-5 rounded-lg bg-secondary right-0 top-[80px]">
                <IoClose
                  onClick={() => setShow(!show)}
                  size={40}
                  className="text-primary absolute left-2 top-2"
                />
                <div className="h-[70px] w-[70px] mx-auto overflow-hidden rounded-full bg-tertiary cursor-pointer">
                  <img src={getUserDetails()?.photo} alt="" />
                </div>
                <h1 className="text-2xl text-black my-2 text-center">
                  {getUserDetails()?.firstName +
                    " " +
                    getUserDetails()?.lastName}
                </h1>
                <div className="flex gap-2">
                  <Link to="/profile" className="btn1 w-full">
                    Profile Details
                  </Link>
                  <button onClick={() => logout()} className="btn2">
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* profile picture end */}
        </nav>
      </div>
      {/* navbar part end */}

      <div className="flex justify-between mt-5">
        {/* sidebar Start */}
        <div
          className={`${
            sidebarOpen ? "w-[25%] p-5" : "w-[3%]"
          }  bg-secondary transition-all duration-75 rounded-lg`}
        >
          {sidebarOpen ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg bg-pink-400  rounded-lg py-1 px-2 flex "
                    : " text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
                }
              >
                <MdOutlineHome size={30} /> Home
              </NavLink>
              <NavLink
                to="/create-todo"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg bg-pink-400 flex  rounded-lg py-1 px-2 "
                    : "text-white flex text-lg  p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
                }
              >
                <IoCreateSharp size={30} /> Create plan
              </NavLink>
              <NavLink
                to="/new-todo"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg bg-pink-400 flex  rounded-lg py-1 px-2 "
                    : "text-white flex text-lg  p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
                }
              >
                <IoDocumentTextOutline size={30} />  New plan
              </NavLink>
              <NavLink
                to="/progress-todo"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg bg-pink-400 flex  rounded-lg py-1 px-2 "
                    : "text-white flex text-lg  p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
                }
              >
                <IoTimerOutline size={30} /> Progress
              </NavLink>
              <NavLink
                to="/complete-todo"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg bg-pink-400 flex  rounded-lg py-1 px-2 "
                    : "text-white flex text-lg  p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
                }
              >
                <IoCheckmarkDoneOutline size={30} /> Complete
              </NavLink>
              <NavLink
                to="/cancelled-todo"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-lg bg-pink-400 flex  rounded-lg py-1 px-2 "
                    : "text-white flex text-lg  p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
                }
              >
                <IoCloseCircleOutline size={30} /> Cancelled
              </NavLink>
              {/* Other NavLink items */}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <NavLink
                to="/"
                className="text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
              >
                <MdOutlineHome size={30} />
              </NavLink>
              <NavLink
                to="/create-todo"
                className="text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
              >
                <IoCreateSharp size={30} />
              </NavLink>
              <NavLink
                to="/new-todo"
                className="text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
              >
                <IoDocumentTextOutline size={30} />
              </NavLink>
              <NavLink
                to="/progress-todo"
                className="text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
              >
                <IoTimerOutline size={30} />
              </NavLink>
              <NavLink
                to="/complete-todo"
                className="text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
              >
                <IoCheckmarkDoneOutline size={30} />
              </NavLink>
              <NavLink
                to="/cancelled-todo"
                className="text-white text-lg flex p-1 hover:bg-gray-400 hover:bg-opacity-[.4] rounded-lg hover:text-black"
              >
                <IoCloseCircleOutline size={30} />
              </NavLink>
            </div>
          )}
        </div>
        {/* sidebar End */}

        {/* main content Start */}
        <div
          className={`${
            sidebarOpen ? "w-[72%] " : "w-[100%]"
          } bg-secondary bg-opacity-[.4]  p-10 transition-all duration-75 rounded-lg`}
        >
          {props.children}
        </div>
        {/* main content End */}
      </div>
    </div>
  );
};

export default MainLayout;
