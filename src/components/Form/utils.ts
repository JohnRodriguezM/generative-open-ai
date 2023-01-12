import { FormProps, OptionsType } from './type';

export const initialValues: FormProps = {
  prompt: "",
  n: 8,
  size: "256x256",
}

export const url: string = `http://localhost:7000/openai`

export const options: OptionsType[] = [
  { value: "256x256", label: "256x256" },
  { value: "512x512", label: "512x512" },
  { value: "1024x1024", label: "1024x1024" },
]

