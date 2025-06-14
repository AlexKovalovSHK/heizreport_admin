import { ProjectRespDto } from "../type"

export interface ProjectModalProps {
  open: boolean
  onClose: () => void
  project?: ProjectRespDto
  projectId?: number
}
