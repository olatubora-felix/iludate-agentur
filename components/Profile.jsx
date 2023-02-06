import { createProfile } from "@/utils/schema";
import { ShowToast } from "@/utils/tools";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";

export const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      images: [],
      age: "",
      gender: "",
      nationality: "",
      height: "",
      weight: "",
      hairColor: "",
      country: "",
      city: "",
      sport: "",
      languages: "",
      smoker: "",
      profession: "",
      hobbies: "",
      covid: "",
      hashtag: "",
      message: "",
      birthday: "",
    },
    validationSchema: createProfile,
    onSubmit: (values) => {
      console.log(values);
      onFormSubmit(values);
      //   ShowToast("SUCCESS", "Login successfully");
    },
  });

  const handlePicValue = (e) => {
    const picArr = [];
    picArr.push(e.target.files);

    formik.setFieldValue("images", ...picArr);

    // console.log(formik.values.images);
  };

  const onFormSubmit = (values) => {
    console.log(values, "form");
  };
  return (
    <main className="w-full flex flex-col items-center justify-center mt-12">
      <h2 className="text-2xl text-red-900 uppercase font-serif font-bold">
        Iludate &mdash; Agentur
      </h2>
      <div>
        <h1 className="text-yellow-600 font-serif uppercase text-center pt-[2rem]">
          Create Profile
        </h1>
        <p className="text-gray-500 text-sm text-center pb-[2rem] font-sans">
          Welcome to Illudate Agentur
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-6 flex flex-col justify-center items-center">
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center bg-gray-300 h-[10rem] w-[14rem] cursor-pointer"
            >
              <FiCamera className="text-2xl text-blue-gray-200" />
              <span className="text-center">
                Drop your images here or{" "}
                <strong className="text-red-900">browse</strong>
              </span>
              <input
                type="file"
                id="images"
                onChange={handlePicValue}
                accept=".jpg.png,.jpeg"
                multiple
                className="hidden"
                name="images"
              />
              {formik.errors.images && formik.touched.images && (
                <div className="text-red-500">{formik.errors.images}</div>
              )}
            </label>
            <span className="text-gray-500 text-xs font-sans mt-2">
              Please upload at least 4 photos
            </span>
            <span className="text-gray-500 text-xs font-sans">
              max 8 photos
            </span>
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Firstname"
              type="text"
              name="firstname"
              {...formik.getFieldProps("firstname")}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <div className="text-red-500">{formik.errors.firstname}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Lastname"
              type="text"
              name="lastname"
              {...formik.getFieldProps("lastname")}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <div className="text-red-500">{formik.errors.lastname}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Age"
              type="text"
              name="age"
              {...formik.getFieldProps("age")}
            />
            {formik.touched.age && formik.errors.age && (
              <div className="text-red-500">{formik.errors.age}</div>
            )}
          </div>

          <div>
            <Input
              type="date"
              variant="standard"
              placeholder="Birthday"
              name="birthday"
              {...formik.getFieldProps("birthday")}
            />
            {formik.touched.birthday && formik.errors.birthday && (
              <div className="text-red-500">{formik.errors.birthday}</div>
            )}
          </div>
          <div className="mt-2">
            <Select
              name="gender"
              id=""
              variant="standard"
              label="Gender"
              value={formik.values.gender}
              {...formik.getFieldProps("gender")}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="queer">Queer</Option>
              <Option value="trans">Trans</Option>
            </Select>
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Nationality"
              type="text"
              name="nationality"
              {...formik.getFieldProps("nationality")}
            />
            {formik.touched.nationality && formik.errors.nationality && (
              <div className="text-red-500">{formik.errors.nationality}</div>
            )}
          </div>

          <div>
            <Input
              variant="standard"
              placeholder="Height"
              type="text"
              name="height"
              {...formik.getFieldProps("height")}
            />
            {formik.touched.height && formik.errors.height && (
              <div className="text-red-500">{formik.errors.height}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Weight"
              type="text"
              name="weight"
              {...formik.getFieldProps("weight")}
            />
            {formik.touched.weight && formik.errors.weight && (
              <div className="text-red-500">{formik.errors.weight}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="HairColor"
              type="text"
              name="hairColor"
              {...formik.getFieldProps("hairColor")}
            />
            {formik.touched.hairColor && formik.errors.hairColor && (
              <div className="text-red-500">{formik.errors.hairColor}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Country"
              type="text"
              name="country"
              {...formik.getFieldProps("country")}
            />
            {formik.touched.country && formik.errors.country && (
              <div className="text-red-500">{formik.errors.country}</div>
            )}
          </div>

          <div>
            <Input
              variant="standard"
              placeholder="City"
              type="text"
              name="city"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-500">{formik.errors.city}</div>
            )}
          </div>

          <div>
            <Input
              variant="standard"
              placeholder="Languages"
              type="text"
              name="languages"
              {...formik.getFieldProps("languages")}
            />
            {formik.touched.languages && formik.errors.languages && (
              <div className="text-red-500">{formik.errors.languages}</div>
            )}
          </div>

          <div>
            <Input
              variant="standard"
              placeholder="Smoker"
              type="text"
              name="smoker"
              {...formik.getFieldProps("smoker")}
            />
            {formik.touched.smoker && formik.errors.smoker && (
              <div className="text-red-500">{formik.errors.smoker}</div>
            )}
          </div>

          <div>
            <Input
              variant="standard"
              placeholder="Profession"
              type="text"
              name="profession"
              {...formik.getFieldProps("profession")}
            />
            {formik.touched.profession && formik.errors.profession && (
              <div className="text-red-500">{formik.errors.profession}</div>
            )}
          </div>
          <div>
            <Input
              variant="standard"
              placeholder="Hobbies"
              type="text"
              name="hobbies"
              {...formik.getFieldProps("hobbies")}
            />
            {formik.touched.hobbies && formik.errors.hobbies && (
              <div className="text-red-500">{formik.errors.hobbies}</div>
            )}
          </div>

          <div>
            <Input
              variant="standard"
              placeholder="Hashtag"
              type="text"
              name="hashtag"
              {...formik.getFieldProps("hashtag")}
            />
            {formik.touched.hashtag && formik.errors.hashtag && (
              <div className="text-red-500">{formik.errors.hashtag}</div>
            )}
          </div>

          <div className="mt-2">
            <Select
              variant="standard"
              id=""
              name="covid"
              label="Covid"
              value={formik.values.covid}
              {...formik.getFieldProps("covid")}
            >
              <Option value="vaccinated">Vaccinated</Option>
              <Option value="notVaccinated">Not Vaccinated</Option>
            </Select>
          </div>

          <div className="mt-3">
            <Textarea
              variant="outlined"
              placeholder="My Experiences"
              type="text"
              name="message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}
          </div>

          <div className="my-4 flex flex-1-auto gap-2">
            <Button
              type="submit"
              className="bg-red-900 rounded-full pt-1 pb-1 normal-case hover:shadow-none shadow-none"
            >
              Send for verifications
            </Button>
            <Button
              type="button"
              variant="outlined"
              className="rounded-full border-red-900 text-red-900 normal-case font-light pt-1 pb-1 hover:shadow-none shadow-none"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
