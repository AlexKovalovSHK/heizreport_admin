import axios from "axios";
import { apiUrl } from "../../App";
import { LogHeiz } from "./type";


export async function fetchLogsByProjectId(id: number): Promise<LogHeiz[]> {
    const res = await axios.get(`${apiUrl}/api/v3/logs/projects/${id}`, {
        withCredentials: true, // ✅ Обязательно!
    });
    return res.data;
}