import { Card, CardContent, Typography } from "@mui/material"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol"

const HomeUmsatzCard = () => {
  return (
    <Card sx={{}} className="h-100">
      <div className="d-flex justify-content-between mb-5">
        <EuroSymbolIcon sx={{ fontSize: "56px", color: "#0074D9" }} />
        <div className="d-flex flex-column justify-content-center w-100">
          <div className="text-center ">
            <Typography variant="body2" component="div">
              Umsatz
            </Typography>
            <Typography variant="h2" component="div">
              22
            </Typography>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <PersonAddIcon sx={{ fontSize: "56px", color: "#0074D9" }} />
        <div className="d-flex flex-column justify-content-center w-100">
          <div className="text-center ">
            <Typography variant="body2" component="div">
              Neue Accounts
            </Typography>
            <Typography variant="h2" component="div">
              22
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default HomeUmsatzCard
