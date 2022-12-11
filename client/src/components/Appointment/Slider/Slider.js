import React from "react";

import "./Slider.css";

export const Slider = () => {
  return (
    <>
      <div className="untitled">
        <div className="untitled__slides">
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Content</span>
              <span>Content</span>
              <a
                className="button"
                href="/booking"
              >
                Book
              </a>
            </div>
          </div>
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Content</span>
              <span>Content</span>
              <a
                className="button"
                href="#"
              >
                Book
              </a>
            </div>
          </div>
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Content</span>
              <span>Content</span>
              <a
                className="button"
                href="#"
              >
                Book
              </a>
            </div>
          </div>
          <div className="untitled__slide">
            <div className="untitled__slideBg"></div>
            <div className="untitled__slideContent">
              <span>Content</span>
              <span>Content</span>
              <a
                className="button"
                href="#"
              >
                Book
              </a>
            </div>
          </div>
        </div>
        <div className="untitled__shutters"></div>
      </div>
    </>
  );
};
