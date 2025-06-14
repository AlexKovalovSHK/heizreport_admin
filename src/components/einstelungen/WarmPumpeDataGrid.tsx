import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { WarmpumpeInArr } from '../../features/hersteller_feature/type'
import { fechAllWarmpumpe } from '../../features/hersteller_feature/warmpumpeApi'

const my_columns: GridColDef[] = [
  { field: "wpId", headerName: "ID", flex: 0.1, minWidth: 50 },
  {
    field: "wpProduktserie",
    headerName: "Hersteller",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 50,
  },
  {
    field: "wpProduktname",
    headerName: "Serie",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "herstellerStatus",
    headerName: "Status",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 120,
  },
]

const WarmPumpeDataGrid = () => {
    const [rows, setRows] = useState<WarmpumpeInArr[]>([])
      const [loading, setLoading] = useState<boolean>(true)
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fechAllWarmpumpe(); // Ждем данные
            setRows(data); // Устанавливаем в state
          } catch (error) {
            console.error("Fehler beim Laden der Daten:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

  return (
      <DataGrid
        rows={rows}
        columns={my_columns} // Тут была ошибка, исправил
        getRowId={(row) => row.wpId} // Используем herstellerId как id
        getRowClassName={params =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
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

export default WarmPumpeDataGrid