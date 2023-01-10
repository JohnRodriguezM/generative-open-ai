import React, { useEffect, useState } from "react";
import { MyComponentSkeleton } from "../../Atoms/Skeleton/Skeleton";
import {
  ContainerDownload,
  DivImage,
  ImageContainer,
  ImageStyled,
} from "./styled";

import DownloadIcon from "@mui/icons-material/Download";
import { handleDownload } from "../../utils/Functions/Functions";
import { ImageContainerComponent } from "../../Atoms/ImageContainerComponent/ImageContainerComponent";

import { Formik, Form } from "formik";
import { InputText } from "../../Atoms/InputText/InputText";

const initialValues = {
  image: "",
};

export const LexicaSearcher = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);

  const handleSubmit = (e: any) => {
    setLoading(true)
    fetch(`https://lexica.art/api/v1/search?q=${e.image}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data.images);
        setData(data.images);
      }).catch((err) => {
        console.log(err)
        setLoading(false);
      })
      ;
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
          {({values, handleChange}) => (
            <>
              <Form noValidate>
                <InputText
                  label="Correo electrónico"
                  name="image"
                  key="image"
                  type="text"
                  /*icon={false}*/
                  value={values.image}
                  onChange={handleChange}
                  maxW="400px"
                />
                <button
                  className={
                    !loading
                      ? `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6`
                      : `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6 opacity-50 cursor-not-allowed`
                  }
                  type="submit"
                >
                  Search
                </button>

                {/*<Button label="Crear residente" type="submit" />*/}
              </Form>
            </>
          )}
        </Formik>
      </section>
      {/*<form
        action=""
        onSubmit={handleSubmit}
        className="w-4/5 max-w-lg mx-auto text-center"
      >
        <label
          htmlFor="name"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
        >
          PROMPT SEARCH IMAGE
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={handleChange}
          type="text"
          name="image"
          id="image"
        />
        <button
          className={
            !loading
              ? `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6`
              : `bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6 w-5/6 opacity-50 cursor-not-allowed`
          }
          type="submit"
        >
          Search
        </button>
      </form>*/}

      <ImageContainerComponent array={data} loading={loading} />
    </div>
  );
};
