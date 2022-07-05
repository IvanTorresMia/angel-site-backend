import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Programs from "./Components/Programs";
import programsData from "./Utils/programs";
import Contact from "./Components/Contact";
import Moderate from "./Components/ProgramPages/Moderate";
import BeastMode from "./Components/ProgramPages/BeastMode";
import Beginner from "./Components/ProgramPages/Beginner";
import AdminLogIn from "./Admin/AdminLogIn/AdminLogIn";
import SignUp from "./Components/SIgnUp/SignUp";
import AdminProfile from "./Admin/AdminProfile/AdminProfile";
import AdminHome from "./Admin/AdminHome/AdminHome";
import ViewOne from "./Admin/ViewOne";
import SignUpAdmin from "./Admin/SignUpAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}>
          <Route index element={<Header />} />
          <Route
            path="programs"
            element={<Programs programsData={programsData} />}
          />
          <Route path="beginner" element={<Beginner />} />
          <Route path="moderate" element={<Moderate />} />
          <Route path="beast-mode" element={<BeastMode />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<AdminLogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signup-admin" element={<SignUpAdmin />} />
        </Route>
        <Route path="admin" element={<AdminHome />}>
          {/* <Route index element={<h1> you need to login </h1>} /> */}
          <Route index element={<AdminProfile />} />
          <Route path="view-one/:id" element={<ViewOne />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
