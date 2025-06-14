import axios from "axios";
import { apiUrl } from "../../App";
import { MailResp } from "./type";


export async function fetcMails(mail: string): Promise<MailResp[]> {
    const res = await axios.get(`${apiUrl}/api/v3/mails/${mail}`, {
        withCredentials: true, // ✅ Обязательно!
    });
    return res.data;
}

export async function fetcMailById(id: number): Promise<MailResp> {
    const res = await axios.get(`${apiUrl}/api/v3/mails/mails/${id}`, {
        withCredentials: true, // ✅ Обязательно!
    });
    return res.data;
}