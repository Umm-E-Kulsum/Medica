import React from "react";
import { Cards } from "../../../utils/Global/Cards/Cards";

import "./AppointmentFeatures.css";

export const Appointmentfeatures = () => {
  return (
    <div className="Appointment__features">
      <div className="Appointment__title">Appointment</div>
      <div className="Appointment__feature-cards">
        <Cards
          name={"Doctor"}
          quote={"Affordable"}
          content={" We are committed to provide safe, reliable and affordable medicines as well as a customer service philosophy that is worthy of our valued customers’ loyalty"}
          link={"/booking"}
          image={
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
        />
        <Cards
          name={"Doctor"}
          quote={"Easy"}
          content={"place your order online and have your medicines delivered to you – without leaving the comfort of your home.What’s more, with easy access to reliable drug information, you get to know all about your medicine"}
          link={"/booking"}
          image={
            "https://images.unsplash.com/photo-1612943680768-d82060323fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
        <Cards
          name={"Doctor"}
          quote={"Trustable"}
          content={"we not only provide you with a wide range of medicines listed under various categories, we also offer a wide choice of OTC products including wellness products, vitamins, diet/fitness supplements, herbal products, pain relievers, diabetic care kits, baby/mother care products, beauty care products and surgical supplies."}
          link={"/booking"}
          image={
            "https://images.unsplash.com/photo-1614579093335-b6ab37ddaace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
        />
      </div>
    </div>
  );
};
