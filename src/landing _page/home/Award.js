import React from "react";
function Award() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/image/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in india</h1>
          <p className="mb-5">
            2+million Zerodha contributer to over 15% of all rerail order
            volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p> Future and OPtions</p>
                </li>
                <li>
                  <p> Commodity derivatives</p>
                </li>
                <li>
                  <p> currency derivatives </p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p> Stocks &ipos</p>
                </li>
                <li>
                  <p> Direct mutual Funds</p>
                </li>
                <li>
                  <p> BOnds and Growth</p>
                </li>
              </ul>
            </div>
            <img src="media\image\pressLogos.png" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Award;
