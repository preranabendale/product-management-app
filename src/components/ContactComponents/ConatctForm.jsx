import React from "react";

const ContactForm = () => {
  return (
    <section className="py-5" id="contactForm" style={{ backgroundColor: "#94c1fba5" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Card Container */}
            <div className="card shadow-lg border-0 p-5 rounded-4" style={{ background: "white" }}>
              <h3 className="fw-bold text-center mb-4 text-primary">
                Send Us a Message
              </h3>

              <form>
                {/* Name & Email */}
                <div className="row g-3">
                  <div className="col-md-6">
                    <input 
                      type="text" 
                      className="form-control form-control-lg shadow-sm" 
                      placeholder="Your Name" 
                      style={{ borderRadius: "12px" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <input 
                      type="email" 
                      className="form-control form-control-lg shadow-sm" 
                      placeholder="Your Email" 
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="my-3">
                  <input 
                    type="text" 
                    className="form-control form-control-lg shadow-sm" 
                    placeholder="Subject" 
                    style={{ borderRadius: "12px" }}
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <textarea 
                    className="form-control form-control-lg shadow-sm" 
                    rows="5" 
                    placeholder="Your Message" 
                    style={{ borderRadius: "12px" }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-lg px-5 text-white fw-bold"
                    style={{
                      background: "linear-gradient(135deg, #0d6efd, #6f42c1)",
                      borderRadius: "50px",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-3px)";
                      e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
                    }}
                  >
                    Send Message
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;