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
import { fetcMails } from '../../features/mails/mailsApi';
import { MailResp } from '../../features/mails/type';

const ProjectMails = () => {
    const project = useAppSelector(selectProject)
    const [mails, setMails] = useState<MailResp[]>([] as MailResp[])

    useEffect(() => {
        fetcMails(project.email).then((data) => setMails(data))
    }, [])

    return (
        <TableContainer component={Paper}>
          <Table  size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell><b>Datum</b></TableCell>
                <TableCell align="right"><b>Betreff</b></TableCell>
                <TableCell align="right"><b>E-Mail</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mails.map((row) => (
                <TableRow
                  key={row.mailId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell >{String(row.mailTimestamp)}</TableCell>
                  <TableCell align="right">{row.mailBetreff}</TableCell>
                  <TableCell align="right">ansehen</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }

export default ProjectMails