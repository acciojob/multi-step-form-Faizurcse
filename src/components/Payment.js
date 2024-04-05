import React, { useState } from "react";

function Payment({ prevStep, submitForm }) {
  const [showCardMsg, setShowCardMsg] = useState(false);
  const [showExpiryMsg, setShowExpiryMsg] = useState(false);

  const handleCardMouseEnter = () => {
    setShowCardMsg(true);
    setTimeout(() => {
      setShowCardMsg(false);
    }, 6000);
  };

  const handleExpiryMouseEnter = () => {
      setShowExpiryMsg(true);
    setTimeout(() => {
        setShowExpiryMsg(false);
    }, 6000);
  };

  return (
    <div id='step3' style={{ height: "400px" }}>
      <form action="" onSubmit={submitForm}>
        <h3>Payment Details</h3>
        <label htmlFor="card_info">Credit Card Number :</label>
        <br />
        <br />
        <input
          onChange={handleCardMouseEnter}
          type="text"
          id="card_info"
          required
        />
        <br />
        <br />
        {showCardMsg && (
          <p style={{ color: "red" }}>
            Credit Card numbers must be Exactly 12 digits.
          </p>
        )}
        <label htmlFor="expiry_date">Expiration Date :</label>
        <br />
        <br />
        <input
          onChange={handleExpiryMouseEnter}
          type="text"
          id="expiry_date"
          required
        />
        <br />
        <br />
        {showExpiryMsg && (
          <p style={{ color: "red" }}>
            Expiry date must be in the form of MM/YY
          </p>
        )}
        <button onClick={prevStep}>Previous</button>
        <button style={{ marginLeft: "50px" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Payment;
