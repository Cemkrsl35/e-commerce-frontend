import React from "react";
import "./Services.css";

import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serviceBox">
          <FaCartFlatbedSuitcase size={50} style={{ marginBottom: "20px" }} />
          <h3>Hızlı ve Ücretsiz Kargo</h3>
          <p>Tüm siparişler ücretsiz kargo</p>
        </div>
        <div className="serviceBox">
          <TfiHeadphoneAlt size={50} style={{ marginBottom: "20px" }} />
          <h3>24/7 Müşteri Desteği</h3>
          <p>24/7 dost ve müşteri desteği</p>
        </div>
        <div className="serviceBox">
          <RiShieldCheckLine size={50} style={{ marginBottom: "20px" }} />
          <h3>Para İade Garantisi</h3>
          <p>30 gün içinde para iadesi yapıyoruz</p>
        </div>
      </div>
    </>
  );
};

export default Services;
