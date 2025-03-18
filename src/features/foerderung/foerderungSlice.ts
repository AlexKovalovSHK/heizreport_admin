import { createAppSlice } from "../../app/createAppSlice";
import { fechAntragById, fechAntrags } from "./foerderungApi";
import { Antrag, AntragState } from "./type";


const initialState: AntragState = {
    antrag: {} as Antrag,
    antragsList: [] as Antrag[],
    errorMessage: "",
    status: "idle",
}

export const foerderungSlice = createAppSlice({
    name: "foerderung",
    initialState,
    reducers: create => ({
        getAntragIdAsync: create.asyncThunk(
            async (id: number) => {
                const response = await fechAntragById(id)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.antrag = action.payload
                    state.status = "success"
                },
                rejected: (state, action) => {
                    state.errorMessage = action.error.message
                    state.status = "error"
                },
            },
        ),
        getAntragssBuAdminId: create.asyncThunk(
            async (id:number) => {
                const response = await fechAntrags(id)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.antragsList = action.payload
                    state.status = "success"
                },
                rejected: (state, action) => {
                    state.errorMessage = action.error.message
                    state.status = "error"
                },
            },
        ),
    }),
    selectors: {
        selectAntrag: state => state.antrag,
        selectAntragsList: state => state.antragsList,
        selectError: state => state.errorMessage,
        selectAntragStatus: state => state.status,

    },
})

export const { getAntragIdAsync,  getAntragssBuAdminId,  } = foerderungSlice.actions
export const { selectAntrag, selectError, selectAntragsList, selectAntragStatus,} = foerderungSlice.selectors