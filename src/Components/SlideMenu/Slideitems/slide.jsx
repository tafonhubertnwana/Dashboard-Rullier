import { FaChartBar } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { LuTextQuote } from "react-icons/lu";
import { IoCreate } from "react-icons/io5";


   

export const MenuItems = [
  {
    id:1,
    label:'Statistique',
    link:'/',
    icon: <FaChartBar />
  
  },
  {
    id:2,
    label:'Devis',
    link:'/quote',
    icon: <FaDiagramProject />
  },
  {
    id:3,
    label:'Projects',
    link:'/project',
    icon: <LuTextQuote />
  },
  {
    id:3,
    label:'Create Project',
    link:'titleproject',
    icon: <IoCreate />
  }

]


