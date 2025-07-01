import React, { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js"
import { Pie, Bar } from "react-chartjs-2"
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  CircularProgress,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material"

// Регистрируем необходимые компоненты Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
)

interface VisitData {
  ip: string
  userAgent: string
  timestamp: string
  browserName: string
  location: string
}

const KanbanboardLog = () => {
  const [data, setData] = useState<VisitData[]>([])
  const [filteredData, setFilteredData] = useState<VisitData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const [availableYears, setAvailableYears] = useState<string[]>([])
  const [availableMonths, setAvailableMonths] = useState<string[]>([])

  const getData = async () => {
    try {
      const response = await fetch(
        "https://analitics.shk.solutions/api/visit",
        {
          method: "GET",
          redirect: "follow",
        },
      )
      const result = await response.json()
      setData(result)

      // Извлекаем уникальные года и месяцы из данных
      const years = Array.from(
        new Set<string>(
          result.map((item: VisitData) =>
            new Date(item.timestamp).getFullYear().toString(),
          ),
        ),
      ).sort()

      // Исправленный код для извлечения месяцев
      const months = Array.from(
        new Set<string>(
          result.map((item: VisitData) =>
            (new Date(item.timestamp).getMonth() + 1).toString(),
          ),
        ),
      )
        .map(month => parseInt(month))
        .sort((a, b) => a - b)
        .map(month => month.toString())

      setAvailableYears(["all", ...years])
      setAvailableMonths(["all", ...months])
    } catch (err) {
      setError("Failed to fetch data")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    // Фильтрация данных при изменении года или месяца
    let filtered = [...data]

    if (selectedYear !== "all") {
      filtered = filtered.filter(
        item =>
          new Date(item.timestamp).getFullYear().toString() === selectedYear,
      )
    }

    if (selectedMonth !== "all") {
      filtered = filtered.filter(
        item =>
          (new Date(item.timestamp).getMonth() + 1).toString() ===
          selectedMonth,
      )
    }

    setFilteredData(filtered)
  }, [data, selectedYear, selectedMonth])

  const handleYearChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value)
    if (event.target.value === "all") {
      setSelectedMonth("all")
    }
  }

  const handleMonthChange = (event: SelectChangeEvent) => {
    setSelectedMonth(event.target.value)
  }

  // Подсчет статистики по браузерам
  const browserStats = filteredData.reduce(
    (acc, item) => {
      const browser = item.browserName.split(" ")[0] // Берем только название браузера
      acc[browser] = (acc[browser] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const browserNames = Object.keys(browserStats)
  const browserCounts = Object.values(browserStats)

  // Данные для графиков
  const pieChartData = {
    labels: browserNames,
    datasets: [
      {
        data: browserCounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  }

  const barChartData = {
    labels: browserNames,
    datasets: [
      {
        label: "Number of Visits",
        data: browserCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Browser Usage Statistics ${selectedYear !== "all" ? `for ${selectedYear}` : ""} ${selectedMonth !== "all" ? `- Month ${selectedMonth}` : ""}`,
      },
    },
  }

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Browser Analytics
      </Typography>

      {/* Фильтры по году и месяцу */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <Select value={selectedYear} label="Year" onChange={handleYearChange}>
            {availableYears.map(year => (
              <MenuItem key={year} value={year}>
                {year === "all" ? "All Years" : year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }} disabled={selectedYear === "all"}>

          <Select
            value={selectedMonth}
            label="Month"
            onChange={handleMonthChange}
          >
            {availableMonths.map(month => (
              <MenuItem key={month} value={month}>
                {month === "all" ? "All Months" : month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Distribution by Browser (Pie Chart)
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ height: 400 }}>
                <Pie data={pieChartData} options={options} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Visits by Browser (Bar Chart)
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ height: 400 }}>
                <Bar data={barChartData} options={options} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default KanbanboardLog
