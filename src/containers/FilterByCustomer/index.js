import React from 'react';
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import TextForm from "@/components/TextForm/TextForm";

import { STORE_KEYS } from "@/stores";
import PropTypes from "prop-types";

function FilterByCustomer({name, setPostQuery}) {

  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
    setPostQuery(name.toLowerCase(), e.target.value);
  };
  return (
      <TextForm name="Customer" onChange={handleChange} value={value} id="standard-basic" label="Data by Customer" />
  );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
      setPostQuery
    }))
)(FilterByCustomer);

FilterByCustomer.propTypes = {
    setPostQuery: PropTypes.func.isRequired
};