import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid"
import React, { useEffect, useState } from "react"
import { VentilInArr } from "../../features/hersteller_feature/type"
import { fechAllVentile, fechVentilById } from "../../features/hersteller_feature/ventilApi"

const my_columns: GridColDef[] = [
  { field: "ventilId", headerName: "ID", flex: 0.1, minWidth: 50 },
  {
    field: "ventilHersteller",
    headerName: "Hersteller",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 50,
  },
  {
    field: "ventilBezeichnung",
    headerName: "Produkt",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "ventilNennweite",
    headerName: "Nenweite",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 120,
  },
  {
    field: "ventilBauform",
    headerName: "Bauform",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 120,
  },
]

const VentilDataGrid = () => {
  const [rows, setRows] = useState<VentilInArr[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fechAllVentile() // Ждем данные
        setRows(data) // Устанавливаем в state
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleRowClick = (params: GridRowParams) => {
    console.log('Row clicked:', params); // Добавить для отладки
    const selected = rows.find(row => row.ventilId === params.id);
    console.log('Selected row:', selected);

    if (selected) {
        fechVentilById(Number(params.id));
    }
};

  
  return (
        <DataGrid
          rows={rows}
          columns={my_columns} // Тут была ошибка, исправил
          getRowId={(row) => row.ventilId} // Используем herstellerId как id
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
      )
    }

export default VentilDataGrid
