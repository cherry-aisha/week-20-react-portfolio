import React, { useState } from 'react';

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError(true);
      setErrorMessage("Enter a valid email address!");
      return;
    }
    // submit the form
    alert("Form submitted successfully!");
  }

  function isValidEmail(email) {
    if (!email) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmailBlur() {
    if (!isValidEmail(email)) {
      setEmailError(true);
      setErrorMessage("Enter a valid email address!");
    } else {
      setEmailError(false);
      setErrorMessage("");
    }
  }

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          className="name"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label>Email:</label>
        <input
          className="email"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={handleEmailBlur}
          required
        />
        {emailError && (
          <div style={{ color: "red" }}>{errorMessage}</div>
        )}

        <label>Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;

