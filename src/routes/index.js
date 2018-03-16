import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Product from '../containers/product'
import Judge from '../containers/judge'
import Result from '../containers/result'

export  const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={Product}/>
      <Route exact path="/judge/:productId" component={Judge}/>
      <Route path="/judge/:productId/result" component={Result}/>
    </div>
  </Router>
)