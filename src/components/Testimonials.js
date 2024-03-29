import React from "react";
import "./css/Testimonials.css";

function Testimonial(props) {
  return (
    <div className="Testimonials">
      <div className="row">
        <div className="col-6 offset-3 testimonial">
          <h3 className="secondary-text-testimonial">Testimonial</h3>
          <p className="paragraph-text">{props.userTestimonial}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
