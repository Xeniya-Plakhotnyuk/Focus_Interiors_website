import { useState } from "react";
import { feedback } from "./data";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [slide, setSlide] = useState(0);
  const { personName, quot, avatar } = feedback[slide];

  const backButton = () => {
    setSlide((slide) => {
      slide--;
      if (slide < 0) {
        return feedback.length - 1;
      }
      return slide;
    });
  };

  const nextButton = () => {
    setSlide((slide) => {
      slide++;
      if (slide > feedback.length - 1) {
        slide = 0;
      }
      return slide;
    });
  };
  return (
    <div>
      <div
        className="container_first"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div>
          <img src="images/vector_1.png" className="vectors" />
        </div>
        <div className="text_container">
          <h1
            className="title_text_about"
            data-aos="zoom-out-left"
            data-aos-duration="1000"
          >
            Here's Our Story...
          </h1>
          <p className="big_p">
            <span className="bold_text">FOCUS Furniture</span> has been a
            fixture in the downtown area for over 30 years. It was founded by a
            husband and wife team who had a passion for finding unique,
            handcrafted pieces from around the world and bringing them to their
            local community. <br></br>
            As the business grew, the owners started to offer interior design
            services in addition to selling furniture. They brought on a team of
            experienced designers who could help their clients create cohesive,
            stylish spaces that reflected their personal tastes and needs.{" "}
            <br></br>
            <span className="bold_text">
              In the 2000s, FOCUS Furniture and Design expanded
            </span>{" "}
            to include a home decor department, which featured a wide selection
            of accessories, rugs, and other finishing touches. They also started
            to offer custom furniture options, allowing customers to create
            pieces that were tailored to their specific measurements and design
            preferences. <br></br>
            Today,{" "}
            <span className="bold_text">
              FOCUS Interiors and Design is a full-service design studio and
              furniture store.
            </span>{" "}
            It has a loyal customer base and a reputation for quality products
            and exceptional service. The current owners are the son of the
            founders and his wife, and they are committed to carrying on the
            traditions of their parents while also embracing new technologies
            and design trends.
          </p>
        </div>
        <div className="text_container">
          <div>
            <img
              src="images/1.jpg"
              className="hello"
              alt="portrait"
              width="500px"
            />
          </div>
          <div>
            <h2
              className="visit"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              Visit us to browse our wide range of furniture options!
            </h2>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="title_text_about"
          data-aos="zoom-out-left"
          data-aos-duration="1000"
        >
          Our Clients Talk
        </h2>
      </div>

      <div className="feedback" data-aos="fade-up" data-aos-duration="3000">
        <div className="but_feedbacks">
          <button className="bigger" onClick={backButton}>
            👈
          </button>
          <button className="bigger" onClick={nextButton}>
            {" "}
            👉{" "}
          </button>
        </div>

        <h2 className="name">{personName}</h2>
        <img src={avatar} className="client" alt="client" width="600px" />

        <div className="quot">
          <p className="simple_text_quot">{quot}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
