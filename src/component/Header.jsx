import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="offer">
        <div className="rectangle">
          <p>
            30%
            <br />
            OFF
          </p>
        </div>
        <div className="rectangle1">
            <div>
                <input type="radio" />
            </div>
            <div className="offerdetails">
                <p className="offers">Buy 1 Get 2</p>
                <p className="offeredprice">$18.00 USD</p>
            </div>
        </div>
      </div>
      <div className="offer">
        <div className="rectangle">
          <p>
            30%
            <br />
            OFF
          </p>
        </div>
        <div className="rectangle1">
            <div>
                <input type="radio" />
            </div>
            <div className="offerdetails">
                <p className="offers">Buy 2 Get 4</p>
                <p className="offeredprice">$24.00 USD</p>
            </div>
            <p className="popular">Most Popular</p>
        </div>
      </div>
      <div className="productdetails">
        
      </div>
      <div className="amountblock">
        <p className="free">Free Delivery</p>
        <p>Total : $18.00 USD</p>
      </div>
      <button>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "20px" }}
        >
          <path
            d="M6 1.33333V10.6667M1.33333 6H10.6667"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Add to Cart
      </button>
      <div className="footer">
        Powered by <p>Pumper</p>
      </div>
    </div>
  );
};

export default Header;
