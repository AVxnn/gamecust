import React from 'react'
import styles from "./emailForm.module.scss"
import InputCustom from '../../legendary/common/PostPreview/common/InputCustom'
import * as yup from "yup";
import { useFormik } from "formik";

const LoginForm = () => {

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Введите действительный адрес электронной почты")
      .required("Требуется электронная почта"),
    password: yup
      .string()
      .min(8, "Длина пароля должна быть минимум 8 символов.")
      .required("Необходим пароль"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <InputCustom id="email" name="email" value={formik.values.email} error={formik.touched.email && Boolean(formik.errors.email)} onChange={formik.handleChange} type={'email'} placeholder={'Email'}/>
        <InputCustom id="password" name="password" value={formik.values.password} error={formik.touched.password && Boolean(formik.errors.password)} onChange={formik.handleChange} type={'password'} placeholder={'Password'}/>
      </form>
    </>
  )
}

export default LoginForm