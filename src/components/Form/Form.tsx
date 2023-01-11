import React, { ChangeEvent, FormEvent, useState } from "react";

import { post } from "../../utils/Adapter/AxiosAdapter";

import { inputDesign, labelDesign, selectDesign } from "./styles";
import { FormProps } from "./type";

import { handleChange, handleSubmit, initialValues, options } from "./utils";

import { Formik, Form } from "formik";
import { InputText } from "../../Atoms/InputText/InputText";
import { useFetchAdapter } from "./../../hooks/useFetchAdapter/useFetchAdapter";
import { TextArea } from "../../Atoms/TextArea/TextArea";


export const FormGenerate = (props: any) => {
  const { setImageUrl, setLoading, loading } = props;

  const [form, setForm] = useState<FormProps>(initialValues);

  const handleChangeExe = (e: any) => handleChange(e, form, setForm);

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <Formik
      initialValues={initialValues}
      /*validate={validate}*/
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm({ values: initialValues });
      }}
      /*validationSchema={validationSchema}*/
    >
      {({ values, handleChange }) => (
        <>
          <Form noValidate>
            <TextArea
              label="PROMPT"
              name="image"
              key="image"
              type="text"
              /*icon={false}*/
              /*value={values.image}*/
              onChange={handleChange}
              /*maxW="400px"*/
            />
            <InputText
                  label="Size"
                  name="image"
                  key="image"
                  type="text"
                  /*icon={false}*/
                  /*value={values.image}*/
                  onChange={handleChange}
                  /*maxW="400px"*/
                />
            <button /*className={decideClassName}*/ type="submit">
              {loading ? "Loading..." : "Search"}
            </button>

            {/*<Button label="Crear residente" type="submit" />*/}
          </Form>
        </>
      )}
    </Formik>

    /* <form
      action=""
      className="w-4/5 max-w-lg mx-auto"
      onSubmit={(e: FormEvent) => {
        setLoading(true);
        handleSubmit(e, form, post, setImageUrl, setLoading);
      }}
    >
      <section className="flex flex-wrap -mx-3 mb-6  text-center">
        <section className="w-full px-3 mb-6 md:mb-0">
          <label className={labelDesign}>Prompt</label>
          <textarea
            required
            name="prompt"
            id=""
            onChange={handleChangeExe}
            className={inputDesign}
          />
          <label className={labelDesign}>Image size</label>
          <select
            required
            name="size"
            id=""
            onChange={handleChangeExe}
            className={selectDesign}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className={
              !loading
                ? `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6`
                : `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6 opacity-50 cursor-not-allowed`
            }
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </section>
      </section>
    </form>*/
  );
};
