import { useState, FC, useContext } from "react";

import { ImageContainerComponent } from "../../Atoms/ImageContainerComponent/ImageContainerComponent";
import { Formik, Form } from "formik";
import { InputText } from "../../Atoms/InputText/InputText";
import { useFetchAdapter } from "./../../hooks/useFetchAdapter/useFetchAdapter";
import { initialValues } from "./utils";
import { DataContext } from "../../Context/DataContext";

export const LexicaSearcher: FC = (props: any) => {
  const { setData, loading, setLoading } = useContext(DataContext);
  /*const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);*/

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
