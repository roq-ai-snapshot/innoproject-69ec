import * as yup from 'yup';

export const resourceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  quantity: yup.number().integer().required(),
  project_id: yup.string().nullable().required(),
});
