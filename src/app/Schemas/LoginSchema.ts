import * as Yup from 'yup'

export const LoginSchema = Yup.object({
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(6).required("password is required")
})