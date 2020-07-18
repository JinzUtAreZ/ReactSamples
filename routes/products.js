const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbconfig = require('../connection/connectdb');

router.get('/brands', async (req, res) => {
  console.log('products-data', 'brand');
  try {
    let conn = new sql.ConnectionPool(dbconfig.config);
    await conn.connect().then(function (pool) {
      var request = new sql.Request(pool);
      request
        .execute('spLoad_Prod_Brands')
        .then(function (recordset) {
          res.json(recordset.recordset);
          //console.log(recordset.recordset);
          conn.close();
        })
        .catch(function (err) {
          console.error(err.message);
          res.status('500').send('Server Error');
        });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/cats', async (req, res) => {
  console.log('products-data', 'categories');
  try {
    let conn = new sql.ConnectionPool(dbconfig.config);
    await conn.connect().then(function (pool) {
      var request = new sql.Request(pool);
      request
        .execute('spLoad_Prod_Categories')
        .then(function (recordset) {
          res.json(recordset.recordset);
          //console.log(recordset.recordset);
          conn.close();
        })
        .catch(function (err) {
          console.error(err.message);
          res.status('500').send('Server Error');
        });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/prods', async (req, res) => {
  console.log('products-data', 'products');
  try {
    let conn = new sql.ConnectionPool(dbconfig.config);
    await conn.connect().then(function (pool) {
      var request = new sql.Request(pool);
      request
        .execute('spLoad_Prod_Products')
        .then(function (recordset) {
          res.json(recordset.recordset);
          //console.log(recordset.recordset);
          conn.close();
        })
        .catch(function (err) {
          console.error(err.message);
          res.status('500').send('Server Error');
        });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
