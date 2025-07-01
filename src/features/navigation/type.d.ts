export interface Custom_navi {
  page: Page
}

type PageComponents = {
    [key in Page]: React.ComponentType;
  };

type Page =
  | "Home"
  | "Analytics"
  | "Projekte"
  | "Förderung"
  | "User"
  | "Käufe"
  | "Meetings"
  | "Mails"
  | "Funktionen"
  | "Log"
  | "Einstelungen"
  | "KanbanboardLog"

/*const mainListItems = [
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
]
*/
