import React from "react"
import { useAppSelector } from "../../../../app/hooks"
import { selectAntrag } from "../../../../features/foerderung/foerderungSlice"

const ProjectStep6 = () => {
  const antrag = useAppSelector(selectAntrag)
  return (
    <div className="col-lg-12 mt-3">
      <h4>Bonus</h4>

      <div className="">
        <div className="border border-secondary rounded p-3 mb-3 w-100">
          <h6 className="mb-2">
            Geschwindigkeitsbonus und Emissionsminderungszuschlag
          </h6>
          <p>Angabe zur Heizung im Bestand</p>
          <p>
            <b>Datum Inbetriebnahme der alten Heizung:</b>
            {antrag.antragObjektAlterheizung}
          </p>
          <p>
            ggf. Schätzung bzw. 01.01. des Baujahres der alten Heizung angeben
            2021-05-01
          </p>
          <p>
            <b>Nennleistung der alten Heizung in kW: </b>
            {antrag.antragObjektHeizlast}
          </p>

          <hr />

          <p>
            <b>Alte Heizung: </b>
            {antrag.antragObjektAlteHeizung}
          </p>
          <p>
            <b>Art der alten Heizung: </b>
            {antrag.antragObjektArtalteHeizung}
          </p>
        </div>
        <div className="border border-secondary rounded p-3 mb-3 w-100">
          <h6>Einkommensbonus</h6>
          <p>
            Angaben zum Einkommensbonus sind an dieser Stelle nicht notwendig.
            Für den Fall das dieser zum Einsatz kommt, gibt der Antragsteller
            diese Informationen eigenständig gegenüber der KfW-Bank an und muss
            dieses mit geeigneten Unterlagen nachweisen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectStep6
