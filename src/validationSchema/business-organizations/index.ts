import * as yup from 'yup';
import { projectValidationSchema } from 'validationSchema/projects';

export const businessOrganizationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  project: yup.array().of(projectValidationSchema),
});
