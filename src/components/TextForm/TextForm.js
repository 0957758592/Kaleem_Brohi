import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import { STORE_KEYS } from "@/stores";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

function TextForm({ name, setPostQuery }) {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
    setPostQuery(name.toLowerCase(), e.target.value);
  };
  return (
    <FormControl className={classes.formControl} noValidate autoComplete="off">
      <TextField
        name={name}
        onChange={handleChange}
        value={value}
        id={name}
        label={`Data by ${name}`}
      />
    </FormControl>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(TextForm);
