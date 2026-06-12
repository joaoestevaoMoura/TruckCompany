import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";


const Sidebar = () => {

 const [open,setOpen] = useState(true);
 const items = [
 {
  name:"Início",
  icon:"⌂",
  link:"/"
 },

 {
  name:"Projetos",
  icon:"▢",
  link:"/projetos"
 },

 {
  name:"Equipe",
  icon:"♙",
  link:"/equipe"
 },

 {
  name:"Configurações",
  icon:"⚙",
  link:"/config"
 },

 {
  name:"Ajuda",
  icon:"?",
  link:"/ajuda"
 }

 ];



 return (

<>

<button
className="sidebar-button"
onClick={()=>setOpen(!open)}
>
☰
</button>



<aside className={`sidebar ${open ? "active":""}`}>


<div className="sidebar-title">

<span className="logo-dot"></span>

Inicio

</div>



<div className="sidebar-menu">


{
items.map(item=>(

<Link
to={item.link}
key={item.name}
className="sidebar-item"
>


<span className="sidebar-icon">

{item.icon}

</span>


{item.name}


</Link>


))
}


</div>




<div className="sidebar-user">


<div className="avatar">
👤
</div>


<div>

<strong>
Nome
</strong>
<small>
@usuario
</small>
</div>
</div>
</aside>
</>
 )
}


export default Sidebar;