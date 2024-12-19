import {specialOffers} from '../../Data/special-offers';
import Offers from './Offers';

const SpecialOffers = () => {
    return(
         <div className="special-offers">
            <h2 className="special-offers-title">
                عروض كبيرة لليوم 
                <span className="special-offers-icon-wraper">
                    <i className="bi bi-stopwatch"></i>ل 24 ساعة بس
                </span>
            </h2>
            <div className="special-offer-wraper">
            {specialOffers.map(offer => <Offers key={offer.id} offer={offer} />)}
            </div>
         </div>
    )
}
export default SpecialOffers;