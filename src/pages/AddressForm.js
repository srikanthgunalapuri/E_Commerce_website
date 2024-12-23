import React, { useState } from 'react';
// import './AddressForm.css';

const AddressForm = ({ show, onClose, address, onSave }) => {
    const [formData, setFormData] = useState(address || {
        fullName: '',
        mobileNumber: '',
        pincode: '',
        country: 'India'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Update your shipping address</h2>
                <h3>Edit your address</h3>
                <div className="autofill-container">
                    <button className="autofill-button">Autofill</button>
                </div>
                <form>
                    <div className="form-group">
                        <label>Country/Region</label>
                        <select name="country" value={formData.country} onChange={handleChange}>
                            <option>India</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Full name (First and Last name)</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mobile number</label>
                        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Pincode</label>
                        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                    </div>
                    <button type="button" className="button" onClick={handleSave}>Save</button>
                </form>
            </div>
        </div>
    );
};

export default AddressForm;
