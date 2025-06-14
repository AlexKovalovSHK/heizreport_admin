import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Typography from "@mui/material/Typography"

const ActualOnlineCard = () => {
  return (
     <Card sx={{}} className="h-100">
          <div className="row">
            <div className="col-sm-2">
              <OnlinePredictionIcon sx={{ fontSize: "56px", color: "#0074D9" }} />
            </div>
            <div className="col-sm-10">
              <CardContent>
                <Typography variant="h5" component="div">
                Aktuell Online
                </Typography>
                <div className="d-flex justify-content-between mt-3">
                  <Typography sx={{ color: "text.secondary" }} className="mb-0">
                  Business-Kunden
                  </Typography>
                  <Typography variant="body2" className="mb-0">
                    5
                  </Typography>
                </div>
                <hr />
    
                <div className="d-flex justify-content-between mt-3">
                  <Typography sx={{ color: "text.secondary" }} className="mb-0">
                  Privatkunden
                  </Typography>
                  <Typography variant="body2" className="mb-0">
                    5
                  </Typography>
                </div>
                <hr />
              </CardContent>
            </div>
          </div>
        </Card>
  )
}

export default ActualOnlineCard