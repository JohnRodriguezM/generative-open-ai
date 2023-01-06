import React from "react";

import { ImageContainer, ImageStyled } from "./styled";

import { MyComponentSkeleton } from "./components/Skeleton/Skeleton";

export const ImageComponent = (props: any) => {
  const { imageUrl, loading } = props;

  const handleDownload = async (url:any) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'imagen.jpg';
    link.click();
  };

  if (loading) {
    return (
      <ImageContainer>
        <MyComponentSkeleton />
      </ImageContainer>
    );
  }

  return (
    <ImageContainer>
      {" "}

      {imageUrl.map((url: any, index: number) => (
        <>

        <ImageStyled
          key={index}
          src={url.url}
          alt={`generated image with url ${url.url}`}
        />
        <button
          onClick={() => handleDownload(url.url)}
        >guardar imagen como</button>
        </>
      ))}
    </ImageContainer>
  );
};
