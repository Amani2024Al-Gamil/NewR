import {brands} from '../../Data/brands';

const Brands = () => {
    return(
        <div className="brands-wrapper">
            {brands.map(brand =>
                <div key={brand.id} className="brand">
                    <img src={brand.image} alt="" className="brand-image" />
                </div>
            )}

        </div>

    )
}
export default Brands ;