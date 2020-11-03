import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import CustomTables from '../Elements/Tables/CustomTables';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../Elements/Loading/Spinner';

// function createData(name, calories) {
//   return { name, calories };
// }

// let rows = [createData('Donut', 452), createData('Noodles', 132)];

// function addRowData() {
//   let alter = false;
//   let x = 0;
//   for (var i = 0; i < 10; i++) {
//     //console.log(alter);
//     alter = !alter;
//     alter === false ? (x = 0) : (x = 1);
//     const newName = rows[x].name + i;
//     const newCal = rows[x].calories + Number(i);
//     const rowsNew = createData(newName, newCal);
//     //console.log(rowsNew);
//     rows.push(rowsNew);
//   }
//   //console.log(rows);
// }

// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: false,
//     label: 'Dessert (100g serving)',
//   },
//   { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
// ];

const headCells = [
  {
    id: 'product_id',
    numeric: false,
    disablePadding: false,
    label: 'Product ID',
  },
  {
    id: 'product_name',
    numeric: false,
    disablePadding: false,
    label: 'Product Name',
  },
  {
    id: 'brand_name',
    numeric: false,
    disablePadding: false,
    label: 'Brand Name',
  },
  {
    id: 'category_name',
    numeric: false,
    disablePadding: false,
    label: 'Category Name',
  },
];

const LoadTable = () => {
  const [tblData, setTblData] = useState({});
  const [loading, setLoading] = useState(false);
  //let headCells = [];

  useEffect(() => {
    loadTblData();
    //addRowData();
  }, []);

  function loadTblData() {
    axios
      .get('/api/products/prods')
      .then((res) => {
        //// always have a column id as reference ////
        setTblData(res.data);
        console.log(res.data);
        //const result = res.data;
        //// dynamic headcells pending ////
        // result.forEach(function (item, index) {
        //   Object.keys(item).forEach(function (key) {
        //     console.log('key:' + key + 'value:' + item[key]);
        //     // headCells.push(['id': key,
        //     //     numeric: false,
        //     //     disablePadding: false,
        //     //     label: 'Product ID',
        //     // ])

        //   });
        // });
        //////////////////////////

        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function LoadGrid() {
    return (
      <CustomTables
        selectRow={true}
        newPaging={true}
        //sortOrder={true}
        headCells={headCells}
        datas={tblData}
        load={loading}
        searchable={true}
        search
        searchPlaceholder="Search table data"
        tableTopTitle={'List of Mountain Bikes'}
        // size={'medium'}
      />
    );
  }

  return <Fragment>{loading === false ? <Spinner /> : LoadGrid()}</Fragment>;
};

export default LoadTable;
