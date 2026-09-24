import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(
      "Thank you, " + name + ". Your email " + email + " has been submitted.",
    );
    setName("");
    setEmail("");
  };

  return (
    <section id="contact" className="section-panel contact-section">
      <div>
        <p className="eyebrow">Contact Me</p>
        <h2>Send A Message</h2>
        <p>Fill out the form below with your name and email address.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Submit</button>

        {message && <p className="form-message">{message}</p>}
      </form>
    </section>
  );
}

export default Contact;
