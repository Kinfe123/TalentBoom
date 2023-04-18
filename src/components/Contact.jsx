import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contacting">
          <div className="row">
            <h1 className="headers">contact us</h1>
          </div>
          <div className="row">
            <h4 style={{ textAlign: "center" }}>We'd love to hear from you!</h4>
          </div>

          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style={{ float: "right" }}>
                <input type="text" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea required defaultValue={""} />
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="primary-button">Send Message</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
