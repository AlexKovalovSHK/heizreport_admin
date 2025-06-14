export interface Hersteller {
  herstellerId: number
  herstellerKurz: string
  herstellerName: string
  herstellerWebseite: string
  herstellerTyp: string
  herstellerNotizIntern: string
  herstellerNotizExtern: string
  herstellerStatus: string
}

export interface Warmpumpe {
  wpId: number
  wpHersteller: number
  wpEinsatzbereich: number
  wpTyp: number
  wpVariante: number
  wpEnergie: number
  wpProduktvariante: number
  wpAufstellort: number
  wpLeistungsregelung: number
  wpAntriebsenergie: number
  wpProduktname: string
  wpProduktserie: string
  wpHeizleistung: number
  wpLeistungszahl: number
  wpElektrLeistungsaufnahme: number
  wpElektroanschluss: string
  wpKaeltemittel: string
  wpFuellmengeKaeltemittel: number
  wpSchalleistungspegel: number
  wpMaxVorlauf: number
  wpMasse: number
  wpLeistungsgrenze: number
  wpGWP: number
  wpBauartKaeltekreis: number
  wpSicherheitsklasse: string
  wpLeistungsdatenJSON: string
  wpStatus: string
}

export interface WarmpumpeInArr {
  wpId: number
  wpProduktserie: string
  wpProduktname: string
  wpStatus: string
}

export interface VentilInArr {
  ventilId: number
  ventilBezeichnung: string
  ventilBauform: string
  ventilNennweite: number
  ventilHersteller: number
}

export interface Ventil {
  ventilId: number
  ventilArt: number
  ventilBezeichnung: string
  ventilBauform: string
  ventilNennweite: number
  ventilKvs: number
  ventilMaxPa: number
  ventilSettings1K: string
  ventilSettings2K: string
  ventilEinstellSchritte: number
  ventilHersteller: number
  ventilVdiImport: string
  ventilGeneration: number
}
