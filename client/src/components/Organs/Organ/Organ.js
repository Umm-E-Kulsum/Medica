import React from "react";

export const Organ = (props) => {
  return (
    <>
      <section className="service-section">
        <h2>Organs</h2>
        <div className="tiles">
          <article className="tile" id="Organ__kidney">
            <div className="tile-header">
              <i className="ph-lightning-light"></i>
              <h3>
                <span>Kidney</span>
                <span>UrkEnergo LTD.</span>
              </h3>
            </div>
            <a href={props.href.kidney || "#"}>
              <span>{props.tagline || "Go to services"}</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile" id="Organ__lungs">
            <div className="tile-header">
              <i className="ph-fire-simple-light"></i>
              <h3>
                <span>Lungs</span>
                <span>Gazprom UA</span>
              </h3>
            </div>
            <a href={props.href.lungs || "#"}>
              <span>{props.tagline || "Go to services"}</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile" id="Organ__pancreas">
            <div className="tile-header">
              <i className="ph-file-light"></i>
              <h3>
                <span>Pancreas</span>
                <span>Kharkov 62 str.</span>
              </h3>
            </div>
            <a href={props.href.pancreas || "#"}>
              <span>{props.tagline || "Go to services"}</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
        </div>
        <div className="tiles">
          <article className="tile" id="Organ__eye">
            <div className="tile-header">
              <i className="ph-lightning-light"></i>
              <h3>
                <span>Eye</span>
                <span>UrkEnergo LTD.</span>
              </h3>
            </div>
            <a href={props.href.eye || "#"}>
              <span>{props.tagline || "Go to services"}</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article className="tile" id="Organ__skin">
            <div className="tile-header">
              <i className="ph-fire-simple-light"></i>
              <h3>
                <span>Skin</span>
                <span>Gazprom UA</span>
              </h3>
            </div>
            <a href={props.href.skin || "#"}>
              <span>{props.tagline || "Go to services"}</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
          <article
            className="tile"
            id="Organ__heart"
            style={{ filter: "grayscale(10x`0%)" }}
          >
            <div className="tile-header">
              <i className="ph-file-light"></i>
              <h3>
                <span>Heart</span>
                <span>Kharkov 62 str.</span>
              </h3>
            </div>
            <a href="#">
              <span>Under Maintenance</span>
              <span className="icon-button">
                <i className="ph-caret-right-bold"></i>
              </span>
            </a>
          </article>
        </div>
        <div className="service-section-footer">
          <p>lorem15</p>
        </div>
      </section>
    </>
  );
};
