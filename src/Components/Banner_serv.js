import React from "react";
import { useNavigate } from "react-router-dom";

const Banner_serv = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container_first_banner">
        <div className="text_container">
          <h2 className="service_text">Looking for consultation?</h2>
          <p className="service_text_p">Check out how we can help you!</p>
          <button
            className="banner_contact"
            onClick={() => navigate("/services")}
          >
            Services
          </button>
        </div>

        <div>
          <img
            src="images/armchair.png"
            className="chair"
            alt="chair"
            width="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner_serv;
