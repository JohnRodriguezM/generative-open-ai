import React from "react";
import Iframe from "react-iframe";
export const Instructions = (): any => {
  return (
    <section className="mt-11 text-justify">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-9 ">
        How to use Open AI DALL-E 2?
      </h2>
      <section className="flex flex-col items-center justify-center">
        <Iframe
          styles={{
            padding: "15px",
            "border-radius": "20px",
            "box-shadow": "0 0 10px 0 rgba(0, 0, 0, 10)",
          }}
          className="w-11/12  md:w-3/6 h-80 max-w-5xl"
          url="https://www.youtube.com/embed/qTgPSKKjfVg"
          title="DALL·E 2 Explained"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></Iframe>
      </section>

      <p className="w-5/6 mx-auto mt-10 mb-11">
        <em>
          {" "}
          La programación de DALL-E 2 ya no está basada en el
          <a
            className="text-blue-500 mr-2"
            href="https://openai.com/api/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GPT-3
          </a>
        </em>
        como en su anterior versión, lo que permite que no tenga que estar
        ceñida a una combinación de conceptos preestablecidos. Ahora este
        cerebro artificial funciona en dos fases: la primera usa otro modelo de
        lenguaje de
        <a
          className="text-blue-500 mr-2"
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open AI
        </a>
        llamado CLIP, que traduce descripciones de texto en imágenes. Luego se
        ejecuta un tipo de red neuronal (modelo de difusión) para que la imagen
        generada sea lo suficientemente parecida a lo que quiere el CLIP.
      </p>
      <p className="w-5/6 mx-auto mt-10 mb-11">
        Ese modelo de difusión se ha entrenado con imágenes distorsionadas donde
        sus píxeles estaban desordenados de manera aleatoria. Así consigue ser
        capaz de coger un puñado de esos pixeles y gracias a CLIP convertirlos
        en
        <em style={{ marginLeft: "2px" }}>
          una imagen en alta resolución totalmente nueva que coincide con el
          texto de la descripción.
        </em>
      </p>
    </section>
  );
};

