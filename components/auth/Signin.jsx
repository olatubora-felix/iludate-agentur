import { login } from '@/utils/schema'
import { ShowToast } from '@/utils/tools'
import { Input } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import { useFormik } from 'formik'
import Link from 'next/link'
import router from 'next/router'
import React, { Fragment, useState } from 'react'
import CustomButton from '../UI/CustomButton'
import { CustomInput } from '../UI/CustomInput'
import { CustomForm } from '../UI/CustomForm'
import { Hr } from './Hr'
import Router from 'next/router'

export const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: login,
    onSubmit: (values) => {
      if (values !== '') {
        Router.push('/create-profile')
      }
      ShowToast('SUCCESS', 'Login successfully')
    },
  })
  return (
    <Fragment>
      <CustomForm onSubmit={formik.handleSubmit} className="">
        <CustomInput
          className={'pt-1 pb-1 w-full'}
          variant="standard"
          name="email"
          formik={formik}
          error={formik.errors.email}
          text={'email'}
          label="Email"
          blur={formik.touched.email}
        />

        <CustomInput
          className={'pt-1 pb-1 w-full'}
          variant="standard"
          name="password"
          placeholder="Password"
          formik={formik}
          error={formik.errors.password}
          blur={formik.touched.password}
          text={'password'}
          label="Password"
        />

        <Link
          href={'#'}
          className="flex justify-end  font-medium text-lg text-gray-500 mt-2"
        >
          Forgot Password
        </Link>
        <CustomButton text="Login" className="bg-primary my-4" type="submit" />
      </CustomForm>
      <Hr text="Or" />
      <CustomButton
        text="Register now"
        className="text-primary my-4 border-primary"
        variant={'outlined'}
        onClick={() => router.push('/register')}
        type="button"
      />
    </Fragment>
  )
}
