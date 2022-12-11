import React from "react";
import { Organ } from "./Organ/Organ";
import { Route, Routes } from "react-router-dom";

import "./index.css";
export default (props) => {
  return (
    <div className="Organ__parent">
      <div className="app">
        <header className="app-header">
          <div className="app-header-logo">
            <div className="logo">
              <span className="logo-icon">
                <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
              </span>
              <h1 className="logo-title">
                <span>Medi</span>
                <span>Buddy</span>
              </h1>
            </div>
          </div>
          <div className="app-header-navigation">
            <div className="tabs">
              <a href="#">Request Organ</a>
              <a href="#" className="active">
                Overview
              </a>
              <a href="#">Donate Organ</a>
            </div>
          </div>
          <div className="app-header-actions">
            <button className="user-profile">
              <span>{props.name || "Patient"}</span>
              <span>
                <img
                  src={
                    props.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OzagelduOqZsuVoyAYQcGI-sHhwK7dIxVA&usqp=CAU"
                  }
                />
              </span>
            </button>
            <div className="app-header-actions-buttons">
              <button className="icon-button large">
                <i className="ph-magnifying-glass"></i>
              </button>
              <button className="icon-button large">
                <i className="ph-bell"></i>
              </button>
            </div>
          </div>
          <div className="app-header-mobile"></div>
        </header>
        <div className="app-body">
          <div className="app-body-navigation">
            <footer className="footer">
              <div>
                Medi Buddy ©<br />
                All Rights Reserved 2022
              </div>
            </footer>
          </div>
          <div className="app-body-main-content">
            <Routes>
                <Route path="/donate" element={<Organ tagline={""} href={{}} />} />
                <Route path="/request" element={<Organ tagline={""} href={{}} />} />
                <Route path="/" element={<Organ tagline={""} href={{}} />} />
            </Routes>

            {/* <section className="transfer-section">
              <div className="transfer-section-header">
                <h2>Latest transfers</h2>
                <div className="filter-options">
                  <p>Filter selected: more than 100 $</p>
                  <button className="icon-button">
                    <i className="ph-funnel"></i>
                  </button>
                  <button className="icon-button">
                    <i className="ph-plus"></i>
                  </button>
                </div>
              </div>
              <div className="transfers">
                <div className="transfer">
                  <div className="transfer-logo">
                    <img src="https://assets.codepen.io/285131/apple.svg" />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Apple Inc.</dt>
                      <dd>Apple ID Payment</dd>
                    </div>
                    <div>
                      <dt>4012</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>28 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- $ 550</div>
                </div>
                <div className="transfer">
                  <div className="transfer-logo">
                    <img src="https://assets.codepen.io/285131/pinterest.svg" />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Pinterest</dt>
                      <dd>2 year subscription</dd>
                    </div>
                    <div>
                      <dt>5214</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>26 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- $ 120</div>
                </div>
                <div className="transfer">
                  <div className="transfer-logo">
                    <img src="https://assets.codepen.io/285131/warner-bros.svg" />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Warner Bros.</dt>
                      <dd>Cinema</dd>
                    </div>
                    <div>
                      <dt>2228</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>22 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- $ 70</div>
                </div>
              </div>
            </section> */}
          </div>
          <div className="app-body-sidebar"></div>
        </div>
      </div>
    </div>
  );
};
