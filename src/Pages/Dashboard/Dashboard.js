import React from "react";
import { AiFillBackward } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineDashboard
} from "react-icons/md";
import { RiFileList3Line, RiPlantLine, RiUser3Line } from "react-icons/ri";
import {
  NavLink, Route, Switch, useHistory, useRouteMatch
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from '../../Private/AdminRoute';
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import AllPosts from "./Admin/AllPosts/AllPosts";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import AddPost from "./Clients/AddPost/AddPost";
import PlostList from "./Clients/PlostList/PlostList";
import "./Dashboard.css";



const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <>
      {admin ? (
        <div className="dashboardBG">
          <div className="flex h-screen bg-transparent blurDash">
            <aside className="dashboard  bg-red-700 mr-1 h-full block w-14 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-r-lg py-2 pl-2  top-2 bottom-2 left-2">
              <div
                title={user.displayName}
                className="w-full flex my-2  md:pr-20 cursor-pointer bg-red-700 items-center text-white py-3 rounded-l-lg"
              >
                <img
                  className="w-10 h-auto rounded-full mr-3"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                  }
                  alt=""
                />
                <span className=" hidden md:block">{user.displayName}</span>
              </div>

              <NavLink
                title="Dashboard"
                to={`${url}`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white  py-3 rounded-l-lg"
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-blue-500"
              >
                <MdOutlineDashboard className="ml-3 text-xl" />{" "}
                <span className="ml-0 hidden md:block w-full">Dashboard</span>
              </NavLink>
              <button
                title="My Orders"
                onClick={goHome}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg hover:shadow-md relative hover:text-textPrimary dashboardLink hover:bg-white"
              >
                <AiFillBackward className="ml-3 text-xl" />{" "}
                <span className="ml-1 hidden md:block w-full">Go Home</span>
              </button>
              <NavLink
                title="Add Plant"
                to={`${url}/add_plant`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
              >
                <IoMdAdd className="ml-3 text-xl" />{" "}
                <span className="ml-0 hidden md:block w-full">Add a Post</span>
              </NavLink>
              <NavLink
                title="Plants List"
                to={`${url}/plants_list`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg"
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
              >
                <RiPlantLine className="ml-3 text-xl" />{" "}
                <span className="ml-0 hidden md:block w-full">All Posts</span>
              </NavLink>
              <NavLink
                title="All Users"
                to={`${url}/all_users`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
              >
                <RiUser3Line className="ml-3 text-xl" />{" "}
                <span className="ml-0 hidden md:block w-full">All Users</span>
              </NavLink>

              <NavLink
                title="Make Admin"
                to={`${url}/make_admin`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
              >
                <MdOutlineAdminPanelSettings className="ml-3 text-xl" />{" "}
                <span className="ml-0 hidden md:block w-full">
                  Add an Admin
                </span>
              </NavLink>
              <button
                title="LogOut"
                onClick={logOut}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center  py-3 rounded-l-lg font-bold text-red-700"
              >
                <CgLogOut className="ml-3 text-xl" />{" "}
                <span className="ml-5 hidden md:block w-full">LogOut</span>
              </button>
            </aside>

            <div className="h-auto w-full overflow-y-auto px-0 py-0">
              <ScrollToTop />
              <Switch>
                <Route exact path={path}>
                  <AllPosts />
                </Route>
                <AdminRoute path={`${path}/add_plant`}>
                  <AddPost />
                </AdminRoute>
                <AdminRoute path={`${path}/plants_list`}>
                  <AllPosts />
                </AdminRoute>
                <AdminRoute path={`${path}/make_admin`}>
                  <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/all_users`}>
                  {/* <AllUserList /> */}
                </AdminRoute>
              </Switch>
            </div>
          </div>
        </div>

      ) : (
        <div className="dashboardBG">
          <div className="flex h-screen blurDash">
            <aside className="dashboard  bg-green-700 mr-1 h-full block w-14 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-r-lg py-2 pl-2  top-2 bottom-2 left-2">
              <div
                title={user.displayName}
                className="w-full flex my-2  md:pr-20 cursor-pointer bg-green-700 items-center text-white py-3 rounded-l-lg"
              >
                <img
                  className="w-10 h-auto rounded-full mr-3"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                  }
                  alt=""
                />
                <span className=" hidden md:block">{user.displayName}</span>
              </div>

              <button
                title="My Orders"
                onClick={goHome}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg hover:shadow-md relative hover:text-textPrimary dashboardLink hover:bg-white"
              >
                <AiFillBackward className="ml-3 text-xl" />{" "}
                <span className="ml-1 hidden md:block w-full">Go Home</span>
              </button>
              <NavLink
                title="My Orders"
                to={`${url}/post_list`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
              >
                <BsStackOverflow className="ml-3 text-xl" />{" "}
                <span className="ml-1 hidden md:block w-full">My Posts</span>
              </NavLink>
              <NavLink
                title="My Orders"
                to={`${url}/add_post`}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center text-white py-3 rounded-l-lg  "
                activeClassName="shadow-md relative dashboardLink w-full block py-3 bg-white text-textPrimary"
              >
                <IoMdAdd className="ml-3 text-xl" />{" "}
                <span className="ml-1 hidden md:block w-full">Create Post</span>
              </NavLink>



              <button
                title="LogOut"
                onClick={logOut}
                className="w-full flex my-2 md:px-5 md:pr-20  items-center  py-3 rounded-l-lg font-bold text-red-700"
              >
                <CgLogOut className="ml-3 text-xl" />{" "}
                <span className="ml-1 hidden md:block w-full text-left">LogOut</span>
              </button>
            </aside>

            <div className="h-auto w-full overflow-y-auto px-0 py-0 ">
              <ScrollToTop />

              <Switch>
                <Route exact path={path}>
                  <PlostList />
                </Route>
                <Route path={`${path}/post_list`}>
                  <PlostList />
                </Route>
                <Route path={`${path}/add_post`}>
                  <AddPost />
                </Route>

              </Switch>
            </div>
          </div>
        </div>

      )}

    </>
  );
};

export default Dashboard;
