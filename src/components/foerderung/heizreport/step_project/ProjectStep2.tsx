import React from "react"
import { useAppSelector } from "../../../../app/hooks"
import { selectProject } from "../../../../features/projects/projectSlice"
import { selectUser } from "../../../../features/users/userSlice"

const ProjectStep2 = () => {
  const project = useAppSelector(selectProject)
  const user = useAppSelector(selectUser)

  return (
    <div className="col-lg-12 mt-3">
      <h4>Angaben Fachpartner</h4>

      <div className="border border-secondary rounded p-3 mb-3 w-100">
        <p>Firma: <b>{user?.userFirma}</b></p>
        <p>Ansprechpartner: <b>{user?.userName} {user?.userVorname}</b></p>
        <p>PLZ: <b>{user?.userPLZ}</b></p>
        <p>Ort: <b>{user?.userOrt}</b></p>
        <p>Straße: <b>{user?.userStrasse}</b></p>
        <p>Hausnummer: <b>{user?.userHNr}</b></p>
        <p>Telefon: <b>{user?.userTelefon}</b></p>
        <p>E-Mail: <b>{user?.userMail}</b></p>
      </div>
    </div>
  )
}

export default ProjectStep2
