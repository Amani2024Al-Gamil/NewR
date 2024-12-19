import { useState } from "react";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";
const Offers = ({offer}) =>{
    const {firstImage,secondImage,title,price,discount,rating,reviews,id} = offer;
    const [imageSrc , setImageSrc] = useState(firstImage); 
    return(
        <div className="offers">
           <div className="offer-image-wrapper">
            <img 
            onMouseEnter={() =>setImageSrc(secondImage) }
            onMouseLeave={()=>setImageSrc(firstImage)}
            src={imageSrc } 
            alt={title} 
            className="offer-image" />
           </div>
           <div className="offer-info">
            <h5 className="offer-title">{title} </h5>
           <Rating rating={rating} reviews={reviews} />
            <div className="offer-price">
                <b className="offer-price-item">${price}</b>
                <b className="offer-final-price-item">
                    ${price - (discount*price)/100}
                    </b>
            </div>
            <Link to={`/special-offer/${id}`} className="offer-see-more">
                شاهد المزيد ... 
            </Link>
            <div className="offer-discount">خصم  {discount}%</div>
           </div>

        </div>
    )
}
export default Offers;