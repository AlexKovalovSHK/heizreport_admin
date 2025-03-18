import axios from "axios";
import { apiUrl } from "../../App";


export async function fechAntrags(adminId: number) {
    const res = await axios.get(`${apiUrl}/api/v2/foerderung/admins/${adminId}`, {withCredentials: true,})
    console.log(res.data);
    return res.data
}

export async function fechAntragById(id: number) {
    const res = await axios.get(`${apiUrl}/api/v2/foerderung/${id}`, {withCredentials: true,})
    console.log(res.data);
    return res.data
}