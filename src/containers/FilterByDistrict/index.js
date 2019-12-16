import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { getFilterOptionsBuilding } from "@/stores/wrd_apis";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";

const FilterByDistrict = ({ optDistricts, isDsSet, setBuildingOpt }) => {
  return (
    <MultipleSelect
      name="Districts"
      options={optDistricts}
      isSet={isDsSet}
      setOptions={setBuildingOpt}
      getDataFromServer={getFilterOptionsBuilding}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: { optDistricts, isDsSet, setBuildingOpt }
    }) => ({
      optDistricts,
      isDsSet,
      setBuildingOpt
    })
  )
)(FilterByDistrict);
