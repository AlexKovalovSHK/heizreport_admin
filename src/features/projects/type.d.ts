export interface AntragState {
  project: AntragRespDto
  projectsList: ProjectsInList[]
  projektId: number | null
  errorMessage?: string
  status: string
}

export interface AntragsInList {
  projektId: number
  projektName: string
  projektTimestamp: string | number
  projektStatus: number
  storageSizeDocs: number
}

export interface AntragRespDto {
  projektId: number
  projektKey: string
  email: string
  projektPassword: string
  projektStatus: number
  projektTyp: number
  projektOwner: number
  projektAccount: number
  projektAPI: number
  projektMotherId: number
  projektReminderAutoDelete: number
  projektAffiliate: number
  projektName: string
  projektTimestamp: string | number
  projektCreateTime: number
  projektLastloginTimestamp: number
  projektPostleitzahl: string
  projektOrtLongitute: number
  projektOrtLatitude: number
  projektLand: string
  projektOrtAnschrift: string
  projektNormtemperatur: number
  projektJahresmitteltemperatur: number
  projektHoehendifferenz: number
  projektArtHeizung: number
  projektAlterHeizung: number
  projektBewohner: number
  projektJahresverbrauch: string
  projektBaujahr: string
  projektTrinkwasser: number
  projektWaermeerzeugerSolarStatus: string
  projektWaermeerzeugerSolarArt: number
  projektKollektorflaecheSolar: number
  projektWaermeerzeugerHolzStatus: string
  projektJahresverbrauchHolz: string
  projektWaermeerzeugerHolzArt: number
  projektWaermebrueckenzuschlag: number
  projektRohrnetz: number
  projektStrategieBadhzk: number
  projektRegeldifferenz: number
  projektWarmwasserTagesbedarfProPerson: number
  projektWaermerueckgewinnung: number
  projektLuftwechselStatus: string
  projektLuftwechselRaum: number
  projektLuftwechselHaus: number
  projektHeatpump: string
  projektHeizlast: number
  projektVorgaben: string
  anrede: number
  vorname: string
  name: string
  strasse: string
  hausnummer: string
  plz: string
  ort: string
  telefon: string
  bemerkungen: string
  payment: number
  paymentOwner: number
  paymentFoerderung: number
  paymentSimulation: number
  downloadSimulation: number
  paymentThermregio: number
  downloadThermregio: number
  projektMailPlanung: number
  projektStyle: string
  mailLog: string
  projektLexofficeId: string
  deleteTimestamp: number
  storageSizeImg: number
  storageSizeDocs: number
}

export interface StartNewProjectDto {
  projektName: string
  email: string
  vorname: string
  name: string
  strasse: string
  hausnummer: string
  plz: string
  ort: string
  tel: string
  note: string
}

export interface ModalState {
  modal1: boolean
  modal2: boolean
  modal3: boolean
  modal4: boolean
}

export interface NewProjectDto {
  projektKey: string
  email: string
  projektPassword: string
  projektStatus: number
  projektTyp: number
  projektOwner: number
  projektAccount: number
  projektAPI: number
  projektMotherId: number
  projektReminderAutoDelete: number
  projektAffiliate: number
  projektName: string
  projektTimestamp: Date | null
  projektCreateTime: number
  projektLastloginTimestamp: number
  projektPostleitzahl: string
  projektOrtLongitute: number
  projektOrtLatitude: number
  projektLand: string
  projektOrtAnschrift: string
  projektNormtemperatur: number
  projektJahresmitteltemperatur: number
  projektHoehendifferenz: number
  projektArtHeizung: number
  projektAlterHeizung: number
  projektBewohner: number
  projektJahresverbrauch: string
  projektBaujahr: string
  projektTrinkwasser: number
  projektWaermeerzeugerSolarStatus: string
  projektWaermeerzeugerSolarArt: number
  projektKollektorflaecheSolar: number
  projektWaermeerzeugerHolzStatus: string
  projektJahresverbrauchHolz: string
  projektWaermeerzeugerHolzArt: number
  projektWaermebrueckenzuschlag: number
  projektRohrnetz: number
  projektStrategieBadhzk: number
  projektRegeldifferenz: number
  projektWarmwasserTagesbedarfProPerson: number
  projektWaermerueckgewinnung: number
  projektLuftwechselStatus: string
  projektLuftwechselRaum: number
  projektLuftwechselHaus: number
  projektHeatpump: string
  projektHeizlast: number
  projektVorgaben: string
  anrede: number
  vorname: string
  name: string
  strasse: string
  hausnummer: string
  plz: string
  ort: string
  telefon: string
  bemerkungen: string
  payment: number
  paymentOwner: number
  paymentFoerderung: number
  paymentSimulation: number
  downloadSimulation: number
  paymentThermregio: number
  downloadThermregio: number
  projektMailPlanung: number
  projektStyle: string
  mailLog: string
  projektLexofficeId: string
  deleteTimestamp: number
  storageSizeImg: number
  storageSizeDocs: number
}

