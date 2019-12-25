import React, {useEffect} from "react";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

import { STORE_KEYS } from "@/stores";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const MultipleSelect = ({
  name,
  options,
  isSet,
  setOptions,
  getDataFromServer,
  setPostQuery,
  disabled,
  setFlag
}) => {
  const classes = useStyles();
  const [nameItem, setNameItem] = React.useState([]);
  useEffect(() => {
    if(!options.length || disabled) {
      setNameItem([]);
    }
  },[options, disabled]);
  const handleChange = async e => {
    const value = e.target.value;
    setNameItem(value);
    const idsValue = options.reduce((result, item) => {
      if (value.includes(item.name)) {
        return [...result, item.id];
      }
      return result;
    }, []);
    if (getDataFromServer) {
      const data = await getDataFromServer(idsValue.join(","));
      setOptions(data);
      value.length ? setFlag(true) : setFlag(false);
    }
    setPostQuery(name.toLowerCase(), idsValue.join(","));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={`mutiple-checkbox-label-${name}`}>
          {`Data by ${name}`}
        </InputLabel>
        <Select
          labelId={`mutiple-checkbox-label-${name}`}
          id={`mutiple-checkbox-${name}`}
          multiple
          value={nameItem}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
          disabled={disabled}
        >
          {options.map(item => (
            <MenuItem key={item.name} value={item.name}>
              <Checkbox checked={nameItem.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(MultipleSelect);

MultipleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  isSet: PropTypes.bool,
  setOptions: PropTypes.func,
  getDataFromServer: PropTypes.func,
  setPostQuery: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  setFlag: PropTypes.func.isRequired
};
