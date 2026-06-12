import { useState } from "react";
import "./Home.css";


const slides = [

{
 title:"NEW UE DROPS",
 text:"First of its kind. Hand-shaped for you.",
 image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330    "
},

{
 title:"Hot Pink",
 text:"Get summer's hottest color",
 image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
},


{
 title:"Premium Style",
 text:"Discover new collection",
 image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
}


];



function Home(){


const [active,setActive]=useState(0);



function next(){

setActive(
(active + 1) % slides.length
)

}



function prev(){

setActive(
(active - 1 + slides.length) % slides.length
)

}





return (

<div className="home">


<div className="carousel">


<button 
className="arrow left"
onClick={prev}
>
‹
</button>



<div className="cards">


{
slides.map((slide,index)=>{


const position =
index === active
? "active"
: index < active
? "left-card"
: "right-card";



return (

<div
key={index}
className={`card ${position}`}
>


<img src={slide.image}/>


<div className="overlay">


<h2>
{slide.title}
</h2>


<p>
{slide.text}
</p>



<button>
Shop now →
</button>


</div>



</div>


)


})

}



</div>




<button 
className="arrow right"
onClick={next}
>
›
</button>



</div>


</div>

)

}



export default Home;