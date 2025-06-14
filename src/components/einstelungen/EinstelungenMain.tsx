import { Button } from "@mui/material"
import React from "react"

const EinstelungenMain = () => {
  return (
    <div className="row ">
      <div className="col-sm-3 p-1">
        <Button variant="contained" className="">
          Heizkörper Datenbank
        </Button>
      </div>
      <div className="col-sm-3 p-1">
        <Button variant="contained" className="">
          Ventil Datenbank
        </Button>
      </div>
      <div className="col-sm-3 p-1">
        <Button variant="contained" className="">
          Wärmepumpen Datenbank
        </Button>
      </div>
    </div>
  )
}

export default EinstelungenMain
