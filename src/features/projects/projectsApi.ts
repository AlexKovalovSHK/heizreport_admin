import axios from "axios"
import { apiUrl } from "../../App"
import {
  AntragRespDto,
  AntragsInList,
  ProjectRespDto,
  ProjectsInListPagination,
} from "./type"

export async function fetchProjectsByUserId(
  userId: string,
): Promise<AntragsInList[]> {
  const res = await axios.get(`${apiUrl}/api/v2/projects/owner/${userId}`, {
    withCredentials: true, // ✅ Обязательно!
  })
  return res.data
}

export async function fechAntragById(
  projectId: string,
): Promise<AntragRespDto> {
  const res = await axios.get(`${apiUrl}/api/v2/projects/${projectId}`, {
    headers: { "content-type": "application/json" },
    withCredentials: true,
  })
  //console.log(res.data);
  return res.data
}

export async function fechProjectById(
  projectId: string,
): Promise<ProjectRespDto> {
  const res = await axios.get(`${apiUrl}/api/v3/projects/${projectId}`, {
    withCredentials: true,
  })
  console.log(res.data)
  return res.data
}

export async function fechProjectsByType(
  type: number,
  page?: number,
): Promise<ProjectsInListPagination> {
  const res = await axios.get(
    `${apiUrl}/api/v3/projects/types/${type}?page=${page}`,
    { withCredentials: true },
  )
  //console.log(res.data);
  return res.data
}
