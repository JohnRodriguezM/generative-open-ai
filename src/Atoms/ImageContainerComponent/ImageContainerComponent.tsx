import React, { FC, useContext, useEffect } from "react";

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
import { DataContext } from "../../Context/DataContext";

export const ImageContainerComponent: FC = ({ ...props }) => {
  const { setData, data, loading } = useContext(DataContext);

  if (loading) {
    return (
      <ImageContainer>
        <MyComponentSkeleton />
      </ImageContainer>
    );
  }

  const handleClick = (index: any): any => {
    const newImages = [...data];
    console.log(newImages);
    newImages[index].expanded = !newImages[index].expanded;
    setData(newImages);
  };

  return (
    <ImageContainer>
      {data.map((url: any, index: number) => (
        <>
          <DivImage
            key={index}
            className={url.expanded ? "scale-125 z-10" : ""}
          >
            <ImageStyled
              key={index}
              src={url.image || url.url || url.srcSmall}
              alt={`generated image with url ${
                url.image || url.url || url.srcSmall || url.image
              }`}
            />

            <button
              onClick={() =>
                handleDownload(url.image || url.url || url.srcSmall)
              }
            >
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
