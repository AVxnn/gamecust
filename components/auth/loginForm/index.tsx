import React, { useContext } from "react";
import styles from "./loginForm.module.scss";
import InputCustom from "../../legendary/common/PostPreview/common/InputCustom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Context } from "../../../app/(pages)/layout";

const LoginForm = () => {
  const { mobxStore, popupHandlers, notificationStore } = useContext(Context);
  const validationSchema = yup.object({
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
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = await mobxStore.login(values.email, values.password);
      if (data?.errors === "Пользователь с таким Email не найден") {
        notificationStore.addItem({
          title: "Пользователь не найден",
          status: "error",
          timeLife: 2500,
        });
        return;
      }
      notificationStore.addItem({
        title: "Вы успешно вошли в аккаунт!",
        status: "success",
        timeLife: 2500,
      });
      popupHandlers.authPopupClose();
    },
  });

  return (
    <>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
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
        <button className={styles.button}>Войти</button>
      </form>
    </>
  );
};

export default LoginForm;
