import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Stack from "@mui/material/Stack"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded"
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded"
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded"
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"
import InfoRoundedIcon from "@mui/icons-material/InfoRounded"
import HelpRoundedIcon from "@mui/icons-material/HelpRounded"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import PeopleIcon from "@mui/icons-material/People"
import EuroIcon from "@mui/icons-material/Euro"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import EmailIcon from "@mui/icons-material/Email"
import TtyIcon from "@mui/icons-material/Tty"
import TagIcon from "@mui/icons-material/Tag"
import ListIcon from "@mui/icons-material/List"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectPage, updatePage } from "../features/navigation/navigationSlice"
import { useState } from "react"

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Analytics", icon: <AnalyticsRoundedIcon /> },
  { text: "Projekte", icon: <WorkOutlineIcon /> },
  { text: "Förderung", icon: <VolunteerActivismIcon /> },
  { text: "User", icon: <PeopleRoundedIcon /> },
  { text: "Käufe", icon: <EuroIcon /> },
  { text: "Meetings", icon: <CalendarMonthIcon /> },
  { text: "Mails", icon: <EmailIcon /> },
  { text: "Funktionen", icon: <TagIcon /> },
  { text: "Log", icon: <ListIcon /> },
  { text: "Einstelungen", icon: <SettingsRoundedIcon /> },
  { text: "KanbanboardLog", icon: <ListIcon /> },
]

export default function MenuContent() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(selectPage)
  // Состояние для хранения выбранного элемента
  const [selectedItem, setSelectedItem] = useState("Home")

  // Функция для обработки клика
  const handleListItemClick = (item: any) => {
    dispatch(updatePage(item))
    setSelectedItem(item)
  }

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedItem === item.text}
              onClick={() => handleListItemClick(item.text)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
