import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import MultipleSelect from "@/components/MultipleSelect";

import { STORE_KEYS } from "@/stores";

const FilterByEvents = ({ optEvents, isDsSet, setEventsOpt, setIsEventsSelected}) => {
  return (
    <MultipleSelect
      name="event"
      options={optEvents}
      isSet={isDsSet}
      setOptions={setEventsOpt}
      //disabled={!isGradeSelected}
      setFlag={setIsEventsSelected}
    />
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: { optEvents, isDsSet, setEventsOpt, setIsEventsSelected}
    }) => ({
      optEvents,
      isDsSet,
      setEventsOpt,
      setIsEventsSelected
    })
  )
)(FilterByEvents);
