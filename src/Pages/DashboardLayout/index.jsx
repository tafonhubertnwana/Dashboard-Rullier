import { Outlet } from "react-router-dom"
import Head from "../../Components/Header/Head";
import Slidebar from "../../Components/Menu/MenuItems/Slidebar";
import Chatbox from "../../Components/Chatbox/Chatbox";
import Footer from "../../Components/Footer/Footer";


const DashboardLayout = () => {


  

  return(
    <>
      <div id="main-wrapper" >
        <Head />
        <Chatbox />
        <Slidebar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout;