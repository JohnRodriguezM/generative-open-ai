import { useState, FC, useContext, useEffect } from "react";

import { ImageContainerComponent } from "../../Atoms/ImageContainerComponent/ImageContainerComponent";
import { Formik, Form } from "formik";
import { InputText } from "../../Atoms/InputText/InputText";
import { useFetchAdapter } from "./../../hooks/useFetchAdapter/useFetchAdapter";
import { initialValues } from "./utils";
import { DataContext } from "../../Context/DataContext";

export const LexicaSearcher: FC = (props: any) => {
  const { setData, loading, setLoading } = useContext(DataContext);

  const { handleGetImageLexica } = useFetchAdapter();

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
       setLoading(false);
        setData(data.results);
      });
  }, []);

  const decideClassName = !loading
    ? `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6`
    : `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6 opacity-50 cursor-not-allowed`;

  const handleSubmit = (e: any) => {
    if (e.image) {
      return handleGetImageLexica(
        `https://lexica.art/api/v1/search?q=${e.image || e.file}`,
        setLoading,
        setData
      );
    }
    return null;
  };

  return (
    <div>
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
                <InputText
                  label="PROMPT SEARCH IMAGE"
                  name="image"
                  key="image"
                  type="text"
                  value={values.image}
                  onChange={handleChange}
                />
                <button className={decideClassName} type="submit">
                  {loading ? "Loading..." : "Search"}
                </button>
              </Form>
            </>
          )}
        </Formik>
      </section>
      <ImageContainerComponent />
    </div>
  );
};
