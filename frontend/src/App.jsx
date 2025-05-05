import {Routes ,Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import "./App.css"
import AboutPage from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import CreateMcqPage from "./pages/CreateMcqPage";
import CreateAssignmentPage from "./pages/CreateAssignmentPage";
import CreateCodePage from "./pages/CreateCodePage";
import JoinPage from "./pages/JoinPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./store/useAuthStore";


function App() {
  const {authUser,checkAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth()
  },[checkAuth]);

  return (
    <div>

      <Routes>
          <Route element= {<LayoutWithNavbar/>}>

            <Route path="/" element= {<HomePage/>}   />
            <Route path="/about" element= {<AboutPage/>}   />
            <Route path="/signup" element= {!authUser ?<SignUpPage/> : <Navigate to="/" />} />
            <Route path="/login" element= {!authUser ?<LoginPage/> : <Navigate to="/" />} />

            <Route path="/create" element= {<CreatePage/>}   />
            <Route path="/create/mcq" element= {<CreateMcqPage/>}   />
            <Route path="/create/assignment" element= {<CreateAssignmentPage/>}   />
            <Route path="/create/code" element= {<CreateCodePage/>}   />
            <Route path="/join" element ={<JoinPage/>} />

          </Route>

     
      </Routes>  

    </div>     
    )
}

export default App
