import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";

const ShippingPolicy = () => {
  return (
    <>
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div className="privacy-container">
                <h1>Shipping Policy</h1>
                <p>
                  We strive to provide fast and reliable shipping to our
                  customers. Please review the following information to
                  understand our shipping policies.
                </p>

                <h2>Shipping Times</h2>
                <p>
                  Our standard shipping times are [number of days] days for
                  domestic orders and [number of days] days for international
                  orders. Please note that these estimates may vary based on
                  your location.
                </p>

                <h2>Shipping Costs</h2>
                <p>
                  Shipping costs are calculated at checkout based on the weight
                  and dimensions of your order, as well as your shipping
                  address. You can review the shipping costs before completing
                  your purchase.
                </p>

                <h2>Order Tracking</h2>
                <p>
                  Once your order is shipped, you will receive a confirmation
                  email with a tracking number. You can use this tracking number
                  to monitor the status and location of your package.
                </p>

                <h2>International Shipping</h2>
                <p>
                  For international orders, additional customs and import duties
                  may apply. These fees are the responsibility of the customer.
                  Please check with your local customs office for more
                  information.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our shipping
                  policy, please contact us at{" "}
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

export default ShippingPolicy;
