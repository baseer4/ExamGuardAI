import {Routes ,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css"
import AboutPage from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import AssignmentPage from "./pages/AssignmentPage";
import CodePage from "./pages/CodePage";
import McqPage from "./pages/McqPage";

function App() {
  

  return (
    <div>

      <Routes>
          <Route element= {<LayoutWithNavbar/>}>

            <Route path="/" element= {<HomePage/>}   />
            <Route path="/about" element= {<AboutPage/>}   />

            <Route path="/create" element= {<CreatePage/>}   />
            <Route path="/create/mcq" element= {<McqPage/>}   />
            <Route path="/create/assignment" element= {<AssignmentPage/>}   />
            <Route path="/create/code" element= {<CodePage/>}   />

          </Route>

     
      </Routes>  

    </div>     
    )
}

export default App
