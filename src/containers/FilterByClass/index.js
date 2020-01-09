import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";

const FilterByClass = ({ optClasses, isClSet, isBuildingsSelected, setIsClassSelected }) => {
  return (
    <MultipleSelect
      name="className"
      options={optClasses}
      isSet={isClSet}
      // setOptions={setClassesOpt}
      // getDataFromServer={getFilterOptionsClass}
      //disabled={!isBuildingsSelected}
      setFlag={setIsClassSelected}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { optClasses, isClSet, isBuildingsSelected, setIsClassSelected } }) => ({
    optClasses,
    isClSet,
    isBuildingsSelected,
    setIsClassSelected
  }))
)(FilterByClass);
