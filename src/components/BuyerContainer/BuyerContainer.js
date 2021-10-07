import React from "react";
// Componentes
import BuyerForm from "../BuyerForm/BuyerForm";

const BuyerContainer = ({ endCompraNow, total }) => {
  return (
    <div>
      <BuyerForm endCompraNow={endCompraNow} total={total} />
    </div>
  );
};

export default BuyerContainer;
