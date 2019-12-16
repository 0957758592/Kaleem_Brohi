import React from "react";
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
import { getFilterOptionsClass } from "@/stores/wrd_apis";

import { STORE_KEYS } from "@/stores";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 300
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

const MultipleSelect = ({ name, options, isSet, setOptions,  getDataFromServer}) => {
  const classes = useStyles();
  const [nameItem, setNameItem] = React.useState([]);

  const handleChange = async e => {
    const value = e.target.value;
    setNameItem(value);
    const idsValue = options.reduce((result, item) => {
      if (value.includes(item.name)) {
        return [...result, item.id];
      }
      return result;
    }, []);
    const data = await getDataFromServer(idsValue.join(","));
    console.log(data)
    // let newData = []
    // for (let i = 0; i < classes.length; i++) {
    //   newClasses.push(classes[i].name || "");
    // }
    setOptions(data)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">
          {`Data by ${name}`}
        </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={nameItem}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
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

export default MultipleSelect;
