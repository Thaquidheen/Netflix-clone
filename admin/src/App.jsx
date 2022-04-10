import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import {BrowserRouter,Routes,Route, Outlet, Navigate} from "react-router-dom";
import User from "./pages/user/User";
import Newuser from "./pages/newUser/Newuser";
import Products from "./pages/products/Products";
import Updateproducts from "./pages/updateProducts/Updateproducts";
import Newproduct from "./pages/newProduct/Newproduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/authContext";
import Lists from "./pages/lists/Lists";
import UpdateLists from "./pages/updateList/UpdateList";
import NewLists from './pages/newList/NewLists';


function App() {
  const {user}=useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="" element={user ? <Navigate to="/" /> : <Login />}></Route>
        {user &&
          <>
        <Route path="/" element={<MainLayout></MainLayout>}>
          
       
          <Route index element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<Newuser />}></Route>
          <Route path="/movies" element={<Products />}></Route>
          <Route path="/product/:productId" element={<Updateproducts />}></Route>
          <Route path="/newProduct" element={<Newproduct />}></Route>
          <Route path="/lists" element={<Lists/>}></Route>
          <Route path="/updateLists/:listId" element={<UpdateLists/>}></Route>
          <Route path="/newLists/" element={<NewLists/>}></Route>
          
        </Route>
      </>}
      </Routes>
      
    </BrowserRouter>
  )
}

function MainLayout() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Outlet/>
      </div>
    </main>
  )
}

export default App;


 