import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Nav from "../Components/Nav";
const Contact = ({ themeToggler }) => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_auc17he",
        "template_r9jji9t",
        formRef.current,
        "esdR6DvfXWuUdeYfH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Nav themeToggler={themeToggler} />
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h3 className="c-title">
            <b>Contact Me</b>
          </h3>
          <div className="c-info">
            <div className="c-info-item">
              <img src="./image/phone.png" alt="" className="c-icon" />
              9952026391
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="./image/email.png" alt="" />
              viji.nitt@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="./image/address.png" alt="" />
              Chennai
            </div>
          </div>
        </div>
        <div className="c-right">
          <h3 className="c-desc">
            <b> Get In Touch</b>
          </h3>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name" name="user_name" />
            </div>
            <div>
              <input type="text" placeholder="Subject" name="user_subject" />{" "}
            </div>
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button className="btn btn-success">Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Contact;
