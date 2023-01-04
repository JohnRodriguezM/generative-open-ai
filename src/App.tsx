import { useState } from 'react';

import { Form } from './components/Form/Form';
import { Image } from './components/ImageComponent/Image';

import './css/App.css';

export const App = () => {
  const [imageUrl, setImageUrl] = useState([])

  return (
    <section className="mx-auto">
      <Form
        setImageUrl={setImageUrl}
      />
      <Image
        imageUrl={imageUrl}
      />
    </section>
  );
}
