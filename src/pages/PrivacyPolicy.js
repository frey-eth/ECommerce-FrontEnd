import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";
const PrivacyPolicy = () => {
  return (
    <>
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p>
                  Your privacy is important to us. This privacy policy explains
                  how our website collects, uses, and protects your personal
                  information.
                </p>

                <h2>Information We Collect</h2>
                <p>
                  We collect personal information that you provide when using
                  our website. This may include your name, email address, and
                  other details you submit through forms or account
                  registration.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and
                  improve our services. Your information may be used to contact
                  you regarding updates, promotions, and important information
                  related to our products or services.
                </p>

                <h2>Security</h2>
                <p>
                  We are committed to ensuring that your information is secure.
                  In order to prevent unauthorized access or disclosure, we have
                  implemented suitable physical, electronic, and managerial
                  procedures to safeguard and secure the information we collect
                  online.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. Any
                  changes will be posted on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our privacy
                  policy, please contact us at{" "}
                  <a href="mailto:phamvanduong.work@gmail.com">
                    info@example.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
