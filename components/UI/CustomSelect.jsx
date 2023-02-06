import React from 'react'

export const CustomSelect = ({
  value,
  formik,
  options,
  text,
  className,
  name,
}) => {
  return (
    <select
      className={className}
      name={name}
      id={name}
      value={value}
      {...formik.getFieldProps(text)}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
