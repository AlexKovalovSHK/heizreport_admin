import { Button } from "@mui/material"
import React from "react"

const ProjectStep4 = () => {
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
              Baujahr: <span>1995</span>
            </p>
          </div>
          <div className="w-50 border border-secondary rounded p-3">
            <p className="mb-0">
              Wohnfläche (m²): <span>220</span>
            </p>
          </div>
        </div>

        <div className="w-100 mb-3 border border-secondary rounded p-3">
          <p className="mb-0">
            Gebäudeart: <span>Einfamilienhaus (1 WE)</span>
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
