import axios, { AxiosError } from "axios"
import { apiUrl } from "../../App"
import { Warmpumpe, WarmpumpeInArr } from "./type"

export async function fechAllWarmpumpe(): Promise<WarmpumpeInArr[]> {
  const res = await axios.get(`${apiUrl}/api/v2/warmpumps`, {
    withCredentials: true,
  })
  console.log(res.data)
  return res.data
}

export async function fechWarmpumpeById(id: number): Promise<Warmpumpe> {
  const res = await axios.get(`${apiUrl}/api/v2/warmpumps/${id}`, {
    withCredentials: true,
  })
  console.log(res.data)
  return res.data
}
