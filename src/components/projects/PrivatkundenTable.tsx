import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useEffect, useState } from "react"
import { fechProjectsByType } from "../../features/projects/projectsApi"
import {
  ProjectRespInListListAdminDto,
  ProjectsInListPagination,
} from "../../features/projects/type"
import TablePagination from "@mui/material/TablePagination"
import IconButton from "@mui/material/IconButton"
import FirstPageIcon from "@mui/icons-material/FirstPage"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import LastPageIcon from "@mui/icons-material/LastPage"
import { Box, styled } from "@mui/material"
import CachedIcon from "@mui/icons-material/Cached"
import EditCalendarIcon from "@mui/icons-material/EditCalendar"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import ArchiveIcon from "@mui/icons-material/Archive"
import styles from "../foerderung/foerderung.module.css"
import ProjectModal from "./ProjectModal"
import { useAppDispatch } from "../../app/hooks"
import { getProjectIdAsync } from "../../features/projects/projectSlice"

interface PrivatkundenTableProps {
  type: number // expecting a number for `type` prop
}

const PrivatkundenTable: React.FC<PrivatkundenTableProps> = ({ type }) => {
    const dispatch = useAppDispatch()
  // Инициализируем с дефолтными значениями
  const [projectsPagination, setProjectsPagination] =
    useState<ProjectsInListPagination>({
      projectsDto: [],
      pages: 0,
      currentPage: 1,
    })

  const [selectedProjectId, setSelectedProjectId] = useState<
    number | undefined
  >(undefined)
  const [openModal, setOpenModal] = useState(false) // State for modal visibility
  const [projects, setProjects] = useState<ProjectRespInListListAdminDto[]>([])
  const [page, setPage] = useState(0)
  const rowsPerPage = 50 // Фиксированное значение

  useEffect(() => {
    fetchProjects(page + 1)
  }, [page])

  const fetchProjects = (pageNumber: number) => {
    fechProjectsByType(type, pageNumber)
      .then(data => {
        setProjectsPagination(data)
        setProjects(data.projectsDto)
      })
      .catch(error => {
        console.error("Error fetching projects:", error)
      })
  }

  const handleRowClick = (projectId: number) => {
    dispatch(getProjectIdAsync(String(projectId)))
    setOpenModal(true) // Open the modal
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage)
  }

  // Вычисляем общее количество элементов
  const totalCount = projectsPagination.pages * rowsPerPage

  return (
    <Paper sx={{ border: "1px solid #E4E7EC", borderRadius: "8px" }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "10%" }}>ID</TableCell>
              <TableCell align="right" sx={{ width: "40%" }}>
                Email
              </TableCell>
              <TableCell align="right">Datum</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map(row => (
              <TableRow
              className={`${styles.cursor_pointer}`}
                key={row.projectId}
                sx={{
                  bgcolor: "white",
                  "&:last-child td, &:last-child th": { border: 0 },
                  borderBottom: "1px solid #E4E7EC",
                }}
                onClick={() => handleRowClick(row.projectId)}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderBottom: "1px solid #E4E7EC", width: "10%" }}
                >
                  {row.projectId}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #E4E7EC", width: "40%" }}
                >
                  {String(row.email)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #E4E7EC" }}
                >
                  {row.projektTimestamp}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #E4E7EC" }}
                >
                  {row.projektStatus === 1 && (
                    <CachedIcon sx={{ color: "#878787" }} />
                  )}
                  {row.projektStatus === 2 && (
                    <EditCalendarIcon sx={{ color: "orange" }} />
                  )}
                  {row.projektStatus === 3 && (
                    <CheckIcon sx={{ color: "green" }} />
                  )}
                  {row.projektStatus === 4 && (
                    <CloseIcon sx={{ color: "red" }} />
                  )}
                  {row.projektStatus === 5 && (
                    <ArchiveIcon sx={{ color: "#3279B7" }} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={projectsPagination.pages * rowsPerPage}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        ActionsComponent={TablePaginationActions}
        // Скрываем выбор количества строк
        rowsPerPageOptions={[]}
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} из ${count}`
        }
      />
      <ProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Paper>
  )
}

// Компонент для кастомных кнопок пагинации
function TablePaginationActions(props: any) {
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        className="ms-2"
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        className="ms-2"
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        className="ms-2"
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        className="ms-2"
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  )
}

export default PrivatkundenTable
function setModalOpen(arg0: boolean) {
  throw new Error("Function not implemented.")
}
