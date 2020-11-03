import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import TablePaginationActions from '../Tables/CustomPaging';
import TableHeadEnhanced from '../Tables/CustomHeader';
import TableToolbar from '../Tables/CustomToolbar';

import { stableSort, getComparator } from '../Tables/CustomHeader';

import ButtonEtcCells from '../Tables/ButtonEtcCells';

////// styling para sa table body
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    ////// custom styling ko
    border: 'solid',
    borderColor: '#e0e0e0',
    boxShadow: '2px 4px 5px #9E9E9E',
  },
  paper: {
    width: '100%',
    paddingBottom: theme.spacing(1),
    backgroundColor: '#0277bd', //// grey
  },
  table: {
    minWidth: 700,
    backgroundColor: '#fafafa', //// light
  },
  tableRow: {
    '&$selected, &$selected:hover': {
      backgroundColor: '#616161', // almost grey
    },
  },
  tableCell: {
    '$selected &': {
      color: 'yellow',
    },
    textAlign: 'center',
  },
  tableHead: {
    '&$root &': {
      backgroundColor: 'lightBlue', // kapag basic tablehead gamit
    },
  },
  hover: {},
  selected: {},
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function ButtonsEtcTables(props) {
  const {
    load,
    headCells,
    datas,
    newPaging,
    sortOrder,
    selectRow,
    searchable,
    searchPlaceholder,
    size,
    tableTopTitle,
    actions,
    selUM,
  } = props;

  const classes = useStyles();

  const [filtered, setFiltered] = useState(datas);

  /////// selected row /////
  const [selectedID, setSelectedID] = useState(null);

  /////// paging ////////
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  ////// sorting ///////
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  //////  search ///////
  const [searchInput, setSearchInput] = useState({});

  ///////// paging actions ////////
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //const emptyRows = 0;
  // rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  // spacing per row ng table para consistent.

  ///////// sorting actions ///////////
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  ////// search actions ///////
  ///// ung searchbar nasa CustomToolbar then input search  /////
  const handleSearchChange = (value) => {
    //setSearchInput({ ...searchInput, [key]: value });
    const filterData = datas.filter((data) => {
      // pang isahan lang to (name == columnName)
      //return data.name.toLowerCase().includes(value.toLowerCase());

      //// pang maramihan to ////
      let lowercasedFilter = value.toLowerCase();
      const dataset = Object.keys(data).some((key) =>
        data[key].toString().toLowerCase().includes(lowercasedFilter)
      );

      return dataset;
    });
    //console.log('filter-ButtonsEtcTables'filterData);
    setFiltered(filterData);
    setPage(0);
    //setFiltered({ ...rows.filter });
  };

  //// wala na muna to
  // const clearSearch = () => {
  //   setFiltered(datas);
  // };

  // let dynaButtons = (actions, rowIndex) => {
  //   const elemActions = actions.filter((item) => item.position === rowIndex);
  //   return elemActions;
  // };

  // let dynaButtons = (actions, rowIndex, row) => {
  //   return (
  //     <ButtonEtcCells
  //       cells={row}
  //       tableCell={classes.tableCell}
  //       actions={actions}
  //     />
  //   );
  // };

  return (
    <div className={classes.root}>
      {load && ( //// loader to para sa data
        <Paper className={classes.paper}>
          <TableToolbar
            rowCount={filtered.length}
            searchable={searchable}
            searchPlaceholder={searchPlaceholder}
            handleSearchChange={handleSearchChange}
            //clearSearch={clearSearch} // rekta textinput
            source={'table'}
            searchInput={filtered}
            size={size}
            tableTopTitle={tableTopTitle}
          />
          <TableContainer>
            <Table className={classes.table} size={size}>
              <TableHeadEnhanced
                headCells={headCells}
                classes={classes}
                //numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                sortOrder={sortOrder}
                // searchable={searchable}
                //onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={filtered.length}
              />
              <TableBody>
                {/* Basic Mapping */}
                {/* {rows.map((row) => ( */}
                {(rowsPerPage > 0
                  ? sortOrder === true
                    ? //// paging with sort order
                      stableSort(filtered, getComparator(order, orderBy)).slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : //// paging only
                      filtered.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                  : filtered
                ).map((row, rowIndex) => (
                  <TableRow
                    hover
                    key={row.id}
                    onClick={() => {
                      setSelectedID(row.id);
                    }}
                    ////// selectRow for Picking data //////
                    selected={selectRow && selectedID === row.id}
                    classes={
                      selectRow && {
                        hover: classes.hover,
                        selected: classes.selected,
                      }
                    }
                    className={classes.tableRow}
                  >
                    {/* {dynaButtons(actions, rowIndex, row)} */}
                    <ButtonEtcCells
                      cells={row}
                      selUM={selUM}
                      tableCell={classes.tableCell}
                    />
                  </TableRow>
                ))}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <center>
                        <Typography variant="h5" component="h2">
                          NO DATA FOUND
                        </Typography>
                      </center>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    count={filtered.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ////// newPaging for extensive viewing /////
                    ActionsComponent={newPaging && TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
}

ButtonsEtcTables.defaultProps = {
  size: 'small',
  load: false,
  // headCells,
  // datas,
  // newPaging,
  // sortOrder,
  // selectRow,
  // searchable,
  // searchPlaceholder,
};

ButtonsEtcTables.propTypes = {
  size: PropTypes.string,
  load: PropTypes.bool,
};
