import React, { FC, useState, useEffect } from "react";

import { MyComponentSkeleton } from "../Skeleton/Skeleton";

import {
  ContainerDownload,
  DivImage,
  ImageContainer,
  ImageStyled,
} from "./Styled";

import DownloadIcon from "@mui/icons-material/Download";

import { handleDownload } from "../../utils/Functions/Functions";
import { ImageContainerProps } from "./type";

export const ImageContainerComponent: FC<ImageContainerProps> = ({
  array,
  loading,
  ...props
}) => {
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
      {array.map((url: any, index: number) => (
        <DivImage key={index}>
          <ImageStyled
            key={index}
            src={url.url || url.srcSmall}
            alt={`generated image with url ${url.url || url.srcSmall}`}
          />
          <button onClick={() => handleDownload(url.url || url.srcSmall)}>
            <ContainerDownload>
              <DownloadIcon />
            </ContainerDownload>
          </button>
        </DivImage>
      ))}
    </ImageContainer>
  );
};
