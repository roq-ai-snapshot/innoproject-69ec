import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  deadline: Date;
  project_id: string;
  assignee_id: string;

  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {};
}
