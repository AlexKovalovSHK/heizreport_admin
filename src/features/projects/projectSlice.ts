import { createAppSlice } from "../../app/createAppSlice";
import { fechProjectById, fetchProjectsByUserId } from "./projectsApi";
import { ProjectRespDto, ProjectState } from "./type";


const initialState: ProjectState = {
    project: {} as ProjectRespDto,
    projectsList: [] as ProjectRespDto[],
    projektId: null,
    errorMessage: "",
    status: "idle",
    //paginationProjects: {} as ProjectsPage
}

export const projectSlice = createAppSlice({
    name: "project",
    initialState,
    reducers: create => ({
        getProjIdAsync: create.asyncThunk(
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

export const { getProjIdAsync,  getProjectsBuUserID,  } = projectSlice.actions
export const { selectProject, selectError, selectProjectsList, selectProjectId, selectProjectStatus,} = projectSlice.selectors