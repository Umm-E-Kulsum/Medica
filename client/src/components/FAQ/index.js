import React from "react";

import "./index.css";

export default () => {
  const [link, setLink] = React.useState(0);
  React.useEffect(() => {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((e) => {
      e.addEventListener("click", (eve) => {});
    });
  }, [link]);

  return (
    <section className="FAQ__parent">
      <h2 class="title">FAQ's</h2>

      <div class="faq">
        <div class="faq_question">
          <h3>
            Why are you listing Doctors, if it is a walk in clinic/hospital?
          </h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div class="faq_answer">
          <p>
            We aim to be the one place where patients can find the right doctor.
            This is our primary goal and as the second step we help in making
            your visit happen with ease. If the doctor/clinic/hospital only has
            a walk-in facility, we help patients by providing the address and
            phone number.
          </p>
        </div>
      </div>

      <div class="faq">
        <div class="faq_question">
          <h3>
            If we book an appointment through you (MediBuddy), do I stand a
            better chance of getting an appointment?
          </h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div class="faq_answer">
          <p>
            We have no special tie-ups, relationship or consideration with
            doctors in this regard as we want to be an independent unbiased site
            for patients. Through Practo, your chances of booking an appointment
            are the same as using any other means.
          </p>
        </div>
      </div>

      <div class="faq">
        <div class="faq_question">
          <h3>What are your hours of operation?</h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div class="faq_answer">
          <p>
            Our website is open 24 hours a day, 7 days a week. Call Centre
            support is available from Monday to Saturday, 08:30 am to 09:00 pm
            IST and on Sunday's From 09:00 am - 05:00 pm IST.
          </p>
        </div>
      </div>

      <div class="faq">
        <div class="faq_question">
          <h3>Are medications available at MediBuddy safe?</h3>

          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div class="faq_answer">
          <p>
            Yes. The medications that you purchase at our pharmacy are of the
            highest quality. The prescription medications we provide are
            procured from world-class and well-recognised pharmaceutical
            companies such as GlaxoSmithKline, Pfizer, Wyeth, Merck, Ranbaxy,
            Dr. Reddy’s, Nicholas Piramal, Sun Pharmacy and other global
            industry giants. They are manufactured under government supervision,
            prepackaged in factory-sealed blister packs and untouched by human
            hands.
          </p>
        </div>
      </div>
    </section>
  );
};
