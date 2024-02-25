import { Outlet } from "react-router-dom"
import Slidebar from "../../Components/SlideMenu/index";
import Chatbox from "../../Components/Chatbox/chatbox";
import Footer from "../../Components/Footer/footer";


const DashboardLayout = () => {
  
  return(
    <>
      <div id="main-wrapper" >
        <Chatbox />
        <Slidebar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout;