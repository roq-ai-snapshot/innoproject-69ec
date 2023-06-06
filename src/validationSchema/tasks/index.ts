import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  deadline: yup.date().required(),
  project_id: yup.string().nullable().required(),
  assignee_id: yup.string().nullable().required(),
});
