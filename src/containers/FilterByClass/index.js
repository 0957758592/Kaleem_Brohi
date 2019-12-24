import React, { useEffect } from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";

const FilterByClass = ({
  optClasses,
  isClSet,
  isBuildingsSelected,
  setIsClassSelected,
  setClassesOpt,
  isDistrictSelected
}) => {
  {
    useEffect(() => {
      if (!isBuildingsSelected) {
        setClassesOpt([]);
      }
    }, [isBuildingsSelected]);
  }
  return (
    <MultipleSelect
      name="Class"
      options={optClasses}
      isSet={isClSet}
      // setOptions={setClassesOpt}
      // getDataFromServer={getFilterOptionsClass}
      disabled={!isBuildingsSelected || !isDistrictSelected}
      setFlag={setIsClassSelected}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: {
        optClasses,
        isClSet,
        isBuildingsSelected,
        setIsClassSelected,
        setClassesOpt,
        isDistrictSelected
      }
    }) => ({
      optClasses,
      isClSet,
      isBuildingsSelected,
      setIsClassSelected,
      setClassesOpt,
      isDistrictSelected
    })
  )
)(FilterByClass);
