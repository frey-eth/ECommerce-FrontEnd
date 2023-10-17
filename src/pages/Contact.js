import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <BreadCrumb title="Contact" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d141754.14578888853!2d106.60900304279477!3d10.878035883147763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a1a56abe59%3A0xd1c5da86c3724143!2sUnihub%20Coffee!5e0!3m2!1svi!2s!4v1697027318542!5m2!1svi!2s"
                width="600"
                height="450"
                allowfullscreen=""
                className="border-0 w-100"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control w-100"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineHome className="fs-5 mb-0" />
                        <address className="mb-0">
                          123 Luong Dinh Cua, Thu Duc District, Ho Chi Minh City
                        </address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+84 352 498 496">+84 352 498 496</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:contactfreyforwork@gmail.com">
                          contactfreyforwork@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;
