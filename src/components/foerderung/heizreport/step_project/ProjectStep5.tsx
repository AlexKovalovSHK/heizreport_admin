import React from "react"
import { useAppSelector } from "../../../../app/hooks"
import { selectAntrag } from "../../../../features/foerderung/foerderungSlice"

const ProjectStep5 = () => {
  const antrag = useAppSelector(selectAntrag)
  return (
    <div className="mt-3 mb-3">
      <h5>Angaben zur geplanten Heizungsanlage (Einzelmaßnahme)</h5>
      <div className="border border-secondary rounded p-3 mb-3 w-100">
        <p>
          Die Anforderungen an Anlagen zur Wärmeerzeugung aus der Anlage
          „Technische Mindestanforderungen" zur Förderrichtlinie BEG EM sind
          einzuhalten. Im Fall von Hybridanlagen beziehungsweise bivalenten
          Kombi-/Kompaktgeräten sind nachfolgend die jeweils anteiligen Kosten
          bei den geplanten förderfähigen Kosten der jeweiligen
          Wärmeerzeugungsart anzugeben. Nichtförderfähige Anlagen
          beziehungsweise Komponenten sind bei den geplanten förderfähigen
          Kosten in Abzug zu bringen. Bei wasserstofffähigen Heizungen bemisst
          sich der Zuschuss an den Investitionsmehrkosten. Weiterführende
          Hinweise finden Sie im Infoblatt "Liste der förderfähigen Maßnahmen
          und Leistungen".
        </p>
      </div>

      <div className="border border-secondary rounded p-3 mb-3 w-100">
        {antrag.antragObjektWaermepumpeStatus ? (
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCheckedDisabled"
              checked
              disabled
            />
            <label className="form-check-label">Wärmepumpe</label>
          </div>
        ) : (
          <></>
        )}
        <div className="">
          <p>
            <b>Nennleistung in kW:</b>
            {antrag.antragObjektWpNennleistung}
          </p>
          <p>
            <b>Geplante förderfähige Kosten:</b>
            {antrag.antragKostenWaermepumpe}
          </p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Einsatz natürlicher Kältemittel
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked
              disabled
            />
            <label className="form-check-label">
              Jahresarbeitszahl mind. 3,0 <br />
              <small>
                Die Berechnung der JAZ wurde durchgeführt und das Ergebnis liegt
                über JAZ 3,0
              </small>
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked
              disabled
            />
            <label className="form-check-label">
              Die Technischen Mindestanforderungen für die Förderung werden
              erfüllt
            </label>
          </div>

          <p>
            <b>Betriebsweise:</b>
            {antrag.antragObjektWaermepumpeBetriebsweise}
          </p>
          <p>
            <b>Systemtemperatur (z.B. 55/45 °C):</b>
            {antrag.antragObjektSystemtemperatur}
          </p>
          <p>
            <b>Wärmequelle:</b>
            {antrag.antragObjektWPWaermequelle}
          </p>
          <p>
            <b>Beheizung über:</b>
            {antrag.antragObjektWPBeheizung}
          </p>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">Solarthermische Anlage</label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Biomasseheizung (ab mind. 5 kW Nennwärmeleistung)
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">Brennstoffzellenheizung</label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Wasserstofffähige Heizung
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Innovative Heizungstechnik auf Basis erneuerbarer Energien, die
              die Anforderungen der TMA der Richtlinie erfüllen
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Anschluss beziehungsweise Erneuerung des Anschlusses an ein
              Gebäudenetz
            </label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              disabled
            />
            <label className="form-check-label">
              Anschluss beziehungsweise Erneuerung des Anschlusses an ein
              Wärmenetz
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectStep5
