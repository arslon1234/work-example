import './footer.scss'
import vector from '../../assets/images/Vector (2).png'
export default function Footer() {
       return (
              <div className="footer">
                     <div className="footerLeft">
                            <div className="leftOne">
                                   <span>
                                          <a href="#">Customer Service</a>
                                   </span>
                                   <span>
                                          <a href="#">Help / FAQ</a>
                                   </span>
                                   <span>
                                          <a href="#">Returns & Exchanges</a>
                                   </span>
                                   <span>
                                          <a href="#">Sizing</a> 
                                   </span>
                                   <span>
                                          <a href="#">Gift Cards</a>
                                   </span>
                                   <span>
                                          <a href="#">Contact Us</a>
                                   </span>
                            </div>
                            <div className="leftTwo">
                                   <span>
                                          <a href="#">About</a>
                                   </span>
                                   <span>
                                          <a href="#">Our Story</a>
                                   </span>
                                   <span>
                                          <a href="#">Shop</a>
                                   </span>
                                   <span>
                                          <a href="#">Journal</a>
                                   </span>
                                   <span>
                                          <a href="#">About Our Tees</a>
                                   </span>
                                   <span>
                                          <a href="#">Reviews</a>
                                   </span>
                            </div>
                     </div>
                     <div className="footerRight">
                            <div className="rightUp">
                                   <div className="uptitle">
                                          <span>© Ugmonk 2021</span>
                                          <span>All images and content may not be</span>
                                          <span> used without permission</span>
                                   </div>
                                   <div className="upimg">
                                          <img src={vector} alt="" />
                                   </div>
                            </div>
                            <div className="rightDown">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-square"></i>
                            </div>
                     </div>
              </div>
       )
}
