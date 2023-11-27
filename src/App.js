import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Home from "./components/Pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Pages/Contact";
import { CssBaseline } from '@mui/material'
import LoginReg from "./components/Pages/auth/LoginReg";
import Registration from "./components/Pages/auth/Registration";
import ResetEmail from "./components/Pages/auth/ResetEmail";
import ResetPassword from "./components/Pages/auth/ResetPassword";
import Dashboard from "./components/Pages/Dashboard";
import ChangePassword from "./components/Pages/auth/ChangePassword"



function App() {
  return (
   <>
  <CssBaseline/>
   <Navbar/>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Layout/>}/>
    <Route  index element={   <Home/>}/>
    <Route path="contact" element={ <Contact/>}/>
    <Route path="login" element={ <LoginReg/>}/>
    <Route path="reg" element={ <Registration/>}/>
    <Route path="reset" element={<ResetEmail/>}/>
    <Route path="resetpass" element={<ResetPassword/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="changepassword" element={<ChangePassword/>}/>








    



    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
