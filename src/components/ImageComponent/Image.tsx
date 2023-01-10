import React from "react";

import {
  ImageContainer,
  ImageStyled,
  ContainerDownload,
  DivImage,
} from "./styled";

import { MyComponentSkeleton } from "../../Atoms/Skeleton/Skeleton";
import DownloadIcon from "@mui/icons-material/Download";
import { handleDownload } from "../../utils/Functions/Functions";

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
