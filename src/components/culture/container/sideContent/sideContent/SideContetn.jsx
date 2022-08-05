import React from "react";
import Heading from "../../../../heading/Heading";
import Countries from "./countries/Countries";
import Subscribe from "./subscribe/Subscribe";

const SideContetn = () => {
  return (
    <div>
      <Heading title="Most popular countries" />
      <Countries />
      <Subscribe />
    </div>
  );
};

export default SideContetn;
