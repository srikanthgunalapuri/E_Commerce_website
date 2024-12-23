import React, { useState } from 'react';
import AddressForm from './AddressForm';
// import './CheckoutPage.css';

const CheckoutPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState({
        fullName: 'Srikanth',
        mobileNumber: '6281448790',
        pincode: '500078',
        country: 'India'
    });
    const [newAddress, setNewAddress] = useState(false);

    const handleEditAddress = () => {
        setNewAddress(false);
        setShowModal(true);
    };

    const handleNewAddress = () => {
        setNewAddress(true);
        setShowModal(true);
    };

    const handleSaveAddress = (newAddress) => {
        setAddress(newAddress);
    };

    return (

 



    <section>
    <div className='container'>
        <div className="row">
            <div className="checkout-page">
                <div className="checkout-container">
                    <h1>Checkout</h1>
                    
                    <div className="section">
                        <h2>1. Select a delivery address</h2>
                        {address ? (
                            <div className="address-box">
                                <input type="radio" id="address1" name="address" value="address1" checked />
                                <label htmlFor="address1">
                                    <span>{address.fullName} {address.mobileNumber}, {address.pincode}, {address.country}</span>
                                    <div className="edit-links">
                                        <a href="#" onClick={handleEditAddress}>Edit address</a> | <a href="#">Add delivery instructions</a>
                                    </div>
                                </label>
                            </div>
                        ) : (
                            <button onClick={handleNewAddress}>Add a new address</button>
                        )}
                        <button className="button">Use this address</button>
                    </div>

                    <div className="section">
                        <h2>2. Payment method</h2>
                        <div>
                            <label>
                                <input type="radio" name="payment" value="cod" checked /> Pay on delivery (Cash/Card)
                            </label>
                        </div>
                        <div className="gift-card-section">
                            <label>Add a gift card or promotion code</label>
                            <input type="text" placeholder="Enter Code" />
                            <button className="button">Apply</button>
                        </div>
                    </div>

                    <div className='offers-container'>
                        <h2>3. Offers</h2>
                        <div>
                            <a href="#">Change</a>
                        </div>    
                    </div>

                    <div className="section">
                        <h2>4. Items and delivery</h2>
                        <div className="item">
                            <img src="https://via.placeholder.com/80" alt="Plant" />
                            <div className="item-details">
                                <p>KYARI Aralia Green Indoor Plants for Living Room | Live Plants...</p>
                                <p>Delivery date: 11 Jun 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Items:</span>
                            <span>₹300.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery:</span>
                            <span>₹40.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Promotion Applied:</span>
                            <span>-₹40.00</span>
                        </div>
                        <div className="summary-row total">
                            <span>Order Total:</span>
                            <span>₹300.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AddressForm
        show={showModal}
        onClose={() => setShowModal(false)}
        address={newAddress ? null : address}
        onSave={handleSaveAddress}
    />
</section>
   
);
};

export default CheckoutPage;


