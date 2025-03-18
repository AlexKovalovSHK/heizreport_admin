export interface Antrag {
  antragId: number
  antragWorktime: number
  antragPortal: number
  antragAdminUserId: number
  adminUserName: string
  antragFirma: string
  antragKundeVorname: string
  antragKundeName: string
  adminUserName: string
  userId: number
  projektId: string
  antragStatus: number
}

export interface AntragState {
    antrag: Antrag,
    antragsList: Antrag[],
    errorMessage?: string,
    status: string,
}
