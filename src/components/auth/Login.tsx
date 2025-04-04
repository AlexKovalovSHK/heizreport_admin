import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Box, Button, Checkbox, Modal, TextField } from "@mui/material"
import styles from "./Login.module.css"
import { loginAdmin } from "../../features/user_admin/adminSlice"
import { LoginAdmin } from "../../features/user_admin/type"

const Login = () => {
  const dispatch = useAppDispatch()
  const error = {}
  const navigate = useNavigate()
  const [showPwd, setshowPwd] = useState<string>("password")
  const [login, setLogin] = useState("")
  const [pwd, setPwd] = useState("")

  const label = { inputProps: { "aria-label": "Checkbox demo" } }

  const pwdToggle = () => {
    if (showPwd === "text") {
      setshowPwd("password")
    } else {
      setshowPwd("text")
    }
  }

  const logIn = async () => {
    const dto: LoginAdmin = {
      adminUserName: login,
      adminUserPass: pwd,
    }
    dispatch(loginAdmin(dto)).then(() => {navigate('/dashboard')})
  }

  return (
    <div className={`${styles.bg_tablet}`}>
      <div className="row g-0 p-1">
        <div className="col-sm-6 col-lg-4 d-flex m-auto vh-100 ">
          <div className="row w-100 m-auto bg-white border border-dark rounded">
            <div className="col-lg-10 my-5 m-auto ">
              <h2 className="mb-0 text-center">
                Welcome back
                <span className="position-relative">
                  <span className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 mt-2 d-none d-sm-block">
                    <svg
                      width="150.1px"
                      height="20.7px"
                      viewBox="0 0 150.1 20.7"
                    >
                      <path
                        className="fill-primary"
                        d="M10.7,12.2c-0.8,0.2-1.7,0.4-2.3,1.1C9.3,13,10.1,12.9,10.7,12.2 M63.6,1.9c3.3,0.3,6.7,0.1,10,0.2 c4.8,0.1,9.6,0.2,14.4,0.7c2.9,0.3,5.9,0.3,8.8,0.8c6.9,1,13.7,1.8,20.6,3.1c5.5,1.1,11,2.1,16.4,3.3c4.8,1.1,9.5,2.6,14.3,4 c0.7,0.2,1.3,0.5,1.7,1c-0.3,0.6-0.8-0.2-1.1,0.3c0.3,0.4,1.6,0.2,1.2,1c-0.3,0.6-1.2,1.1-2.2,1c-1.4-0.2-2.6-1-4-1.3 c-6.1-1.4-12.2-3-18.4-4c-3.8-0.6-7.6-1.4-11.5-1.7c-2.1-0.2-4.1-1-6.3-0.9c-0.5,0-1-0.3-1.6,0.2c-0.2,0.2-1,0.5-1.1-0.5 c0-0.2-0.4-0.1-0.6-0.2c-2.5-0.2-5-0.8-7.5-0.7c-2.4,0.1-4.8-0.3-7.2-0.3c-1.7,0-3.3-0.8-5.1-0.7c-0.7,0-1.5-0.1-2.2,0.2 c-0.3,0-0.5-0.1-0.8-0.1c-1.8-0.3-3.7-0.5-5.5-0.2c-1.9-0.4-3.9-0.4-5.8-0.1C68.1,7,66.1,6.8,64,7.4c-0.9,0.3-1.8,0.1-2.8,0.2 c-3.1,0.3-6.3,0.6-9.4,0.8c-0.6,0-1.2,0.3-1.8-0.2c-1.6-0.2-3.2,0-4.8,0.5c-1.6,0.5-3.2,0.4-4.8,0.5c-2.1,0.2-4.1,0.4-6,1.2 c-1.6,0.7-3.5,0.5-5.2,0.9c-3.8,0.9-7.7,1.6-11.2,3.2c-3.8,1.7-8,2.4-11.7,4.4c-0.9,0.5-1.7,1.3-2.8,1.6c-1.1,0.3-2.8-0.3-3.4-1.5 c-0.5-1-0.3-2.1,0.6-2.9c1.7-1.4,3.5-2.5,5.4-3.5c8.2-4.3,16.9-7,25.9-9c8.8-1.9,17.7-3,26.7-3.5C63.5-0.1,68.1,0,72.6,0 c4.7,0,9.4,0.1,14.1,0.5c4.2,0.4,8.3,0.9,12.5,1.4c4.9,0.6,9.7,1.3,14.5,2.1c11.6,2.1,23.1,4.4,34.2,8.4c0.7,0.3,1.7,0.1,2.2,1.1 c-0.9,0.4-1.7,0.1-2.4-0.1c-5.7-2-11.6-3.5-17.4-4.9c-8.7-2.1-17.5-3.3-26.3-4.7c-4.2-0.7-8.6-0.9-12.8-1.5 c-5.6-0.7-11.3-0.9-16.9-1.1c-3.4-0.1-6.8-0.1-10.1,0.3C63.9,1.6,63.7,1.7,63.6,1.9c-0.6-0.5-1.2-0.2-1.9-0.2 C56.9,1.9,52,2.3,47.1,2.8C44.1,3.1,41.1,3.7,38,4c-3.2,0.4-6.4,1.2-9.5,2.1c-0.9,0.2-2.1,0-2.7,1.1c-1.4-0.5-2.5,0.4-3.6,1 c1.2-0.2,2.5-0.4,3.6-1c0.3,0,0.7,0,1-0.1c9.1-2.3,18.4-3.7,27.7-4.4C57.6,2.4,60.6,2.2,63.6,1.9"
                      />
                    </svg>
                  </span>
                </span>
              </h2>
              <p className="mb-0 text-center">
                Welcome back, please enter your detail
              </p>

              <div className="row ">
                <div className="position-relative my-1">
                  <hr />
                </div>
              </div>

              <Box component="form" noValidate autoComplete="off">
                <div className="w-100">
                  <TextField
                    id="outlined-basic"
                    label="Benutzer"
                    variant="outlined"
                    size="small"
                    className="w-100 mb-3"
                    onChange={e => setLogin(e.target.value.trim())}
                  />
                  <TextField
                    id="password"
                    label="Passwort"
                    variant="outlined"
                    size="small"
                    type="password"
                    className="w-100 mb-3"
                    onChange={e => setPwd(e.target.value.trim())}
                  />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label">
                      Eingeloggt bleiben
                    </label>
                  </div>
                </div>
                <Button
                  variant="contained"
                  className="w-100 mt-3"
                  onClick={logIn}
                >
                  Login
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
