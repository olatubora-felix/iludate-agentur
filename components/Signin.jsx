import { login } from "@/utils/schema";
import { ShowToast } from "@/utils/tools";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import Link from "next/link";
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
      <h1 className="text-2xl text-red-900 uppercase font-serif font-bold">
        Iludate &mdash; Agentur
      </h1>
      <div>
        <p className="text-yellow-600 font-serif uppercase text-center pt-[3rem]">
          Log in
        </p>
        <p className="text-gray-500 text-sm text-center border border-white border-b-gray-400 pb-[2rem] font-sans">
          Welcome to Illudate Agentur
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              className="pt-1 pb-1"
              variant="standard"
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
            <Input
              className="pt-1 pb-1"
              variant="standard"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <span className="flex justify-end text-[0.5rem] font-sans text-gray-500 mt-2">
            forgot password
          </span>
          <Button
            fullWidth
            className="bg-red-900 rounded-full pt-1 pb-1 mt-[2rem] normal-case hover:shadow-none shadow-none"
            type="submit"
          >
            Log in
          </Button>
        </form>
        <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-400 after:border-t after:flex-1  after:border-gray-400">
          <p className="text-center text-sm font-normal mx-4 text-gray-500">
            or
          </p>
        </div>
        <Link href="/register">
          <Button
            fullWidth
            variant="outlined"
            className="rounded-full border-red-900 text-red-900 normal-case font-light pt-1 pb-1 mb-[2rem] hover:shadow-none shadow-none"
          >
            Register now
          </Button>
        </Link>
      </div>
    </main>
  );
};
