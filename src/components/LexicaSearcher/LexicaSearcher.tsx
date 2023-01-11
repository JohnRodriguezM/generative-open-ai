import React, { useState } from "react";

import { ImageContainerComponent } from "../../Atoms/ImageContainerComponent/ImageContainerComponent";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { InputText } from "../../Atoms/InputText/InputText";
import { useFetchAdapter } from "./../../hooks/useFetchAdapter/useFetchAdapter";

const initialValues = {
  image: "",
};

const requiredFields: { [key: string]: any } = {};
const validationSchema = Yup.object({ ...requiredFields });

export const LexicaSearcher = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const { handleGetImageLexica } = useFetchAdapter();

  const decideClassName = !loading
    ? `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6`
    : `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6 opacity-50 cursor-not-allowed`;

  const handleSubmit = (e: any) => {
    console.log("hi");
    e.image
      ? handleGetImageLexica(
          `https://lexica.art/api/v1/search?q=${e.image}`,
          setLoading,
          setData
        )
      : null;
  };

  const validate = (values: any) => {
    let errors: any = {};
    if (!values.image) errors.image = "Llena el campo ";
    return errors;
  };

  return (
    <div>
      <section className="w-4/5 max-w-lg mx-auto text-center">
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
                <InputText
                  label="PROMPT SEARCH IMAGE"
                  name="image"
                  key="image"
                  type="text"
                  /*icon={false}*/
                  value={values.image}
                  onChange={handleChange}
                  /*maxW="400px"*/
                />
                <button className={decideClassName} type="submit">
                  {loading ? "Loading..." : "Search"}
                </button>

                {/*<Button label="Crear residente" type="submit" />*/}
              </Form>
            </>
          )}
        </Formik>
      </section>

      <ImageContainerComponent
        array={data}
        loading={loading}
        setArray={setData}
      />
    </div>
  );
};
