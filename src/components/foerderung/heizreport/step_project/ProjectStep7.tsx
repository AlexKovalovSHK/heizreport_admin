import { useAppSelector } from "../../../../app/hooks"
import { selectAntrag } from "../../../../features/foerderung/foerderungSlice"

const ProjectStep7 = () => {
  const antrag = useAppSelector(selectAntrag)
  return (
    <div className="col-lg-12 mt-3">
      <h4>Liefer- und Leistungsvertrag mit auflösender Bedingung</h4>

      <div className="">
        <div className="border border-secondary rounded p-3 mb-3 w-100 bg-info">
          <h6 className="mb-2">
            Du hast drei Möglichkeiten den Liefer- und Leistungsvertrag hier zu
            hinterlegen.
          </h6>
          <ul>
            <li>
              Wähle ein Dokument das bereits im Dateiarchiv des Projektes
              vorhanden ist.
            </li>
            <li>Lade den Vertrag als PDF-Dokument hier direkt hoch.</li>
            <li>
              Nutze den Vertrag Generator um ein neues Dokument zu erstellen.
            </li>
          </ul>
        </div>
        <div className="border border-secondary rounded p-3 mb-3 w-100">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Der Liefer- und Leistungsvertrag liegt als PDF-Dokument in den
              Dateien zum Projekt vor
            </label>
          </div>
          <p>
            <b>Datei auswählen</b>liefer_und_leistungsvertrag.pdf
          </p>
          <h5>Dateivorschau</h5>
          <h6>Hast du an alles gedacht?</h6>
        </div>
      </div>
    </div>
  )
}

export default ProjectStep7
