import React from "react";

import "./Cards.css";

export const Cards = (props) => {
  return (
    <div className="Card__example-2 Card__card">
      <div
        className="Card__wrapper"
        style={{
          background:
            `url('${props.image}') center / cover no-repeat`,
        }}
      >
        <div className="Card__overlay"></div>
        <div className="Card__header">
          <div className="Card__date">
            <span className="Card__day">12</span>
            <span className="Card__month">Aug</span>
            <span className="Card__year">2016</span>
          </div>
          <ul className="Card__menu-content">
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">
                <span>Book</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="Card__data">
          <div className="Card__content">
            <span className="Card__author">{props.name}</span>
            <h1 className="Card__title">
              <a href="#">{props.quote}</a>
            </h1>
            <p className="Card__text">{props.content}</p>
            <a href={props.link || "#"} className="Card__button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
