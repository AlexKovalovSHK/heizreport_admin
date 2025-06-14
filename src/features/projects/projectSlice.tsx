import { createAppSlice } from "../../app/createAppSlice";
import { fechProjectById, fechProjectsByType } from "./projectsApi";
import { ProjectRespDto, ProjectsInListPagination, ProjectState } from "./type";


const initialState: ProjectState = {
    project: {} as ProjectRespDto,
    projectsList: {} as ProjectsInListPagination,
    projektId: null,
    errorMessage: "",
    status: "idle",
}

export const projectSlice = createAppSlice({
    name: "project",
    initialState,
    reducers: create => ({
        getProjectIdAsync: create.asyncThunk(
            async (projId: string) => {
                const response = await fechProjectById(projId)
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
        getProjectsByType: create.asyncThunk(
            async (type:number) => {
                const response = await fechProjectsByType(type)
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

export const { getProjectIdAsync,  getProjectsByType,  } = projectSlice.actions
export const { selectProject, selectError, selectProjectsList, selectProjectId, selectProjectStatus,} = projectSlice.selectors