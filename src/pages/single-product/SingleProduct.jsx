import React from 'react';
import { useParams } from 'react-router-dom';



import Rating from "../../components/rating/Rating";
import { products } from '../../Data/products';




const SingleProduct = () => {




  const {id} = useParams();


  const product = products.find(p=>p.id === +id) ;



  



  return (
  <div className="single-product">
    <div className="product-wrapper">
      <div className="image-wrapper">
        <img src={product.image} alt='' />
      </div>


      <div className="product-info">
        <h1 className="product-title">
          {product.title}

        </h1>
        <Rating rating = { product.rating} reviews={ product.reviews} />

        <div className="product-price">
          {product.price}
        </div>

        <div className="product-add-to-cart">
          <div>الكمية</div>
          <input type='number' min='1' max='10' />
          <button className='add-to-cert-btn'>
            اضافة الى سلة التسوق
          </button>

        </div>
      </div>
    </div>

   <div className="product-description">
   <p className="product-discription">
    <strong className="product-description-title">حول هذه السلعة</strong>
      صوت فائق: استمتع بصوت واضح وراحة فائقة مع سماعات رأس ستوديو مونيتور من ون
      اوديو. تتمتع سماعة الرأس بمشغلات كبيرة بحجم 50 ملم مع مغانط من
      النيوديميوم، حيث يشكل الجهير القوي والصوت الواضح والنغمات العالية النقية
      صوت هاي فاي مثالي.
      <br />
      يوفر التصميم المغلق من الخلف صوت هاي فاي غامر عالي الدقة برقاقة سي اس ار
      ومكبرات الصوت 40 ملم معًا، إنها أفضل من السماعات بخاصية إلغاء الصوت النشطة
      من حيث جودة الأصوات. صُممت وسائد الأذن المبطنة عالية الجودة خصيصًا لسماعات
      رأس الستوديو الاحترافية لتوفير أقصى قدر من الراحة وعزل الضوضاء. عصابة
      الرأس قابلة للتعديل وقابلة للتمدد من أجل إيجاد الزاوية المفضلة المرغوب
      فيها كي تلائمك.
      <br />
      لا مزيد من المحولات: تتمتع بسلك ملفوف بنمط دي جيه (بطول 9.8 قدم ببنية
      قابلة للتمدد) حيث يصل بسهولة من التلفزيون أو الستيريو إلى كرسيك المفضل.
      تتضمن قابس قياسي 6.35 ملم ومقبس 3.5 ملم. يتمتع كلاهما بتصميم قابل للفصل
      بالكامل، حيث يمكنك توصيل جهاز الدمج الصوتي الذي تريد استخدامه.
      <br />
      مراقبة من جانب واحد: تتمتع سماعة الرأس بأغطية أذن دوارة بزاوية 90 درجة
      لعزل أذن واحدة في أي وقت، كما تتميز بشريط رأس مرن وقابل للتعديل الذاتي،
      حيث توفر تجربة استماع خالية من التعب يمكن أن تدوم لساعات، مثالية لعشاق
      الموسيقى والدمج الصوتي.
      <br />
      تعمل مع: ايباد وايبود وايفون واندرويد والعديد من أجهزة الصوت الأخرى. توفر
      صوت عالي الجودة ومتانة فائقة وراحة قصوى. تُمثل هذه السماعات الرائعة خيارك
      المفضل.
    </p>

   </div>
  </div>
  )
}

export default SingleProduct
