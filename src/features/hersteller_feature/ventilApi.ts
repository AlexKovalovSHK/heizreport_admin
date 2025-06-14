import axios, { AxiosError } from "axios"
import { apiUrl } from "../../App"
import { Ventil, VentilInArr } from "./type"

export async function fechAllVentile(): Promise<VentilInArr[]> {
    const res = await axios.get(`${apiUrl}/api/v2/ventils`, {withCredentials: true,})
    //console.log(res.data);
    return res.data
  }

  export async function fechVentilById(id: number): Promise<Ventil> {
    const res = await axios.get(`${apiUrl}/api/v2/ventils/${id}`, {withCredentials: true,})
    console.log(res.data);
    return res.data
  }