export interface ProjectRespInListListAdminDto {
  projectId: number
  payment: number
  email: string
  projektName: string
  projektKey: string
  projektOwner: string
  projektStatus: number
  projektTyp: number
  url: string
  projektTimestamp: string
  zeitAnzeige: Date
}

export interface ProjectsInListPagination {
  projectsDto: ProjectRespInListListAdminDto[]
  pages: number
  currentPage: number
}

export interface ProjectState {
    project: ProjectRespDto
    projectsList: ProjectsInListPagination
    projektId: number | null
    errorMessage?: string
    status: string
  }

export interface ProjectRespDto {
    projektId: number;
    projektKey: string;
    email: string;
    projektPassword: string;
    projektStatus: number;
    projektTyp: number;
    projektOwner: number;
    projektAccount: number;
    projektAPI: number;
    projektMotherId: number;
    projektReminderAutoDelete: number;
    projektAffiliate: number;
    projektName: string;
    projektTimestamp: Date;
    projektCreateTime: number;
    projektLastloginTimestamp: number;
    projektPostleitzahl: string;
    projektOrtLongitute: number;
    projektOrtLatitude: number;
    projektLand: string;
    projektOrtAnschrift: string;
    projektNormtemperatur: number;
    projektJahresmitteltemperatur: number;
    projektHoehendifferenz: number;
    projektArtHeizung: number;
    projektAlterHeizung: number;
    projektBewohner: number;
    projektJahresverbrauch: string;
    projektBaujahr: string;
    projektTrinkwasser: number;
    projektWaermeerzeugerSolarStatus: string;
    projektWaermeerzeugerSolarArt: number;
    projektKollektorflaecheSolar: number;
    projektWaermeerzeugerHolzStatus: string;
    projektJahresverbrauchHolz: string;
    projektWaermeerzeugerHolzArt: number;
    projektWaermebrueckenzuschlag: number;
    projektRohrnetz: number;
    projektStrategieBadhzk: number;
    projektRegeldifferenz: number;
    projektWarmwasserTagesbedarfProPerson: number;
    projektWaermerueckgewinnung: number;
    projektLuftwechselStatus: string;
    projektLuftwechselRaum: number;
    projektLuftwechselHaus: number;
    projektHeatpump: string;
    projektHeizlast: number;
    projektVorgaben: string;
    anrede: number;
    vorname: string;
    name: string;
    strasse: string;
    hausnummer: string;
    plz: string;
    ort: string;
    telefon: string;
    bemerkungen: string;
    payment: number;
    paymentOwner: number;
    paymentFoerderung: number;
    paymentSimulation: number;
    downloadSimulation: number;
    paymentThermregio: number;
    downloadThermregio: number;
    projektMailPlanung: number;
    projektStyle: string;
    mailLog: string;
    projektLexofficeId: string;
    deleteTimestamp: number;
    storageSizeImg: number;
    storageSizeDocs: number;
    countHeatpump: number;
    projektCardId: number;
    projektCardPosition: number;
  }