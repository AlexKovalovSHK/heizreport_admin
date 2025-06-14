import { useAppSelector } from "../../../../app/hooks"
import { selectAntrag } from "../../../../features/foerderung/foerderungSlice"
import NoteAltIcon from "@mui/icons-material/NoteAlt"
import DescriptionIcon from '@mui/icons-material/Description';
import FactCheckIcon from '@mui/icons-material/FactCheck';

const ProjectStep1 = () => {
  const antrag = useAppSelector(selectAntrag)
  return (
    <div className="col-lg-12 mt-3">
      <div className="">
        <div className="border border-secondary rounded p-3 mb-3 w-100">
          <div className="d-flex flex-row">
            <NoteAltIcon
              sx={{ fontSize: "56px", color: "#0074D9" }}
            />
            <div className="border border-secondary rounded p-3 w-100">
              {antrag.antragNotiz}
            </div>
          </div>
        </div>

        <div className="border border-success rounded p-3 mb-3 w-100">
          <div className="d-flex flex-row">
            <FactCheckIcon
              sx={{ fontSize: "56px", color: "green" }}
            />
            <div className="ms-2">
              <h5>Der Heizreport Fördergeldservice wurde beauftragt.</h5>
              <p>03.03.2025 - 15:19 Uhr</p>
              <h6>Der Heizreport Fördergeldservice wurde beauftragt.</h6>
            </div>
          </div>
        </div>

        <div className="border border-warning rounded p-3 mb-3 w-100">
          <div className="d-flex flex-row">
            <DescriptionIcon
              sx={{ fontSize: "56px", color: "orange" }}
            />
            <div className="ms-2">
              <h5>Leistungs- und Liefervertrag.</h5>
              <p> Vertrag öffnen</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectStep1
