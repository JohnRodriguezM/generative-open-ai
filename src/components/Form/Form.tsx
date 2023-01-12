import { FC, useContext } from "react";

import { initialValues, options, url } from "./utils";

import { Formik, Form } from "formik";

import { useFetchAdapter } from "./../../hooks/useFetchAdapter/useFetchAdapter";
import { TextArea } from "../../Atoms/TextArea/TextArea";
import { SelectAtom } from "./../../Atoms/Select/Select";
import { DataContext } from "../../Context/DataContext";

export const FormGenerate = (props: any) => {
  /*const { setImageUrl, setLoading, loading } = props;*/
  const { handlePostImageOpenAI } = useFetchAdapter();

  const { setData , setLoading, loading }  = useContext(DataContext)



  const decideClassName = !loading
    ? `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6`
    : `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6 opacity-50 cursor-not-allowed`;

  const handleSubmit = (values: any) => {
    values.prompt
      ? handlePostImageOpenAI(url, values, setLoading, setData)
      : null;
  };

  return (
    <section className="w-4/5 max-w-lg mx-auto text-center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm({ values: initialValues });
        }}
      >
        {({ values, handleChange }) => (
          <>
            <Form noValidate>
              <TextArea
                label="PROMPT"
                name="prompt"
                key="prompt"
                type="text"
                value={values.prompt}
                onChange={handleChange}
              />
              <SelectAtom
                label="Select size"
                name="size"
                key="size"
                value={values.size}
                onChange={handleChange}
                options={options}
              />

              <button className={decideClassName} type="submit">
                {loading ? "Loading..." : "Search"}
              </button>
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};
