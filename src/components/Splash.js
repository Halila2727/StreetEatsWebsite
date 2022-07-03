import React from "react";
import "./css/Splash.css";

function Splash() {
  return (
    <div className="Splash">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="primary-text">We Eat On The Street</h1>
          </div>
        </div>
        <div className="row profile">
          <div className="col-4">
            <img
              className="food-test"
              src="https://cdn.vox-cdn.com/thumbor/EZ9N_-RjpmePCwTAO35saBwlVaw=/0x0:640x480/1200x0/filters:focal(0x0:640x480):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3859582/halal-guys-plate-getty.0.jpg"
              alt="food"
            />
          </div>
          <div className="col-8">
            <h1 className="secondary-text">
              Not all street eats are created equal
            </h1>
            <p className="paragraph-text">
              Ever wonder why some food carts have giant long lines, and others
              barely have any lines at all? Is the cart hype to be believed? Is
              the popular choice always the best?
            </p>
            <p className="paragraph-text">
              Here at Street Eats, we take the business of picking the right
              food cart seriously. We've checked out those carts with the
              consicuously short lines so you can know if they're undiscovered
              gems, or if it's worth waiting in line for the most popular cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
