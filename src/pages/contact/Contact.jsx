import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam fugiat
        similique architecto rerum facilis adipisci nobis possimus quaerat,
        maiores nesciunt?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="http://gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://wa.me/+56951929740"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="http://m.me/ernest_achiever"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
