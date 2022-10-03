import React from "react";
import s from "./Login.module.css";
import { Formik } from "formik";
import * as yup from "yup";
const LoginForm = () => {
  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно для заполнения"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно для заполнения"),
    confirmPasword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают!")
      .required("Обязательно для заполнения"),
  });

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        confirmPasword: "",
        isRemember: false,
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => {
        return (
          <div className={s.formContaner}>
            <div>
              <div>
                <input
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  className={s.box}
                  placeholder="Login"
                />
              </div>
              {touched.login && errors.login && (
                <span className={s.error}>{errors.login}</span>
              )}
            </div>

            <div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={s.box}
                  placeholder="Password"
                />
              </div>
              {touched.password && errors.password && (
                <span className={s.error}>{errors.password}</span>
              )}
            </div>

            <div>
              <div>
                <input
                  type="password"
                  name="confirmPasword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPasword}
                  className={s.box}
                  placeholder="Confirm Pasword"
                />
              </div>
              {touched.confirmPasword && errors.confirmPasword && (
                <span className={s.error}>{errors.confirmPasword}</span>
              )}
            </div>

            <div className={s.checkCont}>
              <div>
                <input
                  className={s.checkbox}
                  type={"checkbox"}
                  name="isRemember"
                  onChange={handleChange}
                />
                Remember me
              </div>
            </div>

            <button
              disabled={!isValid && !dirty}
              type="submit"
              onClick={handleSubmit}
              className={s.button}
            >
              Log In
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

export const Login = (props) => {
  return (
    <div className={s.contaner}>
      <div className={s.loginContaner}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};
