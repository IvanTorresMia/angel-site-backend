import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <form>
        <h1>Let's Connect</h1>
        <label for="name">Full Name</label>
        {/* <br /> */}
        <input id="name" name="name" />
        <br />
        <label for="email">Email</label>
        {/* <br /> */}
        <input id="email" name="email" />
        <br />
        <label for="name">Message</label>
        {/* <br /> */}
        <textarea rows="10" col="20" id="message" name="message" />
        <br />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
