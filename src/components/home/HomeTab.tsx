import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useState } from "react"
import SessionsChart from "../SessionsChart"
import PageViewsBarChart from "../PageViewsBarChart"
import HomeCardProjects from "./HomeCardProjects"
import HomeAccountsCard from "./HomeAccountsCard"
import HomeUmsatzCard from "./HomeUmsatzCard"
import OpenAktivCard from "./OpenAktivCard"
import ActualOnlineCard from "./ActualOnlineCard"
import LeaderCupCard from "./LeaderCupCard"
import MonatStatCard from "./MonatStatCard"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CustomizedDataGrid from "../CustomizedDataGrid"
import CustomizedTreeView from "../CustomizedTreeView"
import ChartUserByCountry from "../ChartUserByCountry"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function HomeTab() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Heute" {...a11yProps(0)} />
          <Tab label="Monat" {...a11yProps(1)} />
          <Tab label="Gesamt" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="row ">
          <div className="col-lg-4 mb-2">
            <HomeCardProjects />
          </div>
          <div className="col-lg-4 mb-2">
            <HomeAccountsCard />
          </div>
          <div className="col-lg-4 mb-2">
            <HomeUmsatzCard />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 mb-2">
            <OpenAktivCard />
          </div>
          <div className="col-lg-6 mb-2">
            <ActualOnlineCard />
          </div>
        </div>

        <div className="mt-3 row">
          <div className="col-lg-6 mb-2">
            <LeaderCupCard />
          </div>
          <div className="col-lg-6 mb-2">
            <MonatStatCard />
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
         <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="row">
          <div className="col-lg-6">
            <SessionsChart />
          </div>
          <div className="col-lg-6">
            <PageViewsBarChart />
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  )
}
