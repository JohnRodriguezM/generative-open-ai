import React from "react";
import { get, post } from "./../../utils/Adapter/AxiosAdapter";

export const useFetchAdapter = () => {
  const handleGetImageLexica = async (
    url: string,
    setLoading: Function,
    Setstate: Function
  ) => {
    setLoading(true);
    try {
      const response = await get({
        url,
      });
      Setstate(response.images);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      /*alert(error);*/
    }
  };
  const handlePostImageOpenAI = async (
    url: string,
    data: any,
    setLoading: Function,
    Setstate: Function
  ) => {
    setLoading(true);
    try {
      const response = await post({
        url,
        data,
      });
      Setstate(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("error al crear imagen, intenta más tarde");
    }
  };

  return { handleGetImageLexica, handlePostImageOpenAI };
};
