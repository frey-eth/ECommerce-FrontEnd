import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";
const TermAndConditions = () => {
  return (
    <>
      <BreadCrumb title="Term And Conditions" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div className="privacy-container">
                <h1>Terms and Conditions</h1>
                <p>
                  Welcome to our website. By accessing and using this website,
                  you agree to comply with and be bound by the following terms
                  and conditions.
                </p>

                <h2>Use of the Website</h2>
                <p>
                  The content of this website is for your general information
                  and use only. It is subject to change without notice.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  All content on this website is the property of [Your Company
                  Name] and is protected by copyright, trademark, and other
                  intellectual property laws.
                </p>

                <h2>User Account</h2>
                <p>
                  If you create an account on this website, you are responsible
                  for maintaining the confidentiality of your account and
                  password. You agree to accept responsibility for all
                  activities that occur under your account.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  [Your Company Name] shall not be liable for any direct,
                  indirect, incidental, consequential, or punitive damages
                  arising out of your access to or use of the website.
                </p>

                <h2>Changes to Terms and Conditions</h2>
                <p>
                  [Your Company Name] reserves the right to modify these terms
                  and conditions at any time. Your continued use of the website
                  after changes are made constitutes your acceptance of the new
                  terms.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our terms and
                  conditions, please contact us at{" "}
                  <a href="mailto:info@example.com">info@example.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
