import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

//import { handleSearchChange } from '../Tables/CustomTables';

const useStyles = makeStyles((theme) => ({
  ///// style ng searchbar /////
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    height: 30,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function InputSearch(props) {
  ////// aayusin ko pa to
  const {
    //value,
    //label,
    searchPlaceholder,
    handleSearchChange,
    //clearSearch,
    source,

    //searchInput,
  } = props;
  const classes = useStyles();
  let showIcons = false;

  if (source !== 'table') {
    showIcons = true;
  }
  const [searchVal, setSearchVal] = useState('');

  // gamit ung input text dito
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchVal(value);
    //console.log('inputsearch-change', value);
    handleSearchChange(value);
  };

  //// ung sa table rekta text input ////
  // const handleSearch = (event) => {
  //   console.log('inputsearch-click', searchVal);
  //   handleSearchChange(searchVal);
  // };

  // const handleClear = () => {
  //   clearSearch();
  //   setSearchVal('');
  // };
  //// ung sa table rekta text input ////

  return (
    <Paper className={classes.root}>
      {showIcons && (
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          //onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      )}
      <InputBase
        className={classes.input}
        value={searchVal}
        placeholder={searchPlaceholder}
        inputProps={{ 'aria-label': 'searchables' }}
        onChange={handleChange} // pwede direkta sa input text
      />

      {showIcons && (
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="close"
          //onClick={handleClear}
        >
          <CloseIcon />
        </IconButton>
      )}
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Paper>
  );
}

InputSearch.defaultProps = {
  showIcons: true,
  source: true,
};

//#region style inline

// pwede baguhin ung style rekta
// inputProps={{ 'aria-label': 'searchables' }}
// InputLabelProps={{style: {fontSize: 40}}}

//#endregion
