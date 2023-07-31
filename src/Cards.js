import React from "react";
// import './index.css';
import Imagies from "./Imagies";


function Card(Props){ 
     console.log(Props);
    return(
      <>
       <div className="cards">
        <div className="card">
        <a href={Props.links} target='blank'>
          <Imagies  image={Props.image} />
        </a> 
        
          <div className="card-info">
          <span className="card-category">{Props.title}</span>
          <h3 className='card-title'>{Props.name}</h3>
        <a href={Props.links} target='blank'>
        <button className="btn_Watch">Watch Now</button>
        </a>
     </div>
      
</div>

</div>
</>
)}
export default Card;