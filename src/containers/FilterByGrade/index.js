import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterByGrade() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Data by Grade</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={}></MenuItem>
          <MenuItem value={10}>3</MenuItem>
          <MenuItem value={20}>4</MenuItem>
          <MenuItem value={30}>5</MenuItem>
          <MenuItem value={40}>6</MenuItem>
          <MenuItem value={50}>7</MenuItem>
          <MenuItem value={60}>8</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
