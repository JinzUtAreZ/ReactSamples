import React, { Fragment, useState } from 'react';
import TableCell from '@material-ui/core/TableCell';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import axios from 'axios';

const ButtonEtcCells = (props) => {
  const { cells, tableCell, actions, selUM } = props;
  const [selUMRows, setSelUMRows] = useState({});
  const [selStateRows, setSelStateRows] = useState({});
  const [nameKey, setNameKey] = useState();
  //// ipasa muna dito ung name ////
  const handleName = (nameKey) => {
    setNameKey(nameKey);
  };

  const onChangeRowsUM = (event, newValue) => {
    setSelUMRows({ ...selUMRows, [nameKey]: newValue });
    console.log('select unit', selUMRows);
  };

  const handleChangeStatus = (e) => {
    setSelStateRows({ ...selStateRows, [e.target.id]: e.target.value });
    console.log('select status', e.target.id, e.target.value);

    // if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
    //let taskList = [...this.state.taskList];
    // taskList[e.target.dataset.id][e.target.name] = e.target.value;
    // } else {
    // this.setState({ [e.target.name]: e.target.value })
    // }
  };

  const useColors = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1),
      paddingTop: theme.spacing(1),
      color: '#fff',
      '&:hover': {
        backgroundColor: () => '#808080',
      },
    },
    iconSpace: {
      marginRight: '5%',
    },
    updateColor: {
      backgroundColor: 'green',
      color: '#fff',
      maxWidth: '6vw',
      maxHeight: '3.5vh',
    },
    deleteColor: {
      backgroundColor: '#f44336',
      color: '#fff',
      maxWidth: '8vw',
      maxHeight: '3.5vh',
    },
    selectColor: {
      backgroundColor: '#fff',
      maxWidth: '15vw',
      maxHeight: '8vh',
    },
    btnSize: {
      maxWidth: '7vw',
      maxHeight: '3.5vh',
      // minWidth: '2vw',
      // minHeight: '1vh',
    },
    selSize: {
      maxWidth: '15vw',
      maxHeight: '8vh',
    },
    selFont: {
      fontSize: '12px',
    },
  }));

  const colorBtn = useColors();
  const taskStatusId = 'taskStatus' + cells.id;
  return (
    <Fragment>
      <TableCell className={tableCell} component="th" scope="row">
        {cells.id}
      </TableCell>
      <TableCell className={tableCell}>{cells.product_name}</TableCell>
      <TableCell className={tableCell}>{cells.brand_name}</TableCell>
      <TableCell className={tableCell}>{cells.category_name}</TableCell>
      <TableCell className={tableCell}>
        {
          <Button
            value={'update'}
            variant={'outlined'}
            className={colorBtn.updateColor}
            //fullWidth={isFull}
            //disabled={disabled}
            //onClick={btnClick}
          >
            {<UpdateIcon className={colorBtn.iconSpace} />}
            {'Edit'}
          </Button>
        }
      </TableCell>
      <TableCell className={tableCell}>
        {
          <Button
            value={'delete'}
            variant={'outlined'}
            className={colorBtn.deleteColor}
            //fullWidth={isFull}
            //disabled={disabled}
            //onClick={btnClick}
          >
            {<DeleteIcon className={colorBtn.iconSpace} />}
            {'Remove'}
          </Button>
        }
      </TableCell>
      <TableCell>
        <Autocomplete
          id="comboBrand"
          options={selUM}
          //// para sa button bg sa likod at sukat
          className={colorBtn.selectColor}
          //// multiple //kapag multi select comment multiple
          classes={{
            paper: colorBtn.selFont,
          }}
          //// nasa paper ung fontSize ung ibang property d ko alam
          getOptionLabel={(option) => option.measure_name}
          onChange={onChangeRowsUM}
          onSelect={() => handleName(props.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{ ...params.InputProps, style: { fontSize: '12px' } }}
              //// hindi pwede sa colorBtn class /////
              placeholder="Please select"
              variant="outlined"
            />
          )}
        />
      </TableCell>
      <TableCell>
        <select
          name="taskStatus"
          id={taskStatusId}
          className="form-control"
          onChange={handleChangeStatus}
        >
          <option value="s1">Pending</option>
          <option value="s2">In progress</option>
          <option value="s3">Completed</option>
          <option value="s4">Hold</option>
        </select>
      </TableCell>
    </Fragment>
  );
};

export default ButtonEtcCells;

////// to continue dynamic table ///////
// const actionElem = (cells, cell, index, actions) => {
//   let colElem = cells[cell];
//   const elemActions = actions.filter((item) => item.position === index);
//   // if (elemActions.position === index) {
//   //   colElem = <Button>{elemActions.tooltip}</Button>;
//   // }

//   cells.forEach(function (col) {
//     console.log(col);
//   });

//   return colElem;
// };

// let loopThru = (cells) => {
//   var clone = { ...cells, actions };
//   console.log(clone);
// };
