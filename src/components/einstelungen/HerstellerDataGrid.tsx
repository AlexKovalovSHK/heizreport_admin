import { DataGrid, GridCellParams, GridColDef, GridRowParams } from "@mui/x-data-grid"
import { Chip } from "@mui/material"
import { rows } from "../../internals/data/ gridData"
import { useEffect, useState } from "react"
import { fechAllHersteller } from "../../features/hersteller_feature/herstellerApi"
import { Hersteller } from "../../features/hersteller_feature/type"
import { useNavigate } from "react-router-dom"
import HerstellerModal from "./modals/HerstellerModal"

const my_columns: GridColDef[] = [
  { field: "herstellerId", headerName: "ID", flex: 0.1, minWidth: 50 },
  {
    field: "herstellerKurz",
    headerName: "Hersteller",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 50,
  },
  {
    field: "herstellerTyp",
    headerName: "Art",
    headerAlign: "right",
    align: "right",
    flex: 0.5,
    minWidth: 50,
  },
  {
    field: "herstellerStatus",
    headerName: "Status",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 120,
  },
]

const HerstellerDataGrid = () => {
  const [rows, setRows] = useState<Hersteller[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedHersteller, setSelectedHersteller] = useState<Hersteller | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fechAllHersteller(); // Ждем данные
        setRows(data); // Устанавливаем в state
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (params: GridRowParams) => {
    const selected = rows.find(row => row.herstellerId === params.id);
    if (selected) {
      setSelectedHersteller(selected);
      setIsModalOpen(true);
    }
  };

  return (
    <>
    <DataGrid
      rows={rows}
      columns={my_columns} // Тут была ошибка, исправил
      getRowId={(row) => row.herstellerId} // Используем herstellerId как id
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
    {selectedHersteller && (
        <HerstellerModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          hersteller={selectedHersteller}
        />
      )}
    </>
    
  )
}

export default HerstellerDataGrid
