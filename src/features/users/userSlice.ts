
import { createAppSlice } from "../../app/createAppSlice";
import { User, UserEdit, UsersPage, UserState } from "./type";
import { fechAllUsers, fechUserByEmail, fechUserId, removeUserId, updateUserAccount } from "./usersApi";


const initialState: UserState = {
    user: {} as User,
    usersList: [] as User[],
    userID: "",
    errorMessage: "",
    status: "idle",
    paginationUsers: {} as UsersPage
}

export const userSlice = createAppSlice({
    name: "user",
    initialState,
    reducers: create => ({
        resetError: create.reducer(state => {
            state.errorMessage = ""
        }),
        getUser: create.asyncThunk(
            async (userId:number) => {
                const response = await fechUserId(userId)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.user = action.payload
                    state.status = "success"
                },
                rejected: state => {
                    state.status = "error"
                },
            },
        ),
        deleteUser: create.asyncThunk(
            async (userId:string) => {
                const response = await removeUserId(userId)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.usersList?.splice(0, state.usersList.length, ...state.usersList.filter(u => u.userId !== action.payload.userId))
                    state.status = "success"
                },
                rejected: state => {
                    state.status = "error"
                },
            },
        ),
        updateUser: create.asyncThunk(
            async (user: UserEdit) => {
                const response = await updateUserAccount(user)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.user = action.payload
                    state.status = "success"
                },
                rejected: state => {
                    state.status = "error"
                },
            },
        ),
        allUsers: create.asyncThunk(
            async () => {
                const response = await fechAllUsers()
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.paginationUsers = action.payload
                    state.status = "success"
                },
                rejected: state => {
                    state.status = "error"
                },
            },
        ),
        /*allUsersPagination: create.asyncThunk(
            async (pag: MyPagination) => {
                const response = await fechAllUsersPagination(pag.page, pag.size)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.paginationUsers = action.payload
                    state.status = "success"
                },
                rejected: state => {
                    state.status = "error"
                },
            },
        ),*/

          getUserByEmail: create.asyncThunk(
            async (email: string) => {
              const response = await fechUserByEmail(email)
              return response
            },
            {
              pending: () => {},
              fulfilled: (state, action)  => {
                state.user = action.payload
              },
              rejected: (state, action) => {
                state.errorMessage = action.error.message
              },
            },
          ),
         
    }),

    selectors: {
        selectUser: state => state.user,
        selectUsersList: state => state.usersList,
        selectUserId: state => state.userID,
        selectError: state => state.errorMessage,
        selectUserStatus: state => state.status,
        selectUsersPagination:state => state.paginationUsers
    },
})
/*export const { registrationStudentAsync, resetError, emailConfirmAsync, login, logout, authUser, allUsers, getUser, editUserAsync, removeUser } = userSlice.actions*/
export const { resetError,  allUsers, getUser, deleteUser, updateUser,  getUserByEmail } = userSlice.actions
export const { selectUser, selectError, selectUserStatus, selectUserId, selectUsersList, selectUsersPagination } = userSlice.selectors
