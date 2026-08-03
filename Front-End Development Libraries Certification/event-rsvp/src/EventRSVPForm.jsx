import { useState } from "react";

function EventRSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberOfAttendees: 0,
    dietryPreferences: "",
    additionalGuests: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("RSVP Submitted!");
  };

  return (
    <div className="rsvp-container">
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            onChange={handleChange}
            placeholder="Your Name"
            name="name"
            id="name"
            required
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            onChange={handleChange}
            placeholder="Your Email"
            name="email"
            id="email"
            required
          />
        </label>

        <label htmlFor="attendees">
          Number of Attendees
          <input
            type="number"
            onChange={handleChange}
            placeholder="Number of Attendees"
            name="numberOfAttendees"
            id="attendees"
            required
            min={1}
          />
        </label>

        <label htmlFor="preferences">
          Dietary Preferences
          <input
            type="text"
            onChange={handleChange}
            placeholder="Dietary Preferences (Optional)"
            name="dietryPreferences"
            id="preferences"
          />
        </label>

        <label className="checkbox-label" htmlFor="guests">
          Bringing Additional Guests?
          <input
            type="checkbox"
            onChange={handleChange}
            name="additionalGuests"
            id="guests"
          />
        </label>

        <button type="submit">Submit RSVP</button>

        {message.length != 0 ? (
          <div className="success-message">
            <h3>{message}</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Number of attendees: {formData.numberOfAttendees}</p>
            <p>Dietary preferences: {formData.dietryPreferences || "None"}</p>
            <p>
              Bringing additional guests:{" "}
              {formData.additionalGuests ? "Yes" : "No"}
            </p>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default EventRSVPForm;
