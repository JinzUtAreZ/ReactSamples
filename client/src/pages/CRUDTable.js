import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import ButtonsEtcTables from '../Elements/Tables/ButtonsEtcTables';
import Spinner from '../Elements/Loading/Spinner';

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
  {
    id: 'edit_row',
    numeric: false,
    disablePadding: false,
    label: 'Update Product',
  },
  {
    id: 'delete_row',
    numeric: false,
    disablePadding: false,
    label: 'Delete Product',
  },
  {
    id: 'load_brand',
    numeric: false,
    disablePadding: false,
    label: 'Measurement',
  },
  {
    id: 'load_status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

const CRUDTable = () => {
  const [tblData, setTblData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selUM, setSelUM] = useState([]);

  useEffect(() => {
    loadTblData();
    getSelectUM();
    //addRowData();
  }, []);

  //let headCells = [];
  function loadTblData() {
    axios
      .get('/api/products/prods')
      .then((res) => {
        //// always have a column id as reference ////
        setTblData(res.data);
        console.log('react-pages', res.data);

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

  async function getSelectUM() {
    const res = await fetch('/api/products/unit_measure');
    const data = await res.json();
    setSelUM(data);
    console.log('react-pages', data);
  }

  function LoadGrid() {
    return (
      <ButtonsEtcTables
        selectRow={true}
        newPaging={true}
        //sortOrder={true}
        headCells={headCells}
        datas={tblData}
        load={loading}
        searchable={true}
        search
        searchPlaceholder="Search table data"
        tableTopTitle={'Crud operations in table'}
        // size={'medium'}
        selUM={selUM}
      />
    );
  }

  return <Fragment>{loading === false ? <Spinner /> : LoadGrid()}</Fragment>;
};

export default CRUDTable;
