
import Banner from "../../components/banners/Banner";
import Category from "../../components/category/category";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import Slider from "../../components/slider/Slider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Brands from "../../components/brands/Brands"
import {products} from '../../Data/products';


const Home = () => {



  const laptops = products.filter(p=>p.isLaptop===true);
  const mobiles = products.filter(p=>p.isLaptop===false);
  return (
  <>
  <Banner />
      <Category />
      <SpecialOffers  />
      <HeadingTitle title='الجديد من اللابتوبات ...' />
      <Slider data={laptops} />
      <HeadingTitle title='الجديد من الموبايلات ...' />
      <Slider  data={mobiles} />
      <HeadingTitle title='تسوق حسب المارك ...' />
      <Brands />
  
  
  
  </>
  
  )
}

export default Home;
