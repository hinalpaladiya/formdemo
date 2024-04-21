import * as Yup from 'yup'
export const SignUpSchema = Yup.object({
    name: Yup.string().min(2).max(20).required('required'),
    email: Yup.string().email().required('email required'),
    password: Yup.string().min(6).max(10).required('password required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
})