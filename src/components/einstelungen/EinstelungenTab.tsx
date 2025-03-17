import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useState } from "react"
import SessionsChart from "../SessionsChart"
import PageViewsBarChart from "../PageViewsBarChart"
import { Button, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CustomizedDataGrid from "../CustomizedDataGrid"
import CustomizedTreeView from "../CustomizedTreeView"
import ChartUserByCountry from "../ChartUserByCountry"
import HerstellerDataGrid from "./HerstellerDataGrid"
import WarmPumpeDataGrid from "./WarmPumpeDataGrid"
import EinstelungenMain from "./EinstelungenMain"

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

const EinstelungenTab = () => {
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
          <Tab label="Einstelungen" {...a11yProps(0)} />
          <Tab label="Hersteller Datenbank" {...a11yProps(1)} />
          <Tab label="Wärmepumpen Datenbank" {...a11yProps(2)} />
          <Tab label="Ventil Datenbank" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EinstelungenMain />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, lg: 12 }}>
            <h1>Hersteller Datenbank</h1>
            <HerstellerDataGrid />
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h1>Wärmepumpen Datenbank</h1>
        <WarmPumpeDataGrid />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <h1>Ventil Datenbank</h1>
        <WarmPumpeDataGrid />
      </CustomTabPanel>
    </Box>
  )
}
export default EinstelungenTab
