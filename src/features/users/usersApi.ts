import axios, { AxiosError } from "axios"
import { apiUrl } from "../../App"
import { ChangePwd, User, UserEdit, UsersPage } from "./type"


export async function fechAllUsersPagination(
  page?: number,
  size?: number,
): Promise<UsersPage> {
  const res = await axios.get(
    `${apiUrl}/api/v1/users?page=${page}&size=${size}`,
    {},
  )
  return res.data
}

export async function fechAllUsers(): Promise<UsersPage> {
  const res = await axios.get(`${apiUrl}/api/v1/users`, {withCredentials: true,})
  return res.data
}

export async function fechUserId(userId: number): Promise<User> {
  const res = await axios.get(`${apiUrl}/api/v1/users/${userId}`, {withCredentials: true,})
  return res.data
}

export async function removeUserId(userId: string): Promise<User> {
  const res = await axios.delete(`${apiUrl}/api/v1/users/${userId}`, {withCredentials: true,})
  return res.data
}

export const updateUserAccount = async (user: UserEdit): Promise<User> => {
  try {
    console.log({
      user,
    })

    const res = await axios.put(
      `${apiUrl}/api/v2/users/${user?.userId}`,
      {
        userVorname: user.userVorname,
        userName: user.userName,
        userFirma: user.userFirma,
        userStrasse: user.userStrasse,
        userHNr: user.userHNr,
        userPLZ: user.userPLZ,
        userOrt: user.userOrt,
        userTelefon: user.userTelefon,
      },
      { headers: { "Content-Type": "application/json" } },
    )
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      const responseData = axiosError.response?.data as any
      if (responseData && responseData.errors) {
        const firstErrorKey = Object.keys(responseData.errors)[0]
        throw new Error(
          "Registration failed! " + responseData.errors[firstErrorKey],
        )
      } else {
        throw new Error("Registration failed! Reason unknown")
      }
    } else {
      throw error
    }
  }
}

export async function fechNewPwd(obj: ChangePwd) {
  const headers = {
    "Content-Type": "application/json",
    "x-password": `${obj.password2}`,
  }
  const res = await axios.put(
    `${apiUrl}/api/v1/users/${obj.userId}/password`,
    {},
    { headers },
  )
  return res.data
}

export async function fechUserByEmail(userEmail: string): Promise<User> {
  const res = await axios.get(`${apiUrl}/api/v1/users/email/${userEmail}`, {withCredentials: true,})
  return res.data
}
