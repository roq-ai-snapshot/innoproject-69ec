import { ReportInterface } from 'interfaces/report';
import { ResourceInterface } from 'interfaces/resource';
import { TaskInterface } from 'interfaces/task';
import { BusinessOrganizationInterface } from 'interfaces/business-organization';
import { UserInterface } from 'interfaces/user';

export interface ProjectInterface {
  id?: string;
  name: string;
  business_organization_id: string;
  project_manager_id: string;
  report?: ReportInterface[];
  resource?: ResourceInterface[];
  task?: TaskInterface[];
  business_organization?: BusinessOrganizationInterface;
  user?: UserInterface;
  _count?: {
    report?: number;
    resource?: number;
    task?: number;
  };
}
