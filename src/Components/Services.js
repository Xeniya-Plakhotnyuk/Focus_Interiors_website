import Offer from "./Offer";

import "aos/dist/aos.css";

function Services() {
  return (
    <div>
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="title_text_about"
      >
        What we offer
      </h1>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <Offer />
      </div>
    </div>
  );
}

export default Services;
