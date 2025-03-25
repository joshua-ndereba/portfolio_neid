import "./form.css";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setSuccess("");

    // EmailJS configuration
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const publicKey = "your_public_key";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Joshua Ndereba",
      to_email: "joshneid07@gmail.com",
      subject: formData.subject,
      message: formData.message,
    };
//to see the email locations visit the https://www.emailjs.com
//create a new service and note down the service ID
//go to intergration tab and copy the public key
//on emailjs configuration replace the values to the variables as expected

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSuccess("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setError("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="form">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Subject</label>
        <br />
        <input
          type="text"
          name="subject"
          placeholder="Enter your subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <br />
        <label>Message</label>
        <br />
        <textarea
          name="message"
          rows="10"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;