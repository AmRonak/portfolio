import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <p className="contact-subtitle">
          Have a project in mind, or just want to connect? I'm always open to new opportunities.
        </p>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ronakem188@gmail.com" data-cursor="disable">
                ronakem188@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919601828174" data-cursor="disable">
                +91 9601828174
              </a>
            </p>
            <h4>Education</h4>
            <p>B.E. in Electronics and Communication</p>
            <p style={{ fontSize: "13px", opacity: 0.6, marginTop: "4px" }}>
              Vishwakarma Government Engineering College (GTU), Ahmedabad
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AmRonak"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ironakpanchal/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ronak Panchal</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
