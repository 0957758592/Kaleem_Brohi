import React from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { STORE_KEYS } from "@/stores";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SelectItem({ name, options, setPostQuery, setFlag }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
    if (name === "Grade" && e.target.value !== " ") {
        setFlag(true);
    } else {
        setFlag(false);
    }
    setPostQuery(name.toLowerCase(), e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={`label-${name}`}>{`Data by ${name}`}</InputLabel>
        <Select
          labelId={`label-${name}`}
          id={name}
          value={value}
          onChange={handleChange}
        >
          {options.map(option => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(SelectItem);
