import React, { useState } from "react";
import { states } from "../../constants";

const Address = ({ address }) => {
  const [data, setData] = useState({
    street: address.street || "",
    city: address.city || "",
    state: address.state || "",
    zip: address.zip || "",
  });
  console.log("ADDRESS", address);
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="PaymentForm">
      <h3>Address</h3>
      <form action="">
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={data.street}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={data.city}
          onChange={handleInputChange}
        />
        <select value={data.state} name="state" onChange={handleInputChange}>
          <option value={""}>Select Your State</option>
          {Object.entries(states).map(([abbreviation, state]) => (
            <option value={abbreviation} key={abbreviation}>
              {state}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="zip"
          placeholder="Zip"
          value={data.zip}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Address;
