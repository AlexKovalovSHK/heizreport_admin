import axios, { AxiosError } from "axios"
import { apiUrl } from "../../App"
import { Hersteller } from "./type";

export async function fechAllHersteller(): Promise<Hersteller[]> {
    const res = await axios.get(`${apiUrl}/api/v2/hersteller`, {withCredentials: true,})
    //console.log(res.data);
    return res.data
  }

  export async function fechHerstellerById(id: number): Promise<Hersteller> {
    const res = await axios.get(`${apiUrl}/api/v2/hersteller/${id}`, {withCredentials: true,})
    //console.log(res.data);
    return res.data
  }