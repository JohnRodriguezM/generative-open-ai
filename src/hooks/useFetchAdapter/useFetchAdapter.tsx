import React from "react";
import { get } from "./../../utils/Adapter/AxiosAdapter";

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
      alert(error);
    }
  };
  const handleGetImageOpenAI = async (
    url: string,
    setLoading: Function,
    Setstate: Function
  ) => {
    setLoading(true);
    try {
      const response = await get({
        url,
      });
      Setstate(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return { handleGetImageLexica, handleGetImageOpenAI };
};
