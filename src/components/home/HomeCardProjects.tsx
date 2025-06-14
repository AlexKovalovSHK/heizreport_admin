import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Typography from "@mui/material/Typography"

const HomeCardProjects = () => {
  return (
    <Card sx={{  }} className="h-100">
      <div className="row">
        <div className="col-sm-2">
            <AssignmentTurnedInIcon sx={{ fontSize: '56px', color: '#0074D9' }}/>
        </div>
        <div className="col-sm-10">
          <CardContent>
            <Typography variant="h5" component="div">
              Projekte
            </Typography>
            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                Neue Projekte
              </Typography>
              <Typography variant="body2" className="mb-0">
                5
              </Typography>
            </div>
            <hr />

            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                Checks
              </Typography>
              <Typography variant="body2" className="mb-0">
                5
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                Reports
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

export default HomeCardProjects
