import React from 'react';
// import './Contact.css';
import Layout from '../Layout';

const Contact = () => {
  return (
    <Layout>
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className='btn-submit'>Submit</button>
      </form>
    </div>
    </Layout>
  );
}

export default Contact;
