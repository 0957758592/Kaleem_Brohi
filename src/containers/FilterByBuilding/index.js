import React, { useEffect } from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { getFilterOptionsClass } from "@/stores/wrd_apis";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";
import PropTypes from 'prop-types';

const FilterByBuilding = ({
  optBuildings,
  isBdSet,
  setClassesOpt,
  setIsBuildingsSelected,
  isDistrictSelected,
  setBuildingOpt
}) => {
    useEffect(() => {
        if(!isDistrictSelected) {
            setBuildingOpt([]);
            setClassesOpt([]);
            setIsBuildingsSelected(false);
        }
    }, [isDistrictSelected, setBuildingOpt, setClassesOpt, setIsBuildingsSelected]);
  return (
    <MultipleSelect
      name="Building"
      options={optBuildings}
      isSet={isBdSet}
      setOptions={setClassesOpt}
      getDataFromServer={getFilterOptionsClass}
      disabled={!isDistrictSelected}
      setFlag={setIsBuildingsSelected}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: {
        optBuildings,
        isBdSet,
        setClassesOpt,
        setIsBuildingsSelected,
        isDistrictSelected,
        setBuildingOpt
      }
    }) => ({
      optBuildings,
      isBdSet,
      setClassesOpt,
      setIsBuildingsSelected,
      isDistrictSelected,
      setBuildingOpt
    })
  )
)(FilterByBuilding);

FilterByBuilding.propTypes = {
    optBuildings: PropTypes.array.isRequired,
    isBdSet: PropTypes.bool.isRequired,
    setClassesOpt: PropTypes.func.isRequired,
    setIsBuildingsSelected: PropTypes.func.isRequired,
    isDistrictSelected: PropTypes.bool.isRequired,
    setBuildingOpt: PropTypes.func.isRequired
};
