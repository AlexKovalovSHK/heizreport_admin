export interface Administrator {
  adminUserId: number
  adminUserNick: string
  adminUserMail: string
  adminUserRight: number
  adminUserName: string
  adminUserFullname: string
  adminUserBezeichnung?: string
  adminLastAction: number
  adminPicture?: string
}

export interface LoginAdmin {
    adminUserName: string
    adminUserPass: string
  }

  export interface AdminState {
    admin?: Administrator;
    adminID?: number | null;
    errorMessage?: string;
    status?: 'idle' | 'loading' | 'success' | 'error';
  }
  