import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import SelectItem from "@/components/Select";
import { STORE_KEYS } from "@/stores";

const test = [
  { name: " ", value: " " },
  { name: "Math", value: "M" },
  { name: "Reading", value: "R" }
];

function FilterByTest({ setIsTestSelected }) {
  return <SelectItem name="Test" options={test} setFlag={setIsTestSelected} />;
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setIsTestSelected } }) => ({
    setIsTestSelected
  }))
)(FilterByTest);
