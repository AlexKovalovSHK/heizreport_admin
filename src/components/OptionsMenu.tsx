import * as React from "react"
import { styled } from "@mui/material/styles"
import Divider, { dividerClasses } from "@mui/material/Divider"
import Menu from "@mui/material/Menu"
import MuiMenuItem from "@mui/material/MenuItem"
import { paperClasses } from "@mui/material/Paper"
import { listClasses } from "@mui/material/List"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon, { listItemIconClasses } from "@mui/material/ListItemIcon"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded"
import MenuButton from "./MenuButton"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useNavigate } from "react-router-dom"
import { logout, selectAdmin } from "../features/user_admin/adminSlice"
import { adminLogout } from "../features/user_admin/adminApi"

const MenuItem = styled(MuiMenuItem)({
  margin: "2px 0",
})

export default function OptionsMenu() {
  const dispatch = useAppDispatch()
  const admin = useAppSelector(selectAdmin)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    dispatch(logout()).then(() => {
      navigate("/")
    })
  }
  return (
    <React.Fragment>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: "transparent" }}
      >
        <MoreVertRoundedIcon />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: "4px",
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: "4px -4px",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Add another account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogOut}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: "auto",
              minWidth: 0,
            },
          }}
        >
          <ListItemText onClick={handleLogOut}>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
