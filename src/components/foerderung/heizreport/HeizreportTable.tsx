import React, { useEffect, useState } from "react"
import { apiUrl } from "../../../App"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectAdminId } from "../../../features/user_admin/adminSlice"
import { fechAntrags } from "../../../features/foerderung/foerderungApi"
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid"
import { Antrag } from "../../../features/foerderung/type"
import { fechProjectById } from "../../../features/projects/projectsApi"
import { ProjectRespDto } from "../../../features/projects/type"
import HeizreportProjectModal from "./HeizreportProjectModal"
import { getProjIdAsync } from "../../../features/projects/projectSlice"
import {
  getAntragIdAsync,
  getAntragssBuAdminId,
  selectAntrag,
  selectAntragsList,
} from "../../../features/foerderung/foerderungSlice"
import { getUser } from "../../../features/users/userSlice"

const my_columns: GridColDef[] = [
  { field: "antragId", headerName: "ID", flex: 0.5, minWidth: 50 },
  {
    field: "antragFirma",
    headerName: "Firma",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "antragKundeFullName",
    headerName: "Kunde",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "antragPortal",
    headerName: "Datum",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "adminUserName",
    headerName: "Berater/in",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "antragStatus",
    headerName: "Status",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
]

const HeizreportTable = () => {
  const adminId = useAppSelector(selectAdminId)
  const [selectedProject, setSelectedProject] = useState<ProjectRespDto>(
    {} as ProjectRespDto,
  )
  const [rows, setRows] = useState<Antrag[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectAntragsList)
  const antragId = useAppSelector(selectAntrag)

  useEffect(() => {
    dispatch(getAntragssBuAdminId(Number(adminId)))
  }, [dispatch, adminId])

  useEffect(() => {
    const formattedData = data.map((row: Antrag) => ({
      ...row,
      antragKundeFullName: `${row.antragKundeVorname} ${row.antragKundeName}`, // Объединение имени и фамилии
    }))
    setRows(formattedData)
  }, [data])

  const handleRowClick = (params: GridRowParams) => {
    const selected = rows.find(row => row.antragId === params.id)
    if (selected) {
      dispatch(getProjIdAsync(selected.projektId)).then(() => {
        dispatch(getAntragIdAsync(selected.antragId)).then(() => {
          dispatch(getUser(selected.userId))
        })

        setIsModalOpen(true)
      })
      /*setSelectedHersteller(selected);
      setIsModalOpen(true);*/
    }
  }

  return (
    <>
      <DataGrid
        rows={rows}
        columns={my_columns} // Тут была ошибка, исправил
        getRowId={row => row.antragId} // Используем herstellerId как id
        getRowClassName={params =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        onRowClick={handleRowClick} // Добавили обработчик клика по строке
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
            },
          },
        }}
      />
      {selectedProject && (
        <HeizreportProjectModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </>
  )
}

export default HeizreportTable
