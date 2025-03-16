import axios, { AxiosError } from "axios"
import { Administrator, LoginAdmin } from "./type"
import { hashPassword } from "./utils_admin"
import { apiUrl } from "../../App"

export async function loginAdministrator(login: LoginAdmin): Promise<Administrator> {
    const pwd = await hashPassword(login.adminUserPass)
  try {
    const res = await axios.post(
      `${apiUrl}/api/v3/auth/admins/login`,
      {
        adminUserName: login.adminUserName,
        adminUserPass: pwd,
      },
      {
        headers: { "content-type": "application/json" },
        withCredentials: true,
      },
    )
    console.log(res.data);
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      throw axiosError.response?.data
    } else {
      throw error
    }
  }
}

export async function adminLogout() {
  const res = await axios.post(`${apiUrl}/api/v3/auth/admins/logout`,{}, {withCredentials: true,})
  console.log(res.data);
  return res.data
}

export async function fechAdminAuth(): Promise<Administrator> {
  const res = await axios.get(`${apiUrl}/api/v3/auth/admins/me`, {withCredentials: true,})
  return res.data
}

/*export async function fechAdminId(id: number): Promise<Administrator> {
    const res = await axios.get(`${apiUrl}/api/v3/admins/${id}`, {withCredentials: true,})
    return res.data
  }*/

