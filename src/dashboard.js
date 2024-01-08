import React from 'react';
import './dashboard.css';
import RevenueByLocationChart from './chart1'; 
import RevenueByJobTypes from './chart2'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Company Metrics</h1>

      <div className="metrics-grid">
        <div className="metric-box">
          <div className="metric-title">Total Revenue</div>
          <div className="metric-value">$406,411.29</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Total Jobs Average</div>
          <div className="metric-value">$620</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Tickets Created</div>
          <div className="metric-value">655</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Tickets Scheduled</div>
          <div className="metric-value">735</div>
        </div>

        <div className="metric-box">
          <div className="metric-title">Outstanding Amount (Red)</div>
          <div className="metric-value outstanding-amount">$110,448.8</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Membership Sold</div>
          <div className="metric-value">105</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Jobs Completed</div>
          <div className="metric-value">436</div>
        </div>
        <div className="metric-box">
          <div className="metric-title">Total Cancelled</div>
          <div className="metric-value">65</div>
        </div>

      </div>
      <div className="charts-container">
        {/* Chart 1 */}
        <div className="chart-box">
          <div className="chart-value">
            <RevenueByLocationChart />
          </div>
        </div>

        {/* Chart 2 */}
        <div className="chart-box">
          <div className="chart-value">
            <RevenueByJobTypes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
