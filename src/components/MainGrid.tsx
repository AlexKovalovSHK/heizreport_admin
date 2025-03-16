import * as React from "react"
import Grid from "@mui/material/Grid2"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Copyright from "../internals/components/Copyright"
import ChartUserByCountry from "./ChartUserByCountry"
import CustomizedTreeView from "./CustomizedTreeView"
import CustomizedDataGrid from "./CustomizedDataGrid"
import StatCard, { StatCardProps } from "./StatCard"
import HighlightedCard from "./ HighlightedCard"
import SessionsChart from "./SessionsChart"
import PageViewsBarChart from "./PageViewsBarChart"
import HomeTab from "./home/HomeTab"
import { useAppSelector } from "../app/hooks"
import { selectPage } from "../features/navigation/navigationSlice"
import { PageComponents } from "../features/navigation/type"
import Analytics from "./analytics/Analytics"
import Projects from "./projects/Projects"
import Foerderung from "./foerderung/Foerderung"
import Users from "./users/Users"
import Kaufe from "./kaufe/Kaufe"
import Meetings from "./meetings/Meetings"
import Mail from "./mails/Mail"
import Funktionen from "./functions/Funktionen"
import Logs from "./logs/Logs"
import Einstelungen from "./einstelungen/Einstelungen"

const pageComponents: PageComponents = {
  Home: HomeTab,
  Analytics: Analytics,
  Projekte: Projects,
  Förderung: Foerderung, 
  User: Users, 
  Käufe: Kaufe, 
  Meetings: Meetings, 
  Mails: Mail, 
  Funktionen: Funktionen, 
  Log: Logs, 
  Einstelungen: Einstelungen, 
};

export default function MainGrid() {
  const page = useAppSelector(selectPage)

  const PageComponent = pageComponents[page] || HomeTab; // По умолчанию HomeTab

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
       <PageComponent /> {/* Рендерим компонент для текущей страницы */}
     
      <Copyright sx={{ my: 4 }} />
    </Box>
  )
}
