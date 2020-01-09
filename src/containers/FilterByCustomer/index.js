import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import TextForm from "@/components/TextForm/TextForm";

import { STORE_KEYS } from "@/stores";

function FilterByCustomer({ name, setPostQuery }) {

  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
    setPostQuery(name.toLowerCase(), e.target.value);
  };
  return (
    <TextForm name="Customer" onChange={handleChange} value={value} id="standard-basic" label="Data by Customer" />
  );
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

// export default function FilterByCustomer() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Data by Customer" />
//     </form>
//   );
// }
export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(FilterByCustomer);