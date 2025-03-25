import styles from "../foerderung/foerderung.module.css"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import RedoIcon from "@mui/icons-material/Redo"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DoneAllIcon from "@mui/icons-material/DoneAll"
import { ProjectModalProps } from "../../features/projects/utils/type.modal"
import { useAppSelector } from "../../app/hooks"
import CloseIcon from "@mui/icons-material/Close"
import { Box, Button, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ProjectSmallTabs from "./ProjectSmallTabs"
import { selectProject } from "../../features/projects/projectSlice"

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
}) => {
  const project = useAppSelector(selectProject)

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
          maxHeight: "90vh",
          overflowY: "auto",
          p: 3,
        }}
      >
        <div className="container">
          <div className="m-2 mt-4 p-3 bg-light rounded-3 col-lg-6 mx-auto w-100">
            <header className="d-flex justify-content-between">
              <Typography variant="h5" gutterBottom>
                {`Project ID: ${project.projektId}`}
              </Typography>
              <CloseIcon
                className={`${styles.cursor_pointer}`}
                onClick={onClose}
              />
            </header>
            <div className="row p-3 mb-3">
              <hr />
              <div className="col-lg-6 p-3">
                <div className="border border-secondary rounded p-3">
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "red" }}
                    >
                      öffnen
                    </Button>
                    <Button variant="outlined" size="small">
                      Projekt teilen
                    </Button>
                    <Button variant="outlined" size="small">
                      DSGVO Export
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "red" }}
                    >
                      löschen
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p>
                      <b>Email: </b>
                      {project.email}
                    </p>
                    <p>
                      <b>Link: </b>
                      <a
                        href={`https://heiz.report/report/?p=${project.projektKey}`}
                      >
                        https://heiz.report/report/?p={project.projektKey}
                      </a>
                    </p>
                    <p>
                      <b>Key: </b>
                      {project.projektKey}
                    </p>
                    <p>
                      Projekt zugehörig zu Business Account:{" "}
                      {project.projektAccount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-3">
                <div className="border border-secondary rounded p-3">
                    <ProjectSmallTabs/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default ProjectModal
