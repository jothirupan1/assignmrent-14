import React from 'react';


function Contact() {
  return (
      <div className="container mt-5 mb-5" id='Contact'>
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6"> 
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="4" 
                placeholder="Write your message here" 
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Contact;
