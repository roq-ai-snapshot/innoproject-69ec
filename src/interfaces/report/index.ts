import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';

export interface ReportInterface {
  id?: string;
  name: string;
  content: string;
  creation_date: Date;
  project_id: string;
  creator_id: string;

  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {};
}
