const Footer = () =>{
    return(
         <footer className="footer">
            <div className="footer-top">
                <h3 className="footer-top-title">
                    متواجدين دائما لمساعدتك
                </h3>
                <div className="footer-top-email">
                    <span className="footer-top-text">تواصل معنا عبر الايميل
                    </span>
                    <span className="footer-top-email-address">
                        <i className="bi bi-envelope"></i>
                        commerce@email.com
                    </span>
                </div>
            </div>
            <div className="footer-items-wrapper">
                <div className="footer-item">
                    <h4 className="footer-item-title">
                        الالكترونيات
                        <ul className="footer-item-links">
                            <li className="footer-item-link">الكاميرا تسجيل الفيديو</li>
                            <li className="footer-item-link">الاجهزة المنزلية</li>
                            <li className="footer-item-link">الهواتف</li>
                            <li className="footer-item-link">سماعات الراس</li>
                            <li className="footer-item-link">التليفزيونات</li>
                            <li className="footer-item-link">اجهزة التابلت</li>
                        </ul>
                    </h4>
                </div>

                <div className="footer-item">
                    <h4 className="footer-item-title">
                        الازياء
                        <ul className="footer-item-links">
                            <li className="footer-item-link"> ازياء رجالية </li>
                            <li className="footer-item-link"> ازياء نسائية</li>
                            <li className="footer-item-link">ازياء اولاد</li>
                            <li className="footer-item-link">نظارات  </li>
                            <li className="footer-item-link">مجوهرات</li>
                            <li className="footer-item-link"> ساعات</li>
                        </ul>
                    </h4>
                </div>

                <div className="footer-item">
                    <h4 className="footer-item-title">
                        المطبخ والاجهزة المنزلية
                        <ul className="footer-item-links">
                            <li className="footer-item-link"> ديكورات منازل  </li>
                            <li className="footer-item-link">اثاث </li>
                            <li className="footer-item-link">مطبخ وادوات طعام</li>
                            <li className="footer-item-link"> مستلزمات حمام</li>
                            <li className="footer-item-link">اجهزة صوت وفيديو</li>
                            <li className="footer-item-link">مستلزمات حدائق </li>
                        </ul>
                    </h4>
                </div>

                <div className="footer-item">
                    <h4 className="footer-item-title">
                        الجمال
                        <ul className="footer-item-links">
                            <li className="footer-item-link"> العطور </li>
                            <li className="footer-item-link">المكياج </li>
                            <li className="footer-item-link">العناية باالشعر</li>
                            <li className="footer-item-link"> العناية باالبشرة </li>
                            <li className="footer-item-link">جسم واستحمام</li>
                            <li className="footer-item-link"> منتجات الرعاية الصحية</li>
                        </ul>
                    </h4>
                </div>




            </div>
            <div className="footer-bottom">
                <i className="bi bi-c-circle"></i>2024
                كل الحقوق محفوظة
            </div>
         </footer>
    )
}
export default Footer ;