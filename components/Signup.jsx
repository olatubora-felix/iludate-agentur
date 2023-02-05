import { register } from "@/utils/schema";
import { ShowToast } from "@/utils/tools";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      role: "client",
    },
    validationSchema: register,
    onSubmit: (values) => {
      console.log(values);
      ShowToast("SUCCESS", "Your registration is successful");
    },
  });

  return (
    <main className="w-full flex flex-col items-center justify-center mt-24">
      <h1 className="text-3xl">Iludate &mdash; Agentur</h1>
      <div>
        <p>Register</p>
        <p>Welcome to Illudate Agentur</p>
        <div>
          <label>Regsiter as</label>
          <div>
            <Button>{formik.values.role}</Button>
            <select
              name="role"
              id=""
              value={formik.values.role}
              {...formik.getFieldProps("role")}
            >
              <option value="model">Model</option>
              <option value="client">Client</option>
              <option value="hostess">Hostess</option>
            </select>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input type="file" />
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="email address"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirm email address"
              {...formik.getFieldProps("confirmEmail")}
            />
            {formik.touched.confirmEmail && formik.errors.confirmEmail && (
              <div className="text-red-500">{formik.errors.confirmEmail}</div>
            )}
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <Button type="submit">Log in</Button>
        </form>
        <div className="my-4 before:border-t flex before:flex-1 items-center before:border-[#aaa] after:border-t after:flex-1  after:border-[#aaa]">
          <p className="text-center font-semibold mx-4">or</p>
        </div>
        <Button>Register now</Button>
      </div>
    </main>
  );
};
