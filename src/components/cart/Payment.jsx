import React, { useState } from "react";

const Payment = () => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="PaymentForm">
      <h3>Credit Card</h3>
      <form action="">
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="expiry"
          placeholder="Expire Date"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Payment;
