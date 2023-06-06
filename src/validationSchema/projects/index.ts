import * as yup from 'yup';
import { reportValidationSchema } from 'validationSchema/reports';
import { resourceValidationSchema } from 'validationSchema/resources';
import { taskValidationSchema } from 'validationSchema/tasks';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  business_organization_id: yup.string().nullable().required(),
  project_manager_id: yup.string().nullable().required(),
  report: yup.array().of(reportValidationSchema),
  resource: yup.array().of(resourceValidationSchema),
  task: yup.array().of(taskValidationSchema),
});
