import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { fetchLogsByProjectId } from '../../features/logs_heizreport/logsApi';
import { useAppSelector } from '../../app/hooks';
import { selectProject } from '../../features/projects/projectSlice';
import { LogHeiz } from '../../features/logs_heizreport/type';

const ProjectLogs = () => {
    const project = useAppSelector(selectProject)
    const [logs, setLgs] = useState<LogHeiz[]>([] as LogHeiz[])

    useEffect(() => {
        fetchLogsByProjectId(project.projektId).then((data) => setLgs(data))
    }, [])

    return (
        <TableContainer component={Paper}>
          <Table  size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell><b>Datum</b></TableCell>
                <TableCell align="right"><b>Aktion</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs.map((row) => (
                <TableRow
                  key={row.logId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell >{String(row.logTimestamp)}</TableCell>
                  <TableCell align="right">{row.logTypDescription}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

export default ProjectLogs