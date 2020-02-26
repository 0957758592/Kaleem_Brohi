import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import map from "lodash/map";
import MultipleSelect from "@/components/MultipleSelect";
import { STORE_KEYS } from "@/stores";

function FilterByGrade({ setIsGradeSelected, optGrades }) {
  return (
    <MultipleSelect
      name="grade"
      options={map(optGrades, item => ({ ...item, value: item.name }))}
      setFlag={setIsGradeSelected}
      // disabled={!optGrades.length}
    />
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
