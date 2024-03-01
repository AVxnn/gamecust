import React, { useContext } from "react";
import styles from "./registrationForm.module.scss";
import InputCustom from "../../legendary/common/PostPreview/common/InputCustom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Context } from "../../../app/(pages)/layout";

const RegistrationForm = () => {
  const { mobxStore, popupHandlers } = useContext(Context);

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Минимум 3 символа.")
      .required("Требуется имя или название"),
    email: yup
      .string()
      .email("Введите действительный адрес электронной почты")
      .required("Требуется электронная почта"),
    password: yup
      .string()
      .min(6, "Длина пароля должна быть минимум 6 символов.")
      .required("Необходим пароль"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mobxStore.registration(values.name, values.email, values.password);
      popupHandlers.authPopupClose();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <InputCustom
          id="name"
          name="name"
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          onChange={formik.handleChange}
          type={"text"}
          placeholder={"Имя или название"}
        />
        <InputCustom
          id="email"
          name="email"
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onChange={formik.handleChange}
          type={"email"}
          placeholder={"Email"}
        />
        <InputCustom
          id="password"
          name="password"
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          onChange={formik.handleChange}
          type={"password"}
          placeholder={"Password"}
        />
        <button className={styles.button}>Зарегистрироваться</button>
      </form>
    </>
  );
};

export default RegistrationForm;
