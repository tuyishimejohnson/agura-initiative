import * as Yup from 'yup';

// This is the schema for handling errors and conditions to follow.


export const SignUpSchema = Yup.object().shape({
    username: Yup.string().min(6, "Username must be at least 6 characters").required("Username is required*"),
    email: Yup.string().email("Enter a valid email").required("Email is required*"),
    password: Yup.string().min(5, "Password must be an alphanumeric (5-10) characters").max(10, "Password must not exceed 10 characters").required("Password is required*"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password must match").required("Confirm password is required*")
})