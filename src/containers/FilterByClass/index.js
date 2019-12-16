import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";

const FilterByClass = ({ optClasses, isClSet }) => {
  return (
    <MultipleSelect
      name="Class"
      options={optClasses}
      isSet={isClSet}
      // setOptions={setClassesOpt}
      // getDataFromServer={getFilterOptionsClass}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { optClasses, isClSet } }) => ({
    optClasses,
    isClSet
  }))
)(FilterByClass);
