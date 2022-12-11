import React from "react";

import "./Booking.css";

export const Booking = () => {
  let today;
  React.useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
  }, []);

  return (
    <div className="Booking__parent">
      <form method="POST" id="survey-form">
        <div class="form-group">
          <label id="name-label" for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label id="email-label" for="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div class="form-group">
          <p>Gender</p>
          <label>
            <input
              name="user-recommend"
              value="definitely"
              type="radio"
              class="input-radio"
              checked
            />
            Male
          </label>
          <label>
            <input
              name="user-recommend"
              value="maybe"
              type="radio"
              class="input-radio"
            />
            Female
          </label>

          <label>
            <input
              name="user-recommend"
              value="not-sure"
              type="radio"
              class="input-radio"
            />
          </label>
        </div>
        <div class="form-group">
          <label id="number-label" for="number">
            Age<span class="clue"></span>
          </label>
          <input
            type="number"
            name="age"
            id="number"
            min="0"
            max="150"
            class="form-control"
            placeholder="Age"
            required
          />
        </div>
        <div class="form-group">
          <p>Doctor you want to visit</p>
          <select id="dropdown" name="role" class="form-control" required>
            <option disabled selected value>
              Category
            </option>
            <option value="ent">ENT</option>
            <option value="job">Doc</option>
            <option value="learner">Doc</option>
            <option value="preferNo">Doc</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <p>Date and Time</p>
          <input type="datetime-local" min={today} />
        </div>

        <div class="form-group">
          <p>Describe your issue in short</p>
          <textarea
            id="comments"
            class="input-textarea"
            name="comment"
            placeholder="Enter here..."
            required
          ></textarea>
        </div>

        <div class="form-group">
          <button type="submit" id="submit" class="submit-button">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};
