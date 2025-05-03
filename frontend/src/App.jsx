import {Routes ,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css"
import AboutPage from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import CreateMcqPage from "./pages/CreateMcqPage";
import CreateAssignmentPage from "./pages/CreateAssignmentPage";
import CreateCodePage from "./pages/CreateCodePage";
import JoinPage from "./pages/JoinPage";

function App() {
  

  return (
    <div>

      <Routes>
          <Route element= {<LayoutWithNavbar/>}>

            <Route path="/" element= {<HomePage/>}   />
            <Route path="/about" element= {<AboutPage/>}   />

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
