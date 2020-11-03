import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchTable from '../../Elements/Input/InputSearch';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0277bd', //// lightblue
    color: 'white',
  },
  title: {
    flex: '1 1 100%',
  },
}));

export default function CustomToolbar(props) {
  const classes = useToolbarStyles();
  const {
    searchable,
    searchPlaceholder,
    //rowCount,
    handleSearchChange,
    //clearSearch,
    searchInput,
    source,
    size,
    tableTopTitle,
  } = props;

  ///// ung search neto nasa customtable /////

  return (
    <Fragment>
      {searchable && (
        <Toolbar className={classes.root}>
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            //component="div"
          >
            {tableTopTitle}
            {/* List of food nutrition */}
          </Typography>

          <SearchTable
            handleSearchChange={handleSearchChange}
            // clearSearch={clearSearch} // rekta textinput
            name="searchTable"
            value={searchInput.tblSearch}
            searchPlaceholder={searchPlaceholder}
            searchInput={searchInput}
            source={source}
            size={size}
          />
        </Toolbar>
      )}
    </Fragment>
  );
}

CustomToolbar.propTypes = {
  searchable: PropTypes.bool,
  rowCount: PropTypes.number.isRequired,
  tableTopTitle: PropTypes.string.isRequired,
};

CustomToolbar.defaultProps = {
  tableTopTitle: 'No title given',
};

// design left middle right without flex
//   <div float="left">{'prevButton'}</div>

//       <div
//         style={{
//           float: 'none',
//           width: '200px',
//           marginLeft: 'auto',
//           marginRight: 'auto',
//         }}
//       >
//         {'releaseBtn'}
//       </div>

//       <div lastChild={true} float="right">

//       </div>
