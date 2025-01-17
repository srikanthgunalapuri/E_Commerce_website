

import React, {useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Payment from '../components/Payment';
import Ordersummary from '../components/Ordersummary';


const PayPage = () => {
  const location = useLocation();
  const initialCartItems = location.state?.cartItems || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [showLogin, setShowLogin] = useState(true);
  const [previousData, setPreviousData] = useState(null);
  const [showEdit, setShowEdit] = useState(true)
  const [showNewAddress, setShowNewAddress] = useState(true)

  const handleChange = () => {
    // Save previous data before switching
    setPreviousData(showLogin ? previousData : null);
    setShowLogin(!showLogin);
  };

  

  const handleDelete = (product) => {
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  
  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };

  // Calculate pricing details
  const totalOriginalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
  const totalSellingPrice = cartItems.reduce((sellingPrice, item) => sellingPrice + item.quantity * item.sellingPrice, 0);
  const discount = totalOriginalPrice;
  const buyMoreSaveMore = totalOriginalPrice * 0.03 * cartItems.length;
  const packingFee = 60 * cartItems.length;
  const tax = totalSellingPrice * 0.03;
  const DeliveryCharges = cartItems.length === 0 ? 0 : 50 * cartItems.length; 
  const totalSaving = discount + buyMoreSaveMore + DeliveryCharges;
  const totalAmount = totalSellingPrice - buyMoreSaveMore + packingFee + tax;

  const [page, setPage] = useState(1);
  // const [readOnly, setReadOnly] = useState(true);
  const getTile = useCallback(
    (page) => {
      switch (page) {
        case 1:
          return (
            <div>
            {/* Login */}
      {showLogin && (
        <div className='LtTRsN'>
          <div className="Pg+ADy AWaTLw">
            <h3 className="RLOpCf _0pnO36">
              <span className="-tHjid">1</span>
              <span className="PXFoIh">Login</span>
            </h3>
            <div className="pMJ9ZM">
              <div>
                <div className="eiJRN2 row">
                  <div className="col col-5-12">
                    <div className="ZghR-X">
                      <div className="_03Ja9E">
                        <span className="XZtPIa">Phone</span>
                        <span className="wWa8oI">+916281448790</span>
                      </div>
                      <div className="_03Ja9E">
                        <a className="hSvhnF" href="javascript:void(0);">
                          <span>Logout &amp; Sign in to another account</span>
                        </a>
                      </div>
                      <div className="_03Ja9E">
                        <button className="QqFHMw _8VkH23 _7Pd1Fp"   onClick={() => {
                  setPage(2);
                }}>
                          <span>Continue Checkout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p9bih- col col-7-12">
                    <div className="T5aONK">
                      <span>Advantages of our secure login</span>
                      <ul>
                        <li className="-1CINL flex">
                          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="GG3DXG">
                            <g fill="none" fillRule="evenodd">
                              <path d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z" fill="#2874f0"></path>
                            </g>
                          </svg>
                          <span>Easily Track Orders, Hassle free Returns</span>
                        </li>
                        <li className="-1CINL flex">
                          <svg className="GG3DXG" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                              <path className="GG3DXG" d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"></path>
                            </g>
                          </svg>
                          <span>Get Relevant Alerts and Recommendation</span>
                        </li>
                        <li className="-1CINL flex">
                          <span className="GG3DXG">★</span>
                          <span>Wishlist, Reviews, Ratings and more.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="u7Hi8Y row">
                  <span>Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to Organic home page.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {!showLogin && (
        <div className="LtTRsN">
          <div className="Pg+ADy AWaTLw">
            <div className="N53RAe">
              <h3 className="_0pnO36">
                <span className="-tHjid">1</span>
              </h3>
              <div className="DtjciV">
                <div className="PXFoIh flex">
                  Login
                  <svg height="10" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="_3rrek0">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="#2974f0"></path>
                  </svg>
                </div>
                <div className="_3l1W1x">
                  <div>
                    <span className="rf8Rxc">+916281448790</span>
                  </div>
                </div>
              </div>
              <button className="C180vJ" onClick={handleChange}>Change</button>
            </div>
          </div>
        </div>
      )}
            
            </div>
          );
        case 2:
          return (
            <div>
              {/* Delivery Address */}
      <div className="LtTRsN">
  <div className="Pg+ADy AWaTLw">
  <h3 className="RLOpCf _0pnO36">
    <span className="-tHjid">2</span>
    <span className="PXFoIh">Delivery Address</span>
  </h3>
  <div className="pMJ9ZM">
   
    <div>
      {showEdit ? ( <div>
        <label for="CNTCT705DE8BC4997438DB336ABA2D" className="VKzPTL gIBRFT tC-hMK Xs+tNa iAFtyB">
          <input type="radio" className="zGVBds" name="address" readonly="" id="CNTCT705DE8BC4997438DB336ABA2D" checked=""  />
          <div className="qsHXPi"></div>
          <div className="VTUEC-">
            <div className="xe4Z9L">
              <div id="CNTCT705DE8BC4997438DB336ABA2D" className="MJrwCP Kvq1RS">
                <p className="_2CGQQ4">
                  <span className="_7Csqyg">Srikanth</span>
                  <span className="VpZoP0">HOME</span>
                  <span className="AhImHH _7Csqyg">6281448790</span>
                </p>
                <span className="_2CGQQ4 H9XH1D">
                  Spicy noodles shop, Sagar road, Nalgonda, Telangana - <span className="_7Csqyg">508001</span>
                </span>
                <button className="QqFHMw FA45gW _7Pd1Fp">Deliver Here</button>
              </div>
              <div className="OuY1an">
                <button type="button" className="_0eTOkm" onClick={() => {
                 setShowEdit(false)
                }}>EDIT</button>
              </div>
            </div>
          </div>
        </label>
      </div>):(     <div>
  <label for="CNTCT705DE8BC4997438DB336ABA2D" className="VKzPTL gIBRFT tC-hMK Xs+tNa iAFtyB">
    <input type="radio" className="zGVBds" name="address" readonly="" id="CNTCT705DE8BC4997438DB336ABA2D" checked="" />
    <div className="qsHXPi"></div>
    <div className="VTUEC-">
      <div>
        <form>
          <span className="iXsmkH">EDIT ADDRESS</span>
          <div className="rd3Ege">
            <div className="aChTzo">
              <button className="flex QqFHMw WNuczz M5XAsp" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="da7+UC">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h16v16H0z"></path>
                    <path className="" fill="#fff" d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"></path>
                  </g>
                </svg>
                Use my current location
              </button>
            </div>
            <div className="-PsvFv">
              <div className="ACw3Xy U1LCmH">
                <input type="text" className="v2VFa- z2D4XG" name="name" required="" autocomplete="name" tabindex="1" value="Srikanth" />
                <label for="name" className="lBFHyk dKXc0R">Name</label>
              </div>
              <div className="ACw3Xy U1LCmH">
                <input type="text" className="v2VFa- z2D4XG" name="phone" required="" maxlength="10" autocomplete="tel" tabindex="2" value="6281448790" />
                <label for="phone" className="lBFHyk dKXc0R">10-digit mobile number</label>
              </div>
            </div>
            <div className="-PsvFv">
              <div className="ACw3Xy U1LCmH">
                <input type="text" className="v2VFa- z2D4XG" name="pincode" required="" maxlength="6" autocomplete="postal-code" tabindex="3" value="508001" />
                <label for="pincode" className="lBFHyk dKXc0R">Pincode</label>
              </div>
              <div className="ACw3Xy U1LCmH">
                <input type="text" className="v2VFa- z2D4XG" required="" name="addressLine2" tabindex="4" value="Sagar road" />
                <label for="addressLine2" className="lBFHyk dKXc0R">Locality</label>
              </div>
            </div>
            <div className="-PsvFv ZU-viH">
              <div className="lJPVok oDxCeH">
                <div className="raia51 U1LCmH">
                  <textarea className="g-nBNP v2VFa- _9-gNKZ" name="addressLine1" rows="4" cols="10" tabindex="5" required="" autocomplete="street-address">Spicy noodles shop</textarea>
                  <label for="addressLine1" className="lBFHyk dKXc0R">Address (Area and Street)</label>
                </div>
                <div className="Reem3Q _92tk+3"></div>
              </div>
            </div>
            <div className="-PsvFv">
              <div className="lJPVok ACw3Xy ZU-viH">
                <div className="raia51 U1LCmH">
                  <input type="text" className="v2VFa- z2D4XG" name="city" required="" autocomplete="city" tabindex="6" value="Nalgonda" />
                  <label for="city" className="lBFHyk dKXc0R">City/District/Town</label>
                </div>
                <div className="Reem3Q _92tk+3"></div>
              </div>
              <div>
                <div className="Z5gkGb">
                  <div className="AyivT9">State</div>
                  <div className="jHYdLK ACw3Xy O1czOX">
                    <select className="OZuttk ACw3Xy O1czOX SWXSwy" name="state" required="" tabindex="7">
                      <option value="" disabled="">--Select State--</option>
                      <option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                    <span className="WRAbSt aan-Wb"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="-PsvFv">
              <div className="ACw3Xy U1LCmH">
                <input type="text" className="v2VFa- z2D4XG" name="landmark" autocomplete="off" tabindex="8" maxlength="200" value="" />
                <label for="landmark" className="lBFHyk">Landmark (Optional)</label>
              </div>
              <div className="ACw3Xy U1LCmH">
                <input type="text" className="v2VFa- z2D4XG" name="alternatePhone" autocomplete="off" tabindex="9" maxlength="10" value="9704766061" />
                <label for="alternatePhone" className="lBFHyk dKXc0R">Alternate Phone (Optional)</label>
              </div>
            </div>
            <div className="McjNgr">
              <p className="EcJ375">Address Type</p>
              <div className="VqFmfV">
                <div>
                  <label for="HOME" className="flex VKzPTL J9kgT+ iAFtyB">
                    <div>
                    <input type="radio" className="zGVBds" name="locationTypeTag" readonly="" id="HOME" checked="" />
                    <div className="qsHXPi"></div>
                    </div>
                    
                    <div className="VTUEC-">
                      <span>Home (All day delivery)</span>
                    </div>
                  </label>
                  <label for="WORK" className="flex VKzPTL J9kgT+">
                    <div>
                    <input type="radio" className="zGVBds" name="locationTypeTag" readonly="" id="WORK" />
                    <div className="qsHXPi"></div>
                    </div>
                    <div className="VTUEC-">
                      <span>Work (Delivery between 10 AM - 5 PM)</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="VgOevZ -PsvFv">
              <button className="QqFHMw SUn3yL _7Pd1Fp" type="button" tabindex="10">Save and Deliver Here</button>
              <button className="QqFHMw y+RUHq" type="button" tabindex="11"
              onClick={()=> {
                setShowEdit(true)
              }}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </label>
</div>
)}
      <div>
        <div className="IEkT52"></div>
        <div className="_2vQwZw flex" onClick={setShowNewAddress(!showNewAddress)}>
          <img height="14" width="14" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTc1RkYiIGQ9Ik0xMS4yNSA2Ljc1aC00LjV2NC41aC0xLjV2LTQuNUguNzV2LTEuNWg0LjVWLjc1aDEuNXY0LjVoNC41Ii8+PHBhdGggZD0iTS0zLTNoMTh2MThILTMiLz48L2c+PC9zdmc+" className="DI-sr8" />
          Add a new address
        </div>
      </div>
    </div>
  </div>
   </div>
     {/* new address */}
     {showNewAddress && (
     <div className="pMJ9ZM">
    <div>
    <div>
      <div>
        <label htmlFor="newAddressForm" className="VKzPTL DaIMoy a8qW11 QBX+ly iAFtyB">
          <input type="radio" className="zGVBds" name="address" readOnly id="newAddressForm" checked />
          <div className="qsHXPi"></div>
          <div className="VTUEC-">
            <div>
              <form>
                <span className="iXsmkH">ADD A NEW ADDRESS</span>
                <div className="rd3Ege">
                  <div className="aChTzo">
                    <button className="QqFHMw WNuczz M5XAsp" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="da7+UC">
                        <g fill="none" fillRule="evenodd">
                          <path d="M0 0h16v16H0z"></path>
                          <path className="" fill="#fff" d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"></path>
                        </g>
                      </svg>
                      Use my current location
                    </button>
                  </div>
                  <div className="-PsvFv">
                    <div className="ACw3Xy U1LCmH">
                      <input type="text" className="v2VFa- z2D4XG" name="name" required autoComplete="name" tabIndex="1" value="" />
                      <label htmlFor="name" className="lBFHyk">Name</label>
                    </div>
                    <div className="ACw3Xy U1LCmH">
                      <input type="text" className="v2VFa- z2D4XG" name="phone" required maxLength="10" autoComplete="tel" tabIndex="2" value="" />
                      <label htmlFor="phone" className="lBFHyk">10-digit mobile number</label>
                    </div>
                  </div>
                  <div className="-PsvFv">
                    <div className="ACw3Xy U1LCmH">
                      <input type="text" className="v2VFa- z2D4XG" name="pincode" required maxLength="6" autoComplete="postal-code" tabIndex="3" value="" />
                      <label htmlFor="pincode" className="lBFHyk">Pincode</label>
                    </div>
                    <div className="ACw3Xy U1LCmH">
                      <input type="text" className="v2VFa- z2D4XG" required name="addressLine2" tabIndex="4" value="" />
                      <label htmlFor="addressLine2" className="lBFHyk">Locality</label>
                    </div>
                  </div>
                  <div className="-PsvFv ZU-viH">
                    <div className="lJPVok oDxCeH">
                      <div className="raia51 U1LCmH">
                        <textarea className="g-nBNP v2VFa- _9-gNKZ" name="addressLine1" rows="4" cols="10" tabIndex="5" required autoComplete="street-address"></textarea>
                        <label htmlFor="addressLine1" className="lBFHyk">Address (Area and Street)</label>
                      </div>
                      <div className="Reem3Q _92tk+3"></div>
                    </div>
                  </div>
                  <div className="-PsvFv">
                    <div className="lJPVok ACw3Xy ZU-viH">
                      <div className="raia51 U1LCmH">
                        <input type="text" className="v2VFa- z2D4XG" name="city" required autoComplete="city" tabIndex="6" value="" />
                        <label htmlFor="city" className="lBFHyk">City/District/Town</label>
                      </div>
                      <div className="Reem3Q _92tk+3"></div>
                    </div>
                    <div>
                      <div className="Z5gkGb">
                        <div className="AyivT9">State</div>
                        <div className="jHYdLK ACw3Xy O1czOX">
                          <select className="OZuttk ACw3Xy O1czOX SWXSwy" name="state" required tabIndex="7">
                            <option value="" disabled>--Select State--</option>
                            <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra & Nagar Haveli & Daman & Diu">Dadra & Nagar Haveli & Daman & Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                          </select>
                          <span className="WRAbSt aan-Wb"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-PsvFv">
                    <div className="ACw3Xy U1LCmH">
                      <input type="text" className="v2VFa- z2D4XG" name="landmark" autoComplete="off" tabIndex="8" maxLength="200" value="" />
                      <label htmlFor="landmark" className="lBFHyk">Landmark (Optional)</label>
                    </div>
                    <div className="ACw3Xy U1LCmH">
                      <input type="text" className="v2VFa- z2D4XG" name="alternatePhone" autoComplete="off" tabIndex="9" maxLength="10" value="" />
                      <label htmlFor="alternatePhone" className="lBFHyk">Alternate Phone (Optional)</label>
                    </div>
                  </div>
                  <div className="McjNgr">
                    <p className="EcJ375">Address Type</p>
                    <div className="VqFmfV">
                      <div>
                        <label htmlFor="HOME" className="VKzPTL J9kgT+">
                          <input type="radio" className="zGVBds" name="locationTypeTag" readOnly id="HOME" />
                          <div className="qsHXPi"></div>
                          <div className="VTUEC-">
                            <span>Home (All day delivery)</span>
                          </div>
                        </label>
                        <label htmlFor="WORK" className="VKzPTL J9kgT+">
                          <input type="radio" className="zGVBds" name="locationTypeTag" readOnly id="WORK" />
                          <div className="qsHXPi"></div>
                          <div className="VTUEC-">
                            <span>Work (Delivery between 10 AM - 5 PM)</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="VgOevZ -PsvFv">
                    <button className="QqFHMw SUn3yL _7Pd1Fp" type="button" tabIndex="10" onClick={setShowNewAddress(false)}>Save and Deliver Here</button>
                    <button className="QqFHMw y+RUHq" type="button" tabIndex="11" onClick={setShowNewAddress(false)}>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div> 
  </div>
     )}
      </div>
              <button
                onClick={() => {
                  setPage(3);
                }}
              >
                go to invoice
              </button>
            </div> 
          );
        case 3:
          return (
          <div>
            {/* Ordersummary */}
            <Ordersummary />
            <button
                onClick={() => {
                  setPage(4);
                }}
              >
                go to invoice
              </button>
          </div>

          );
          case 4:
            return (
            <div>
             {/* Payment Options*/}
       <Payment />
              <button
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  go to back
                </button>
            </div>
  
            )
      }
    },
    [page, showEdit, showNewAddress, showLogin, handleChange]
  );

  return (

    <section>
      <div className='container'>
        <div className='row'>
          <div className="payment-page">
          <div className='delivery-detailes-container'>


      {getTile(page)}
   {/* Payment Options*/}
       <Payment />
      </div>
            {/* =================================== */}
            <div className='order-summary-container'>
              <div className="order-summary">
                <div className="order-summary-header">
                  <h4>Order Summary</h4>
                </div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <p>{item.quantity}x {truncateText(item.productName, 10)}</p>
                      <p className='delete'>₹ {item.quantity * item.sellingPrice}.00 <MdDelete onClick={() => handleDelete(item)} /></p>
                    </li>
                  ))}
                </ul>
                <div className='prices'>
                  <p>Total (exc tax):</p>
                  <p> ₹{totalSellingPrice.toFixed(2)}</p>
                </div>
                <div className='prices'>
                  <p>Buy more & save more: </p>
                  <span>- ₹{buyMoreSaveMore.toFixed(2)}</span></div>
                  <div className="prices">
                    <p>Delivery Charges</p>
                    <span><small>₹{DeliveryCharges}</small>Free</span>
                  </div>
                <div className='prices'>
                  <p>Packing Fee: </p>
                  <p>₹{packingFee}</p>
                </div>
                <div className='prices'>
                  <p>GST: </p>
                  <p>₹{tax.toFixed(2)}</p>
                </div>
                <div className='prices'>
                  <h1>Order Total: </h1>
                  <h1>₹{totalAmount.toFixed(2)}</h1>
                </div>
                <div className='prices saving'>
                  <p>Total saving price:</p>
                  <p> ₹{totalSaving.toFixed(2)}</p>
                </div>
                <div className='payment-coupon'>
                  <input type="text" placeholder="Coupon code" />
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayPage;
