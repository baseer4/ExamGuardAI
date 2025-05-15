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
import LinkGenerator from "./pages/GenLinkPage";
import InstructionPage from "./pages/InstructionPage";
import ProtectedRoute from "./layouts/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import ExamEnvPage from "./pages/ExamEnvPage";
import ProfilePage from "./pages/ProfilePage";



function App() {
  const {authUser,checkAuth} = useAuthStore();


  useEffect(()=>{
    checkAuth()
  },[checkAuth]);

  return (
    <div>
      <Toaster/>

      <Routes>
          <Route element= {<LayoutWithNavbar/>}>

              <Route path="/" element= {<HomePage/>}   />
              <Route path="/about" element= {<AboutPage/>}   />
              <Route path="/signup" element= {!authUser ?<SignUpPage/> : <Navigate to="/" />} />
              <Route path="/login" element= {!authUser ?<LoginPage/> : <Navigate to="/" />} />
              <Route path="/create" element= {<CreatePage/>}   />


              <Route element={<ProtectedRoute/>}>
                  <Route path="/profile" element= { <ProfilePage/> }   />
                  <Route path="/create/mcq" element= { <CreateMcqPage/> }   />
                  <Route path="/create/assignment" element= {<CreateAssignmentPage/>}   />
                  <Route path="/create/code" element= {<CreateCodePage/>}   />
                  <Route path="/join" element ={<JoinPage/>} />
                  <Route path="/generate-link" element= {<LinkGenerator/>} />
              </Route>

          </Route>

          <Route element={<ProtectedRoute/>}>
            <Route path="/join/:id" element= {<InstructionPage/>} />
            <Route path="/test/:id" element= {<ExamEnvPage/>} />
          </Route>

      </Routes>  

    </div>     
    )
}

export default App
