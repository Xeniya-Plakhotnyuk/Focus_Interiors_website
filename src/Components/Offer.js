import { useState } from "react";
import { offer } from "./data";

function Offer(){

    const[service, setService] = useState(offer);
    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
      element.showMore = !element.showMore;
      setShowText(!showText);
    };


    return(
        <div className="main">
{service.map((element) => {
          const { id, title, description, picture, showMore } =
            element;

          return (
            <div key={id}>
              <div className="card">
                <div className="into_card">
                <div className="top">
                  <h2 className ='servise_name'>
                    {title}
                  </h2>
                </div>

                <div>
                  <img
                    src={picture}
                    alt="service"
                    width="400px"
                    className="places"
                  />
                </div>
                <div>
                  <p className="description">
                    {showMore
                      ? description
                      : description.substring(0, 230) + "....."}
                  </p>
                  <button
                    className="showmore"
                    onClick={() => showTextClick(element)}
                  >
                    {showMore ? "Show Less" : "Expand"}
                  </button>
                </div>
                </div>
                
              </div>
            </div>
          );
        })}

        </div>
    )
}

export default Offer;