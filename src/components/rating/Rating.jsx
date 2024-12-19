const Rating = ({rating , reviews}) =>{
    return(
        <div className="rating-wraper">
            <b className="rating">
                {rating} <i className="bi bi-star-fill"></i>
            </b>
            <span>{reviews}تقييمات </span>

        </div>

    )
}
export default Rating ;