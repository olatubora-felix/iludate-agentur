import { login } from "@/utils/schema";
import { ShowToast } from "@/utils/tools";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";

export const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: login,
    onSubmit: (values) => {
      console.log(values);
      ShowToast("SUCCESS", "Login successfully");
    },
  });
  return (
    <main className="w-full flex flex-col items-center justify-center mt-24">
      <h1 className="text-3xl">Iludate &mdash; Agentur</h1>
      <div>
        <p>Log in</p>
        <p>Welcome to Illudate Agentur</p>
        <form onSubmit={formik.handleSubmit}>
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
