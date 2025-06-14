import { createAppSlice } from "../../app/createAppSlice"
import { adminLogout, fechAdminAuth, loginAdministrator } from "./adminApi"
import { Administrator, AdminState, LoginAdmin } from "./type"

const initialState: AdminState = {
  admin: {} as Administrator,
  adminID: null,
  errorMessage: "",
  status: "idle",
}

export const adminSlice = createAppSlice({
  name: "admin",
  initialState,
  reducers: create => ({
    resetError: create.reducer(state => {
      state.errorMessage = ""
    }),

    loginAdmin: create.asyncThunk(
      async (adminLog: LoginAdmin) => {
        const response = await loginAdministrator(adminLog)
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.admin = action.payload
          state.adminID = action.payload.adminUserId
          state.status = "success"
        },
        rejected: (state, action) => {
          state.errorMessage = action.error.message
          state.status = "error"
        },
      },
    ),
    logout: create.asyncThunk(
      async () => {
        const response = await adminLogout()
        console.log(response)

        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: state => {
          state.admin = {} as Administrator
          state.status = "idle"
        },
        rejected: (state, action) => {
          state.errorMessage = action.error.message
          state.status = "idle"
        },
      },
    ),
    authAdmin: create.asyncThunk(
      async () => {
        const response = await fechAdminAuth()
        return response
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.admin = action.payload
          state.adminID = action.payload.adminUserId
          state.status = "success"
        },
        rejected: state => {
          state.status = "error"
        },
      },
    ),
    /*getAdmin: create.asyncThunk(
            async (userId:number) => {
                const response = await fechAdminId(userId)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.admin = action.payload
                    state.status = "success"
                },
                rejected: state => {
                    state.status = "error"
                },
            },
        ),*/
  }),

  selectors: {
    selectAdmin: state => state.admin,
    selectAdminId: state => state.adminID,
    selectError: state => state.errorMessage,
    selectAdminStatus: state => state.status,
  },
})
export const { resetError, loginAdmin, logout, authAdmin } = adminSlice.actions
export const { selectAdmin, selectError, selectAdminStatus, selectAdminId } =
  adminSlice.selectors
