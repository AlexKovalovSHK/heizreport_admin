import { Box, Tab, Tabs } from '@mui/material';
import { a11yProps, CustomTabPanel } from '../../utils/TabsUtils';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectProject } from '../../features/projects/projectSlice';
import ProjectLogs from './ProjectLogs';
import ProjectMails from './ProjectMails';

const ProjectSmallTabs = () => {
    const [value, setValue] = useState(0);
    const project = useAppSelector(selectProject)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="E-Mail" {...a11yProps(1)} />
            <Tab label="Log" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div>
            <p><b>ID</b>{project.projektId}</p>
            <hr />
            <p><b>Erstellt</b>{project.projektCreateTime}</p>
            <hr />
            <p><b>Status</b>{project.projektStatus}</p>
            <hr />
            <p><b>Letzter Login</b>{project.projektLastloginTimestamp}</p>
            <hr />
            <p><b>Anzahl Räume</b>???</p>
            <hr />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ProjectMails/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ProjectLogs/>
        </CustomTabPanel>
      </Box>
    );
  }
export default ProjectSmallTabs