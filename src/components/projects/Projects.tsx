import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useState } from "react"
import { a11yProps, CustomTabPanel } from "../../utils/TabsUtils"
import PrivatkundenTable from "./PrivatkundenTable"

const Projects = () => {
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
          <Tab label="Privatkunden" {...a11yProps(0)} />
          <Tab label="Businesskunden" {...a11yProps(1)} />
          <Tab label="Business Leads" {...a11yProps(2)} />
          <Tab label="API Projekte" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PrivatkundenTable type={1}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <PrivatkundenTable type={2}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <PrivatkundenTable type={3}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <PrivatkundenTable type={4}/>
      </CustomTabPanel>
    </Box>
  )
}

export default Projects
