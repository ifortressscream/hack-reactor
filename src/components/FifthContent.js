import React from "react";
import Facebook from "../images/converted/facebook.png";
import LinkedIn from "../images/converted/linkedin.png";
import GoogleColored from "../images/converted/googlecolored.png";
import Paypal from "../images/converted/paypal.png";
import Apple from "../images/converted/apple.png";
import Amazon from "../images/converted/amazon.png";
import Capital from "../images/converted/capital-one.png";
import Microsoft from "../images/converted/microsoft.png";
import Visa from "../images/converted/visa.png";
import Accenture from "../images/converted/accenture.png";

function FifthContent() {
  return (
    <div>
      <div class="mx-auto max-w-7xl">
        <div class="pb-10">
          <div class="flex justify-between">
            <div>
              <img class="w-48" src={Facebook} alt="" />
            </div>
            <div>
              <img class="w-48" src={LinkedIn} alt="" />
            </div>
            <div>
              <img class="w-48" src={GoogleColored} alt="" />
            </div>
            <div>
              <img class="w-48" src={Paypal} alt="" />
            </div>
            <div>
              <img class="w-48" src={Apple} alt="" />
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <img class="w-48" src={Amazon} alt="" />
            </div>
            <div>
              <img class="w-48" src={Capital} alt="" />
            </div>
            <div>
              <img class="w-48" src={Microsoft} alt="" />
            </div>
            <div>
              <img class="w-48" src={Visa} alt="" />
            </div>
            <div>
              <img class="w-48" src={Accenture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthContent;
