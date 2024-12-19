import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[toggle,setToggle] = useState(false);
    return (
       <header className="header">
        <div className="top-header">
            <div onClick={()=>{setToggle(true)}} className="top-header-menue">
                <i className="bi bi-list"></i>

            </div>
            <div className="top-header-logo">
                <i className="bi bi-basket2"></i>
                Egyption Commerce

            </div>
            <div className="top-header-text">
                اهلا وسهلا بكم 
            </div>
            <div className="top-header-phone">
            <i className="bi bi-telephone"></i>
                010-906-00-53
                </div>
            
        </div>
         {/*middle-header */}
         <div className="middle-header">
            <div className="middle-header-search-box">
                <input type="search" placeholder="ماذا تريد؟؟" />
                <button className="search-box-btn">ابحث</button>
            </div>
            <Link to = '/Cart' className="middle-header-shopping-cart">
                سلة التسوق
                <i className="bi bi-cart3"></i>
                <span className="cart-notification">1</span>
            </Link>
         </div>
          {/*Navbar */}
          <nav style={{right: toggle && '0'}} className="navbar">
            <div  className="navbar-close-icon">
                <i onClick={()=>{setToggle(false)}} className="bi bi-x-lg"></i>
            </div>
                <ul className="navbar-links">
                    <Link to = "/" onClick={()=>{setToggle(false)}}  className="navbar-link">الصفحة الرئيسية </Link>
                    <Link to ="/Products" onClick={()=>{setToggle(false)}}  className="navbar-link">الالكترونيات والموبايلات</Link>
                    <Link to ="" onClick={()=>{setToggle(false)}}  className="navbar-link">المنزل والمطبخ</Link>
                    <Link to ="" onClick={()=>{setToggle(false)}}  className="navbar-link">رجالية</Link>
                    <Link to ="" onClick={()=>{setToggle(false)}}  className="navbar-link">نسائية</Link>
                </ul>
            </nav>

       </header>
    )
}
export default Header ;