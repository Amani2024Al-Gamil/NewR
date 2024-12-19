import Rating from "../rating/Rating";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({data}) => {
 const [slideIndex, setSlideIndex] = useState(0);
 //handelClick
 const handelClick = (direction)=>{
    if(direction==="left"){setSlideIndex(slideIndex - 1)}
    else{setSlideIndex(slideIndex + 1)}
 }
    




    return(
        <div className="slider-component">
            <button
            disabled = {slideIndex=== -data.length}
            
            onClick={()=>handelClick("left")} className="bi bi-chevron-left arrow-left"></button>
            
            <div style={{
    transform: `translate(${slideIndex * -250}px)`
  }} className="slider-wrapper">
            {data.map(item => 
                <Link to= {`/products/${item.id}`} key={item.id} className="slide">
                    <img src={item.image} alt={item.title} className="slide-image" />
                    <h3 className="slide-title">{item.title}</h3>
                    <Rating rating={item.rating} reviews={item.reviews} />
                    <div className="slide-price">${item.price}</div>
                </Link>
            )}
            </div>
            <button
            disabled = {slideIndex=== 1}
            onClick={()=>handelClick("right")}  className="bi bi-chevron-right arrow-right"></button>





        </div>
    )
}
export  default Slider ;