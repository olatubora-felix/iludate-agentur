import { register } from "@/utils/schema";
import { ShowToast } from "@/utils/tools";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
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

  console.log(formik.values.role);
  return (
    <main className="w-full flex flex-col items-center justify-center mt-12">
      <h1 className="text-2xl text-red-900 uppercase font-serif font-bold">
        Iludate &mdash; Agentur
      </h1>
      <div>
        <p className="text-yellow-600 font-serif uppercase text-center pt-[2rem]">
          Register
        </p>
        <p className="text-gray-500 text-sm text-center pb-[2rem] font-sans">
          Welcome to Illudate Agentur
        </p>
        <div>
          <label className="text-gray-500 text-sm flex justify-center pb-3 font-sans">
            Regsiter as:
          </label>
          <div className="flex flex-auto items-center justify-center gap-2">
            <Button className="bg-red-900 hover:shadow-none shadow-none rounded-full py-1 capitalize font-normal">
              {formik.values.role}
            </Button>
            <select
              className="border border-red-900 rounded-full text-red-900 text-sm py-1 px-2 focus:outline-none active::border-none"
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
          <div className="mt-6">
            <Input
              variant="standard"
              type="text"
              name="name"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>
          <div className="">
            <Input
              variant="standard"
              type="email"
              name="email"
              placeholder="Email address"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="">
            <Input
              variant="standard"
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
            <Input
              variant="standard"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
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
          <div className="mt-2">
            <label className="text-[0.5rem] text-red-900">
              If you got an invitation, please fill in now
            </label>
            <Input
              className=""
              variant="standard"
              type="text"
              name="invitationnCode"
              placeholder="Invitation code"
            />
          </div>

          {formik.values.role === "model" && (
            <div>
              <Checkbox />I know about
              <Link href="/terms">books on date law</Link>
            </div>
          )}
          {formik.values.role === "model" && (
            <div>
              <Checkbox />I accept <Link href="/terms">general conditions</Link>
            </div>
          )}

          <Button
            fullWidth
            className="bg-red-900 rounded-full pt-1 pb-1 mt-2 mb-[2rem] normal-case hover:shadow-none shadow-none"
            type="submit"
          >
            Register now
          </Button>
        </form>
      </div>
    </main>
  );
};
