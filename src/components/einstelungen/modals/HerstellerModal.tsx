import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { Hersteller } from "../../../features/hersteller_feature/type"
import styles from "../Einstelungen.module.css"
import HerstellerEditModal from "./HerstellerEditModal"
import { useAppSelector } from "../../../app/hooks"
import { selectProject } from "../../../features/projects/antragSlice"

interface HerstellerModalProps {
  open: boolean
  onClose: () => void
  hersteller: Hersteller
}

const HerstellerModal: React.FC<HerstellerModalProps> = ({
  open,
  onClose,
  hersteller,
}) => {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className={`${styles.modal}`}>
        <div className="container">
          <div className="m-2 mt-4 p-3 bg-light rounded-3 col-lg-6 mx-auto w-100">
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <strong>ID:</strong> {hersteller.herstellerId} <br />
              <hr />
              <strong>Hersteller:</strong> {hersteller.herstellerKurz} <br />
              <hr />
              <strong>Typ:</strong> {hersteller.herstellerTyp} <br />
              <hr />
              <strong>Status:</strong> {hersteller.herstellerStatus} <br />
              <hr />
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <strong>Notiz intern:</strong> {hersteller.herstellerNotizIntern}{" "}
              <br />
              <hr />
              <strong>Notiz Extern(Open):</strong> {hersteller.herstellerNotizExtern}{" "}
              <br />
              <hr />
            </Typography>
            <HerstellerEditModal/>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default HerstellerModal

/*<Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
<Typography id="modal-description" sx={{ mt: 2 }}>
          <strong>ID:</strong> {hersteller.herstellerId} <br />
          <strong>Kurz:</strong> {hersteller.herstellerKurz} <br />
          <strong>Typ:</strong> {hersteller.herstellerTyp} <br />
          <strong>Status:</strong> {hersteller.herstellerStatus} <br />
        </Typography>*/
