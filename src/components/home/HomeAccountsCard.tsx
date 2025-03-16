import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography"

const HomeAccountsCard = () => {
  return (
    <Card sx={{  }} className="h-100">
      <div className="row">
        <div className="col-sm-2">
          <PersonIcon sx={{ fontSize: "56px", color: "#0074D9" }} />
        </div>
        <div className="col-sm-10">
          <CardContent>
            <Typography variant="h5" component="div">
              Accounts
            </Typography>
            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                Aktiv
              </Typography>
              <Typography variant="body2" className="mb-0">
                5885
              </Typography>
            </div>
            <hr />

            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                Unlimit
              </Typography>
              <Typography variant="body2" className="mb-0">
                5889
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                Unverlängert
              </Typography>
              <Typography variant="body2" className="mb-0">
                5225
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <Typography sx={{ color: "text.secondary" }} className="mb-0">
                App-User
              </Typography>
              <Typography variant="body2" className="mb-0">
                5225
              </Typography>
            </div>
            <hr />
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default HomeAccountsCard
