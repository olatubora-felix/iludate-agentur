import React from 'react'
import { Input } from '@material-tailwind/react'

export const CustomInput = ({
  className,
  variant,
  type,
  name,
  placeholder,
  formik,
  error,
  text,
  label,
}) => {
  return (
    <div className="my-4 ">
      <Input
        className={`${className} text-xl`}
        variant={variant}
        type={type}
        name={name}
        {...formik.getFieldProps(text)}
        color="red"
        label={label}
        autoComplete="off"
      />
      {error && <p className="text-red-500 py-4">{error}</p>}
    </div>
  )
}
