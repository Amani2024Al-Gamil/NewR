import React from 'react';



const cartItems = [
  {
    id : 1 ,
    quantity : 2 ,
    price : 10 ,
    title : 'هاتف سامسونج',
    image : '/images/products/mobiles/m1.jpg'

  },
  {
    id : 2 ,
    quantity : 1 ,
    price : 5 ,
    title : 'هاتف سامسونج',
    image : '/images/products/mobiles/m2.jpg'

  },





]

const Cart = () => {
  return (
    <div className="cart">
      <h1 className="cart-title">
        سلة التسوق
      </h1>

      <div className="cart-wrapper">
        {
          cartItems.map(item =>
            <div className='cart-item' key={item.id} >

              <div className="cart-item-image-wrapper">
                <img className='image-cart-item' src={item.image} alt={item.title} />
              </div>

              <div className="cart-item-info">
                <div className="cart-item-title">
                  {item.title}
                </div>
                <div className="cart-item-quantity">
                  الكمية :
                  <span>{item.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر :
                   <span>{item.price * item.quantity}$</span>
                </div>
                <i className="bi bi-trash cart-item-delete-icon"></i>

              </div>




            </div>
          )
        }
      </div>
      <div className="cart-summary">
        <div className="cart-summary-text">
          <i className="bi bi-check-circle-fill"></i>
        .جذء من طلبك مؤهل للشحن المجانى زقم بتحديد هذا الخيار عند الدفع .التفاصيل  
        </div>
        <div className="cart-summary-total">
          المجموع :
          <span>{
            cartItems.reduce((acc , cur) => acc + cur.price * cur.quantity , 0) 
            
            }$</span>
        </div>
        <button className="cart-summary-btn">
          تابع عمليات الشراء
        </button>
      </div>
    </div>
  )
}

export default Cart;
