import React, { useState } from "react";

const states = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

const Address = () => {
  const [data, setData] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
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
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleInputChange}
        />
        <select value={data.state} name="state" onChange={handleInputChange}>
          <option value={""}>Select Your State</option>
          {Object.entries(states).map(([abbreviation, state]) => (
            <option value={abbreviation}>{state}</option>
          ))}
        </select>
        <input
          type="text"
          name="zip"
          placeholder="Zip"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Address;
