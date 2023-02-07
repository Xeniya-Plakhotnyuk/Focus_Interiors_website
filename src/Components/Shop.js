import { useState } from "react";
import { items } from "./data";
import Button from "./Button";
import Banner_serv from "./Banner_serv";
import Swal from "sweetalert";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CountDownTimer from "./CountDownTimer";

export function Shop() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [furniture, setFurniture] = useState(items);

  const chosenFurniture = (searchTerm) => {
    const newFurniture = items.filter(
      (element) => !searchTerm || element.searchTerm === searchTerm
    );
    setFurniture(newFurniture);
  };

  const showAlert = () => {
    Swal({
      title: "BIGOPEN2023",
      text: "COPY your discount code!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <div
        className="container_first"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div>
          <img src="images/vector_1.png" alt="vawes" className="vectors" />
        </div>
        <div className="text_container">
          <h1 className="title_text">
            Welcome to our <br></br> virtual Show room
          </h1>
          <h3 className="simple_text">
            We offer a wide selection of high-quality, stylish furniture pieces
            <br></br>
            for every room in your home. We take pride in offering<br></br>{" "}
            personalized service and will work with you<br></br> to find the
            best options for your space and style.<br></br> Browse our virtual
            showroom from the comfort of your own home<br></br> and enjoy the
            ease of home delivery.<br></br>
            Thank you for considering our furniture store<br></br> for all of
            your home furnishing needs.<br></br> We look forward to helping you
            create the home of your dreams!
          </h3>
        </div>
        <div>
          <img
            src="images/main.jpg"
            alt="banner"
            className="hello"
            width="400px"
          />
        </div>
      </div>

      <div>
        <CountDownTimer countdownTimestampMs={1735686000000} />
      </div>

      <div
        className="disc_button"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <button className="disc" onClick={showAlert}>
          Get discount!
        </button>
      </div>

      <div>
        <h2 className="title_text_about">
          Choose a Furniture piece<br></br> for your taste!
        </h2>
      </div>

      <div>
        <Button filteredFurniture={chosenFurniture} />
      </div>

      <div className="main" data-aos="fade-up" data-aos-duration="3000">
        {furniture.map((element) => {
          const { id, searchTerm, image, itemName, priceBefore, priceNow } =
            element;

          return (
            <div key={id}>
              <div className="card">
                <div className="top">
                  <img
                    src={image}
                    alt="furniture"
                    width="400px"
                    height="250px"
                    className="furniture"
                  />
                </div>
                <div className="bottom">
                  <div>
                    <h2 className="item_description">{itemName}</h2>
                  </div>
                  <div>
                    <div className="prices">
                      <div>
                        <p className="crossed">{priceBefore}</p>
                      </div>
                      <div>
                        <p className="priceNow">{"$ " + priceNow}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div data-aos="fade-up" data-aos-duration="500">
        <Banner_serv />
      </div>
    </div>
  );
}

export default Shop;
