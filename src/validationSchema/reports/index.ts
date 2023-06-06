import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  creation_date: yup.date().required(),
  project_id: yup.string().nullable().required(),
  creator_id: yup.string().nullable().required(),
});
