import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const TermAndConditions = () => {
  return (
    <>
      <BreadCrumb title="Term and Conditions" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
