import React from "react";

import {
  ImageContainer,
  ImageStyled,
  ContainerDownload,
  DivImage,
} from "./styled";

import { MyComponentSkeleton } from "./components/Skeleton/Skeleton";
import DownloadIcon from "@mui/icons-material/Download";

export const handleDownload = async (url: any) => {
  const response = await fetch(url);
  console.log(response);
  const blob = await response.blob();
  console.log(blob);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `image${Math.floor(Math.random() * 1000)}.png`;
  link.click();
};
export const ImageComponent = (props: any) => {
  const { imageUrl, loading } = props;

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
        <DivImage key={index}>
          <ImageStyled
            key={index}
            src={url.url}
            alt={`generated image with url ${url.url}`}
          />
          <button onClick={() => handleDownload(url.url)}>
            <ContainerDownload>
              <DownloadIcon />
            </ContainerDownload>
          </button>
        </DivImage>
      ))}
    </ImageContainer>
  );
};
