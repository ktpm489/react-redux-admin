import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

import InfoBox from './InfoBox';
import NewOrders from './NewOrders';
import MonthlySales from './MonthlySales';
import BrowserUsage from './BrowserUsage';
import RecentlyProducts from './RecentlyProducts';

import globalStyles from '../../styles';
import Data from '../../data';

import { getGraficsData } from './dashboard-action';

class DashBoard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: {}
    };
  }

  onSubmit() {
   
  }

  render() {     
    return (
        <div>
          <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
    
          <div className="row">
    
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={ShoppingCart}
                       color={pink600}
                       title="Total Profit"
                       value="1500k"
              />
            </div>
    
    
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={ThumbUp}
                       color={cyan600}
                       title="Likes"
                       value="4231"
              />
            </div>
    
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={Assessment}
                       color={purple600}
                       title="Sales"
                       value="460"
              />
            </div>
    
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
              <InfoBox Icon={Face}
                       color={orange600}
                       title="New Members"
                       value="248"
              />
            </div>
          </div>
    
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
              <NewOrders data={Data.dashBoardPage.newOrders}/>
            </div>
    
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
              <MonthlySales data={Data.dashBoardPage.monthlySales}/>
            </div>
          </div>
    
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
            </div>
    
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
              <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
            </div>
          </div>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({getGraficsData}, dispatch);

export default connect(null, mapDispatchToProps)(DashBoard);
