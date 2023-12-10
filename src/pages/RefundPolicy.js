import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div className="privacy-container">
                <h1>Refund Policy</h1>
                <p>
                  We want you to be satisfied with your purchase. If you are not
                  completely satisfied, you may request a refund within [number
                  of days] days of your purchase.
                </p>

                <h2>Refund Eligibility</h2>
                <p>
                  To be eligible for a refund, your item must be unused and in
                  the same condition that you received it. It must also be in
                  the original packaging.
                </p>

                <h2>Refund Process</h2>
                <p>
                  To request a refund, please contact our customer service at{" "}
                  <a href="mailto:refund@example.com">refund@example.com</a>.
                  Include your order number and the reason for your refund
                  request.
                </p>

                <h2>Refund Timeframe</h2>
                <p>
                  Once your refund request is received and inspected, we will
                  notify you of the approval or rejection of your refund. If
                  approved, your refund will be processed, and a credit will
                  automatically be applied to your credit card or original
                  method of payment within [number of days] days.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our refund policy,
                  please contact us at{" "}
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

export default RefundPolicy;
