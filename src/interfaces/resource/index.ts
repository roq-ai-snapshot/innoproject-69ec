import { ProjectInterface } from 'interfaces/project';

export interface ResourceInterface {
  id?: string;
  name: string;
  type: string;
  quantity: number;
  project_id: string;

  project?: ProjectInterface;
  _count?: {};
}
