import * as Yup from 'yup';

// This is the schema for handling errors and conditions to follow.

export const LoginSchema = Yup.object().shape({
    username: Yup.string().required('The username is required*'),
    password: Yup.string().required('Password is required*')
  })