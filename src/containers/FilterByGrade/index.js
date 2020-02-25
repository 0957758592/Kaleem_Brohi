import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import map from "lodash/map";
import SelectItem from "@/components/Select";
import { STORE_KEYS } from "@/stores";

const grade = [
  { name: " ", value: "" },
  { name: 3, value: 3 },
  { name: 4, value: 4 },
  { name: 5, value: 5 },
  { name: 6, value: 6 },
  { name: 7, value: 7 },
  { name: 8, value: 8 }
];

function FilterByGrade({ setIsGradeSelected, optGrades }) {
  return (
    <SelectItem name="Grade" options={map(optGrades, item => ({ ...item, value: item.name }))} setFlag={setIsGradeSelected} />
  );
}
export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({ [STORE_KEYS.VIEWMODESTORE]: { setIsGradeSelected, optGrades } }) => ({
      setIsGradeSelected,
      optGrades
    })
  )
)(FilterByGrade);
