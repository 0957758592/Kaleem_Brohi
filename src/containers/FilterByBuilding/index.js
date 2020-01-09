import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { getFilterOptionsClass } from "@/stores/wrd_apis";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";

const FilterByBuilding = ({ optBuildings, isBdSet, setClassesOpt, setIsBuildingsSelected, isDistrictSelected }) => {
  return (
    <MultipleSelect
      name="building"
      options={optBuildings}
      isSet={isBdSet}
      setOptions={setClassesOpt}
      getDataFromServer={getFilterOptionsClass}
      //disabled={!isDistrictSelected}
      setFlag={setIsBuildingsSelected}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: { optBuildings, isBdSet, setClassesOpt, setIsBuildingsSelected, isDistrictSelected }
    }) => ({
      optBuildings,
      isBdSet,
      setClassesOpt,
      setIsBuildingsSelected,
      isDistrictSelected
    })
  )
)(FilterByBuilding);
