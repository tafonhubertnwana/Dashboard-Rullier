import { Outlet } from "react-router-dom";
import Slidebar from "../../Components/SlideMenu/index";
import Chatbox from "../../Components/Chatbox/chatbox";
import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";



function DashboardLayout () { 
  return(
    <>
      <div id="main-wrapper" >
        <Header />
        <Chatbox />
        <Slidebar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout;  