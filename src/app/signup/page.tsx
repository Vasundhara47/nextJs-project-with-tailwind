"use client"
import React from 'react'
import { TextField, Link } from '@mui/material'
import { signIn } from "next-auth/react";
import { useFormik } from 'formik';
import { SignupSchema } from '../Schemas/SignupSchema';
import { useRouter } from 'next/navigation';

const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function Page() {

    const router = useRouter();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: InitialValues,
        validationSchema: SignupSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
            setTimeout(() => {
                router.push('/')
            }, 500)
        }

    })

    return (
        <div className='flex items-center justify-center h-screen bg-sky-950 w-screen'>
            <div className='flex flex-col w-96 p-6 bg-white items-center rounded-xl gap-6 shadow-sm' >
                <h2 className='text-2xl font-medium'>Sign Up</h2>
                <form
                    className='flex flex-col gap-4'
                    onSubmit={handleSubmit}
                >
                    <TextField
                        type="text"
                        name="firstName"
                        label='First Name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        helperText={errors.firstName && touched.firstName ? errors.firstName : null}
                        error={Boolean(errors.firstName && touched.firstName)}
                        FormHelperTextProps={{
                            style: { color: 'red' },
                        }}
                    />
                    <TextField
                        type="text"
                        name="lastName"
                        label='Last Name'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.lastName && touched.lastName ? errors.lastName : null}
                        error={Boolean(errors.lastName && touched.lastName)}
                        FormHelperTextProps={{
                            style: { color: 'red' },
                        }}
                    />
                    <TextField
                        type="email"
                        name="email"
                        label='Email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.email && touched.email ? errors.email : null}
                        error={Boolean(errors.email && touched.email)}
                        FormHelperTextProps={{
                            style: { color: 'red' },
                        }}
                    />
                    <TextField
                        type="password"
                        name="password"
                        label='Password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.password && touched.password ? errors.password : null}
                        error={Boolean(errors.password && touched.password)}
                        FormHelperTextProps={{
                            style: { color: 'red' },
                        }}
                    />
                    <TextField
                        type="password"
                        name="confirmPassword"
                        label='Confirm Password'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                        error={Boolean(errors.confirmPassword && touched.confirmPassword)}
                        FormHelperTextProps={{
                            style: { color: 'red' },
                        }}
                    />
                    <button type='submit'
                        className='bg-sky-900 text-white p-2 rounded-lg hover:bg-sky-700'
                    >Sign Up</button>
                    <div className='flex gap-2 text-sm'>
                        <p className='text-sm'>Already have an account?</p>
                        <Link className='text-'
                            href="/login" >Login</Link>
                    </div>
                    <div className='flex  items-center justify-center gap-2 border border-gray-700 p-2 rounded-md' >
                        <img
                            className='h-4'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" />
                        <button
                            type='button'
                            onClick={() => signIn("google", { callbackUrl: '/' })}
                        > Sign In with google</button>
                    </div>
                    <div className='flex  items-center justify-center gap-2 border border-gray-700 p-2 rounded-md'>
                        <img
                            className='h-4'
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" />
                        <button
                            type='button'
                            onClick={() => signIn("facebook", { callbackUrl: '/' })}
                        > Sign In with facebook</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Page
