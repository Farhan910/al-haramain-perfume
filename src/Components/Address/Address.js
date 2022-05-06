import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div>
      <div>
        <h1 className="title-product mx-auto">Our Address</h1>
        <div className="row address-container m-0">
          <div className="col-lg-3 col-12 address ">
            <h2 >Al Haramain Dubai </h2>
            <p>
              Sales Head Office, P.O. Box 13754, Dubai, United Arab Emirates{" "}
              <br />
              Call Us: 80042726246 <br /> Whatsapp: +971 52 102 6080
            </p>
          </div>
          <div className="col-lg-3 col-12 address">
            <h2 >Al Haramain Bangladesh  </h2>
            <p>
              House#12, Road#19, Sector#07, Uttara, Dhaka-1230, Bangladesh.{" "}
              <br />
              KA-244, Kuril, Jamuna Future Park, GB-001 Southeast ground floor,
              Vatara, Dhaka-1229
              <br /> +88 019 2225 7777
            </p>
          </div>
          <div className="col-lg-3 col-12 address">
            <h2 >Al Haramain London </h2>
            <p>
              4 Corners Distribution L.T.D. Unit 3B Katella Trading Estate 10A
              River Road, Barking, Essex IG11 ODG , Essex United Kingdom England
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
