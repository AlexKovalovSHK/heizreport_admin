import React from "react"
import PageViewsBarChart from "../PageViewsBarChart"
import SessionsChart from "../SessionsChart"

const Analytics = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 mb-3">
          <SessionsChart />
        </div>
        <div className="col-lg-12 mb-3">
          <PageViewsBarChart />
        </div>
      </div>
    </div>
  )
}

export default Analytics
