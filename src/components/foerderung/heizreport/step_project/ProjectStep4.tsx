import { Button } from "@mui/material"
import React from "react"
import { useAppSelector } from "../../../../app/hooks"
import { selectAntrag } from "../../../../features/foerderung/foerderungSlice"

const ProjectStep4 = () => {
  const antrag = useAppSelector(selectAntrag)

  return (
    <>
      <div className="col-lg-12 mt-3">
        <h4>Angaben zur Immobilie</h4>
        <div className="border border-secondary rounded p-3 mb-3 w-100">
          <div className="form-check form-switch ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Abweichende Objektadresse (Eigentümer bewohnt Immobilie nicht
              selbst)
            </label>
          </div>
        </div>

        <div className=" mb-3 d-flex justify-content-between w-100">
          <div className="w-25 border border-secondary rounded p-3">
            <p className="mb-0">
              Baujahr: <span>{antrag.antragObjektBaujahr}</span>
            </p>
          </div>
          <div className="w-50 border border-secondary rounded p-3">
            <p className="mb-0">
              Wohnfläche (m²): <span>{antrag.antragObjektFlaeche}</span>
            </p>
          </div>
        </div>

        <div className="w-100 mb-3 border border-secondary rounded p-3">
          <p className="mb-0">
            Gebäudeart: <span>{antrag.antragObjektBetroffeneWE}</span>
          </p>
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
              Die Immobilie befindet sich in einem Gebiet mit ausgewiesenem
              Anschluss- und Benutzungszwang für ein Wärmenetz
              (Fernwärme/Nahwärme)
            </label>
          </div>
        </div>
        <Button variant="contained">Weiter</Button>
      </div>
    </>
  )
}

export default ProjectStep4
