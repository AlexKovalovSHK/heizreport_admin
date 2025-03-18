import React from "react"
import { ProjectRespDto } from "../../../features/projects/type"
import { Box, Button, Modal, Typography } from "@mui/material"
import styles from "../foerderung.module.css"
import { useAppSelector } from "../../../app/hooks"
import { selectProject } from "../../../features/projects/projectSlice"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import RedoIcon from "@mui/icons-material/Redo"
import { selectAntrag } from "../../../features/foerderung/foerderungSlice"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper"

interface ProjectModalProps {
  open: boolean
  onClose: () => void
  project: ProjectRespDto
}

const HeizreportProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
}) => {
  const project = useAppSelector(selectProject)
  const antrag = useAppSelector(selectAntrag)

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        className={`${styles.modal}`}
        sx={{
          maxHeight: "90vh", // Ограничиваем высоту модального окна
          overflowY: "auto", // Включаем вертикальную прокрутку
          p: 3, // Отступы внутри модального окна
        }}
      >
        <div className="container">
          <div className="m-2 mt-4 p-3 bg-light rounded-3 col-lg-6 mx-auto w-100">
            <header>
              <Typography
                variant="h5"
                gutterBottom
              >{`Förderantrag 2768 (ProjektID: ${project.projektId}) (UserID: ${project.projektOwner} )`}</Typography>
            </header>
            <div className="d-flex flex-row align-items-center border border-secondary rounded p-3 mb-3">
              <SupportAgentIcon sx={{ fontSize: "56px", color: "#0074D9" }} />
              <Typography variant="h6" gutterBottom>
                {antrag.adminUserName}
              </Typography>
              <RedoIcon sx={{ color: "#0074D9" }} />
            </div>
            <div className="p-3">
              <div className="row border border-secondary rounded p-3">
                <div className=" col-lg-3">
                  <div className="border border-secondary rounded p-2">
                    <Button variant="contained" className="w-100 mb-2">
                      Contained
                    </Button>
                    <Button variant="contained" className="w-100 mb-2">
                      Contained
                    </Button>
                    <Button variant="contained" className="w-100 mb-2">
                      Contained
                    </Button>
                    <Button variant="contained" className="w-100 mb-2">
                      Contained
                    </Button>
                    <Button variant="contained" className="w-100 mb-2">
                      Contained
                    </Button>
                  </div>
                  <div className="mt-3">
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">1.Start</p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">2. Fachpartner</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">3. Antragsteller</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">4. Immobilie</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">5. Heizung</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">6. Bonus</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">7. Vertrag</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between p-2">
                      <p className="mb-0 text-primary">8. Förderantrag</p>
                      <DoneAllIcon sx={{ color: "#0074D9" }} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-9">
                  <HorizontalNonLinearStepper />
                </div>

                
              </div>
            </div>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <strong>ID:</strong> {project.projektId} <br />
              <strong>Hersteller:</strong> {project.projektOrtAnschrift} <br />
            </Typography>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default HeizreportProjectModal
