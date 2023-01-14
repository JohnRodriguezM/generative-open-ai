import { useContext, useEffect } from "react";

import { FormGenerate } from "./components/Form/Form";

import "./css/App.css";

import { ImageContainerComponent } from "./Atoms/ImageContainerComponent/ImageContainerComponent";
import { DataContext } from "./Context/DataContext";

export const App = (props: any) => {
  const { setData, loading, setLoading } = useContext(DataContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?page=2`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setLoading(false);
        setData(data.results);
      });
  }, []);

  return (
    <section className="mx-auto">
      <FormGenerate />
      <ImageContainerComponent />
    </section>
  );
};
