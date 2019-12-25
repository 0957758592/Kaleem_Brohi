import React from "react";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import SelectItem from "@/components/Select";
import { STORE_KEYS } from "@/stores";
import PropTypes from "prop-types";

const grade = [
  { name: " " },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 }
];

function FilterByGrade({ setIsGradeSelected, isGradeSelected, setDistrictsOpt }) {
  return <SelectItem name="Grade" options={grade} setFlag={setIsGradeSelected} />;
}
export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setIsGradeSelected, isGradeSelected, setDistrictsOpt } }) => ({
        setIsGradeSelected,
        isGradeSelected,
        setDistrictsOpt
    }))
)(FilterByGrade);

FilterByGrade.propTypes = {
  setIsGradeSelected: PropTypes.func.isRequired,
  isGradeSelected: PropTypes.bool.isRequired,
  setDistrictsOpt: PropTypes.func.isRequired
};
