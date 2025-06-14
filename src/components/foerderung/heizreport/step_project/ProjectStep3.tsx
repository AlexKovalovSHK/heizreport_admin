import { useAppSelector } from "../../../../app/hooks"
import { selectAntrag } from "../../../../features/foerderung/foerderungSlice"

const ProjectStep3 = () => {
  const antrag = useAppSelector(selectAntrag)
  return (
    <div className="col-lg-12 mt-3">
      <h4>Angaben zum Antragsteller / Objektinhaber</h4>

      <div className="border border-secondary rounded p-3 mb-3 w-100">
        <p>
          <b>Vorname:</b> {antrag?.antragKundeVorname}
        </p>
        <p>
          <b>Name:</b> {antrag?.antragKundeName}
        </p>
        <p>
          <b>Straße:</b>
          {antrag?.antragFirmaStrasse}
        </p>
        <p>
          <b>Hausnummer:</b>
          {antrag?.antragFirmaHausnummer}
        </p>
        <p>
          <b>PLZ:</b>
          {antrag?.antragFirmaPLZ}
        </p>
        <p>
          <b>Ort:</b>
          {antrag?.antragFirmaOrt}
        </p>

        <p>
          <b>Telefon:</b>
          {antrag?.antragFirmaTelefon}
        </p>
        <p>
          <b>E-Mail:</b>
          {antrag?.antragFirmaEmail}
        </p>
      </div>

      <hr />

     <div className="border border-secondary rounded p-3 mb-3 w-100">
     <p>ggf.Firma</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDisabled"
          disabled
        />
        <label className="form-check-label">Vorsteuerabzugsberechtigt</label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDisabled"
          disabled
        />
        <label className="form-check-label">
          Investition für wirtschaftliche Zwecke
        </label>
      </div>
     </div>
    </div>
  )
}

export default ProjectStep3
