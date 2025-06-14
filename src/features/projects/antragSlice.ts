import { createAppSlice } from "../../app/createAppSlice";
import {  fechAntragById, fetchProjectsByUserId } from "./projectsApi";
import { AntragRespDto, AntragState, ProjectRespDto } from "./type";


const initialState: AntragState = {
    project: {} as AntragRespDto,
    projectsList: [] as AntragRespDto[],
    projektId: null,
    errorMessage: "",
    status: "idle",
    //paginationProjects: {} as ProjectsPage
}

export const antragSlice = createAppSlice({
    name: "antrag",
    initialState,
    reducers: create => ({
        getProjIdAsync: create.asyncThunk(
            async (projId: string) => {
                const response = await fechAntragById(projId)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.project = action.payload
                    state.status = "success"
                },
                rejected: (state, action) => {
                    state.errorMessage = action.error.message
                    state.status = "error"
                },
            },
        ),
        getProjectsBuUserID: create.asyncThunk(
            async (userId:string) => {
                const response = await fetchProjectsByUserId(userId)
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.projectsList = action.payload
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
        selectProject: state => state.project,
        selectProjectsList: state => state.projectsList,
        selectProjectId: state => state.projektId,
        selectError: state => state.errorMessage,
        selectProjectStatus: state => state.status,

    },
})

export const { getProjIdAsync,  getProjectsBuUserID,  } = antragSlice.actions
export const { selectProject, selectError, selectProjectsList, selectProjectId, selectProjectStatus,} = antragSlice.selectors