import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { FormGenerate } from "./components/Form/Form";

import "./css/App.css";
import { DataInterface } from "./types/type";

import { ImageContainerComponent } from "./Atoms/ImageContainerComponent/ImageContainerComponent";
import { useView } from "./hooks/useView/useView";
import { useToggleList } from "./hooks/useToggleList/useToggleList";

const initialState = [{url: false}, {url: false}, {url: false}, {url: false}];

export const App = (props: any) => {
  const [imageUrl, setImageUrl] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [toggles, toggle] = useToggleList(imageUrl);

  useEffect(() => {});

  return (
    <section className="mx-auto">
      <FormGenerate
        setImageUrl={setImageUrl}
        loading={loading}
        setLoading={setLoading}
      />
      <ImageContainerComponent
        array={imageUrl}
        loading={loading}
        setArray={setImageUrl}
      />
    </section>
  );
};
