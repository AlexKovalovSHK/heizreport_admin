import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"
import {
  FormControlLabel,
  IconButton,
  Switch,
  TextareaAutosize,
  TextField,
} from "@mui/material"

const HerstellerEditModal = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [hersteller, setHersteller] = useState("")
  const [typ, setTyp] = useState("")
  const [status, setStatus] = useState("")
  const [noteClose, setNoteClose] = useState("")
  const [noteOpen, setNoteOpen] = useState("")

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className="m-4">
      <Button onClick={handleOpen} variant="outlined" size="small">
        Korrigieren
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="container mt-5">
          <div className="col-lg-6 bg-light mx-auto">
            <Box className="p-3">
              <div className="d-flex justify-content-between p-2 mb-2">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Korrigieren
                </Typography>
                <IconButton onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </div>
              <div className="overflow-auto">
                <input
                  type="text"
                  className="form-control w-100 mb-3"
                  placeholder="Hersteller"
                  value={hersteller}
                  onChange={e => setHersteller(e.target.value.trim())}
                />
                <input
                  type="text"
                  className="form-control w-100 mb-3"
                  placeholder="Typ"
                  value={typ}
                  onChange={e => setTyp(e.target.value.trim())}
                />
                
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">sichtbar</label>
                </div>

                <textarea
                  className="form-control mb-3"
                  placeholder="Notiz intern"
                  value={noteClose}
                  onChange={e => setNoteClose(e.target.value)}
                  rows={3}
                />

                <textarea
                  className="form-control mb-3"
                  placeholder="Notiz extern(Open)"
                  value={noteOpen}
                  onChange={e => setNoteOpen(e.target.value)}
                  rows={3}
                />

                <div></div>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  className=" mt-3 me-2"
                >
                  Speichern
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  className=" mt-3"
                >
                  Close
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default HerstellerEditModal
