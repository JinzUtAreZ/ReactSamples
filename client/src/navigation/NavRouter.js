import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import MultiLoad from '../pages/MultiLoad';
import LoadTable from '../pages/LoadTable';
import CRUDTable from '../pages/CRUDTable';
import SimpleTable from '../Elements/Tables/SimpleTable';
import ExcelTable from '../pages/TableToExcel';
import UploadPage from '../pages/UploadPage';

const NavRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/MultiLoad" component={MultiLoad} />
        <Route exact path="/LoadTable" component={LoadTable} />
        <Route exact path="/CRUDTable" component={CRUDTable} />
        <Route exact path="/SimpleTable" component={SimpleTable} />
        <Route exact path="/ExcelTable" component={ExcelTable} />
        {/* <Route exact path="/UploadFile" component={UploadPage} /> */}
      </Switch>
    </Fragment>
  );
};

export default NavRouter;
