import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Form } from "./components/Form/Form";
import { ImageComponent } from "./components/ImageComponent/Image";

import "./css/App.css";
import { DataInterface } from "./types/type";

export const App = (props: any) => {
  const [imageUrl, setImageUrl] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section className="mx-auto">
      <Outlet/>
      <Form
        setImageUrl={setImageUrl}
        loading={loading}
        setLoading={setLoading}
      />
      <ImageComponent imageUrl={imageUrl} loading={loading} />
    </section>
  );
};
