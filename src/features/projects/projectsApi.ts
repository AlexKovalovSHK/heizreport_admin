import axios from "axios"
import { apiUrl } from "../../App"
import { ProjectRespDto, ProjectsInList } from "./type";



export async function fetchProjectsByUserId(userId: string): Promise<ProjectsInList[]> {
    const res = await axios.get(`${apiUrl}/api/v2/projects/owner/${userId}`, {
        withCredentials: true, // ✅ Обязательно!
    });
    return res.data;
}

export async function fechProjectById(projectId:string): Promise<ProjectRespDto> {
    const res = await axios.get(`${apiUrl}/api/v2/projects/${projectId}`, {withCredentials: true,})
    //console.log(res.data);
    return res.data
}
