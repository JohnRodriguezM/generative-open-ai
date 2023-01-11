import React, { FC, useState, useEffect } from "react";

import { MyComponentSkeleton } from "../Skeleton/Skeleton";

import {
  ContainerDownload,
  ContainerExpand,
  DivImage,
  ImageContainer,
  ImageStyled,
} from "./Styled";

import DownloadIcon from "@mui/icons-material/Download";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { handleDownload } from "../../utils/Functions/Functions";
import { ImageContainerProps } from "./type";

export const ImageContainerComponent: FC<ImageContainerProps> = ({
  array,
  loading,
  setArray,
  ...props
}) => {
  if (loading) {
    return (
      <ImageContainer>
        <MyComponentSkeleton />
      </ImageContainer>
    );
  }

  const handleClick = (index: any): any => {
    const newImages = [...array];
    console.log(newImages);
    newImages[index].expanded = !newImages[index].expanded;
    setArray(newImages);
  };

  return (
    <ImageContainer>
      {array.map((url: any, index: number) => (
        <>
          <DivImage
            key={index}
            className={url.expanded ? "scale-125 z-10" : ""}
          >
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

            <button onClick={() => handleClick(index)}>
              <ContainerExpand>
                {url.expanded ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
              </ContainerExpand>
            </button>
          </DivImage>
        </>
      ))}
    </ImageContainer>
  );
};
