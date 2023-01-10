import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Form } from "./components/Form/Form";

import "./css/App.css";
import { DataInterface } from "./types/type";

import { ImageContainerComponent } from "./Atoms/ImageContainerComponent/ImageContainerComponent";

export const App = (props: any) => {
  const [imageUrl, setImageUrl] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <section className="mx-auto">
      <Form
        setImageUrl={setImageUrl}
        loading={loading}
        setLoading={setLoading}
      />
      <ImageContainerComponent array={imageUrl} loading={loading} 
      />
    </section>
  );
};
