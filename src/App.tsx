import { FormGenerate } from "./components/Form/Form";

import "./css/App.css";

import { ImageContainerComponent } from "./Atoms/ImageContainerComponent/ImageContainerComponent";

export const App = (props: any) => {
  return (
    <section className="mx-auto">
      <FormGenerate />
      <ImageContainerComponent />
    </section>
  );
};
